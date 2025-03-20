import React from "react";
import { couples } from "@/lib/data";
import Gallery from "@/app/components/Gallery/Gallery";
import type { Metadata } from "next";

type Params = { id: string };
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const couple = couples.find((couple) => couple.id === params.id);
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
      canonical: `/couples/${params.id}`,
    },
    openGraph: {
      title: `${couple.name} Couple | Andrew Kusakin Photography`,
      description: `The beautiful images of ${couple.name} at ${couple.venue} in ${couple.location}.`,
    },
  };
}

export default async function CouplePage(props: {
  params: Params
}) {
  const couple = couples.find((couple) => couple.id === props.params.id);
  if (!couple) {
    return <div>Images not found</div>;
  }
  return <div>
    <Gallery gallery={couple}/>
  </div>;
}
