import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Gallery from "@/app/components/Gallery/Gallery";
import JsonLd from "@/app/components/JsonLd/JsonLd";
import type { GalleryImage } from "@/lib/data";
import { getGallery, couples } from "@/lib/galleries";

const SITE_URL = "https://www.kusakinphoto.com";
const IMG_BASE = "https://images.kusakinphoto.com";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return couples.map((g) => ({ id: g.id }));
}

// A 1200px-wide CDN image URL with proportional height, for OG/structured data.
const imageUrl = (img: GalleryImage) => `${IMG_BASE}/${img.src}-1200.webp`;
const scaledHeight = (img: GalleryImage) =>
  Math.round((1200 * img.height) / img.width);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const couple = getGallery(id);
  if (!couple) {
    return {
      title: "Couple Not Found | Boston Wedding Photographer",
      description: "The requested couple gallery could not be found.",
    };
  }
  return {
    title: `${couple.name} Couple | Andrew Kusakin Photography`,
    description: `The beautiful images of ${couple.name} at ${couple.venue} in ${couple.location}.`,
    alternates: {
      canonical: `/couple/${id}`,
    },
    openGraph: {
      title: `${couple.name} Couple | Andrew Kusakin Photography`,
      description: `The beautiful images of ${couple.name} at ${couple.venue} in ${couple.location}.`,
      type: "article",
      url: `${SITE_URL}/couple/${id}`,
      images: couple.hero
        ? [
            {
              url: imageUrl(couple.hero),
              width: 1200,
              height: scaledHeight(couple.hero),
              alt: `${couple.name} session at ${couple.venue}`,
            },
          ]
        : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const gallery = getGallery(id);

  if (!gallery) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/couple/${id}`;

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${gallery.name} Couple Session`,
    description: `Couple photography of ${gallery.name} at ${gallery.venue} in ${gallery.location} by Andrew Kusakin.`,
    url: pageUrl,
    image: (gallery.images ?? []).map((img) => ({
      "@type": "ImageObject",
      contentUrl: imageUrl(img),
      width: 1200,
      height: scaledHeight(img),
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${SITE_URL}/portfolio`,
      },
      { "@type": "ListItem", position: 3, name: gallery.name, item: pageUrl },
    ],
  };

  return (
    <div>
      <JsonLd data={gallerySchema} />
      <JsonLd data={breadcrumbSchema} />
      <Gallery gallery={gallery} />
    </div>
  );
}
