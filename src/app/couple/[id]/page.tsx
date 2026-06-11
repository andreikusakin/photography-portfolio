import React from "react";
import Gallery from "@/app/components/Gallery/Gallery";
import type { Metadata } from "next";
import { getGallery, couples } from "@/lib/galleries";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return couples.map((g) => ({ id: g.id }));
}

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
    },
  };
}

export default async function Page({ params }: Props) {


  const { id } = await params;
  const gallery = getGallery(id);

  if (!gallery) {
    return <div>Images not found</div>;
  }

  return <div>
  
    <Gallery gallery={gallery}/>
  </div>;
}
