import React from "react";
import { weddings } from "@/lib/data";
import Gallery from "@/app/components/Gallery/Gallery";
import type { Metadata } from "next";

type Params = { id: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const wedding = weddings.find((wedding) => wedding.id === params.id);
  
  if (!wedding) {
    return {
      title: "Wedding Not Found | Boston Wedding Photographer",
      description: "The requested wedding gallery could not be found.",
    };
  }
  
  return {
    title: `${wedding.name} Wedding | Boston Wedding Photographer`,
    description: `The beautiful wedding of ${wedding.name} at ${wedding.venue} in ${wedding.location}.`,
    alternates: {
      canonical: `/weddings/${params.id}`,
    },
    openGraph: {
      title: `${wedding.name} Wedding | Andrew Kusakin Photography`,
      description: `View the beautiful wedding of ${wedding.name} at ${wedding.venue} in ${wedding.location}. Boston Wedding Photography by Andrew Kusakin.`,
    }
  };
}

export default async function WeddingPage(props: {
  params: Params
}) {
  const wedding = weddings.find((wedding) => wedding.id === props.params.id);
  
  if (!wedding) {
    return <div>Images not found</div>;
  }
  
  return <div>
    <Gallery gallery={wedding}/>
  </div>;
}
