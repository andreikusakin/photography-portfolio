import React from "react";
import { weddings } from "@/lib/data";
import Image from "next/image";
import Gallery from "@/app/components/Gallery/Gallery";

export default function WeddingPage({ params }: { params: { id: string } }) {
  const wedding = weddings.find((wedding) => wedding.id === params.id);
  return <div>
    <Gallery gallery={wedding}/>
  </div>;
}
