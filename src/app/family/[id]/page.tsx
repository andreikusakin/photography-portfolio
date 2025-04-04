import React from "react";
import { families } from "@/lib/data";
import Gallery from "@/app/components/Gallery/Gallery";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params;
  const familyImages = families.find((family) => family.id === id);
  if (!familyImages) {
    return {
      title: "Family Session Not Found | Boston Family Photographer",
      description: "The requested family gallery could not be found.",
    };
  }
  return {
    title: `${familyImages.name} Family | Boston Family Photographer`,
    description: `The beautiful family session of ${familyImages.name} at ${familyImages.venue} in ${familyImages.location}.`,
    alternates: {
      canonical: `/family/${id}`,
    },
    openGraph: {
      title: `${familyImages.name} Family | Andrew Kusakin Photography`,
      description: `View the beautiful family session of ${familyImages.name} at ${familyImages.venue} in ${familyImages.location}. Boston Family Photography by Andrew Kusakin.`,
    }
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const familyImages = families.find((family) => family.id === id);
  if (!familyImages) {
    return <div>Images not found</div>;
  }
  return <div>
    <Gallery gallery={familyImages}/>
  </div>;
}
