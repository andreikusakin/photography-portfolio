import React from "react";
import { weddings } from "@/lib/data";
import Gallery from "@/app/components/Gallery/Gallery";

type Params = Promise<{ id: string }>;

export default async function WeddingPage(props: {
  params: Params
}) {
  const params = await props.params;
  const wedding = weddings.find((wedding) => wedding.id === params.id);
  if (!wedding) {
    return <div>Images not found</div>;
  }
  return <div>
    <Gallery gallery={wedding}/>
  </div>;
}
