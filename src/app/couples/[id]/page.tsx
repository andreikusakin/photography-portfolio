import React from "react";
import { portraits } from "@/lib/data";
import Image from "next/image";
import Gallery from "@/app/components/Gallery/Gallery";

export default function PortraitPage({ params }: { params: { id: string } }) {
  const portrait = portraits.find((wedding) => wedding.id === params.id);
  return <div>
    <Gallery gallery={portrait}/>
  </div>;
}
