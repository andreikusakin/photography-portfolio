import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Gallery from "@/app/components/Gallery/Gallery";
import JsonLd from "@/app/components/JsonLd/JsonLd";
import type { GalleryImage } from "@/lib/data";
import { getGallery, weddings, intimateWeddings } from "@/lib/galleries";

const SITE_URL = "https://www.kusakinphoto.com";
const IMG_BASE = "https://images.kusakinphoto.com";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return [...weddings, ...intimateWeddings].map((g) => ({ id: g.id }));
}

// A 1200px-wide CDN image URL with proportional height, for OG/structured data.
const imageUrl = (img: GalleryImage) => `${IMG_BASE}/${img.src}-1200.webp`;
const scaledHeight = (img: GalleryImage) =>
  Math.round((1200 * img.height) / img.width);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const wedding = getGallery(id);

  if (!wedding) {
    return {
      title: "Wedding Not Found | Boston Wedding Photographer",
      description: "The requested wedding gallery could not be found.",
    };
  }

  // Fold the venue into the title — couples search for venue names directly
  const titleBase = wedding.venue
    ? `${wedding.name}'s Wedding at ${wedding.venue}`
    : `${wedding.name} Wedding`;

  return {
    title: `${titleBase} | Boston Wedding Photographer`,
    description: `The beautiful wedding of ${wedding.name} at ${wedding.venue} in ${wedding.location}.`,
    alternates: {
      canonical: `/wedding/${id}`,
    },
    openGraph: {
      title: `${titleBase} | Andrew Kusakin Photography`,
      description: `View the beautiful wedding of ${wedding.name} at ${wedding.venue} in ${wedding.location}. Boston Wedding Photography by Andrew Kusakin.`,
      type: "article",
      url: `${SITE_URL}/wedding/${id}`,
      images: wedding.hero
        ? [
            {
              url: imageUrl(wedding.hero),
              width: 1200,
              height: scaledHeight(wedding.hero),
              alt: `${wedding.name} wedding at ${wedding.venue}`,
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

  const pageUrl = `${SITE_URL}/wedding/${id}`;

  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${gallery.name} Wedding`,
    description: `Wedding photography of ${gallery.name} at ${gallery.venue} in ${gallery.location} by Andrew Kusakin.`,
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
