// Single source of truth for portfolio galleries: the Sharp-generated
// galleries.json manifest. Nothing else (data.ts arrays, data.galleries.json)
// feeds the portfolio anymore.
//
// Image `src`s are Bunny-relative paths that the Photo component turns into
// https://images.kusakinphoto.com/<src>-<w>.webp.
//
// Metadata (title/venue/location) comes from each gallery's meta.json, merged
// into the manifest by the Sharp script. When a title is blank we derive a
// display name from the folder id (e.g. "angela-sean" -> "Angela & Sean").

import manifest from "./galleries.json";
import type { Gallery, GalleryImage } from "./data";

interface ManifestImage {
  src: string;
  width: number;
  height: number;
}

interface ManifestGallery {
  category: string;
  title?: string;
  venue?: string;
  location?: string;
  date?: string;
  cover?: string; // optional meta.json override, by file basename
  covers?: string[]; // [defaultCover, hoverImage] basenames, from meta.json
  hero?: string; // optional meta.json override, by file basename
  images: ManifestImage[];
}

const data = manifest as Record<string, ManifestGallery>;

// Folder category -> route segment (and Gallery.type).
const ROUTE: Record<string, "wedding" | "couple"> = {
  couples: "couple",
  weddings: "wedding",
  "intimate-weddings-elopements": "wedding",
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const nameFromId = (id: string) =>
  id
    .split("-")
    .map(cap)
    .join(" & ");

const toImage = (i: ManifestImage): GalleryImage => ({
  id: i.src,
  src: i.src,
  width: i.width,
  height: i.height,
});

// meta.json names cover/hover/hero images by file basename; resolve one to the
// matching manifest image (or undefined if it isn't found / isn't set).
const resolve = (name: string | undefined, images: ManifestImage[]) =>
  name ? images.find((i) => i.src === name || i.src.endsWith(`/${name}`)) : undefined;

// covers[0] (or legacy `cover`) is the default thumbnail; first image otherwise.
const pickCover = (g: ManifestGallery): GalleryImage =>
  toImage(
    resolve(g.covers?.[0], g.images) ??
      resolve(g.cover, g.images) ??
      g.images[0]
  );

// covers[1] is the hover image; otherwise fall back to the next image so every
// multi-image gallery still swaps on hover. undefined for single-image galleries.
const pickCoverHover = (
  g: ManifestGallery,
  cover: GalleryImage
): GalleryImage | undefined => {
  const img =
    resolve(g.covers?.[1], g.images) ??
    g.images.find((i) => i.src !== cover.src);
  return img ? toImage(img) : undefined;
};

const pickHero = (g: ManifestGallery): GalleryImage =>
  toImage(
    resolve(g.hero, g.images) ??
      g.images.find((i) => i.width > i.height) ??
      g.images[0]
  );

function build(key: string, g: ManifestGallery): Gallery {
  const id = key.split("/").slice(1).join("/");
  const cover = pickCover(g);
  return {
    id,
    type: ROUTE[g.category] ?? "wedding",
    name: g.title?.trim() || nameFromId(id),
    venue: g.venue ?? "",
    location: g.location ?? "",
    cover,
    coverHover: pickCoverHover(g, cover),
    hero: pickHero(g),
    images: g.images.map(toImage),
  };
}

// Build every gallery that has at least one image, keeping its category for
// section grouping on the portfolio page.
const built = Object.entries(data)
  .filter(([, g]) => g.images?.length)
  .map(([key, g]) => ({ category: g.category, gallery: build(key, g) }));

const inCategory = (cat: string) =>
  built.filter((b) => b.category === cat).map((b) => b.gallery);

export const weddings = inCategory("weddings");
export const intimateWeddings = inCategory("intimate-weddings-elopements");
export const couples = inCategory("couples");

export const allGalleries: Gallery[] = built.map((b) => b.gallery);

const byId = new Map(allGalleries.map((g) => [g.id, g]));
export const getGallery = (id: string): Gallery | undefined => byId.get(id);
