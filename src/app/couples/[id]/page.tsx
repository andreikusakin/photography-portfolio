import React from "react";
import { couples } from "@/lib/data";
import Gallery from "@/app/components/Gallery/Gallery";

type Params = Promise<{ id: string }>;

export default async function CouplePage(props: {
  params: Params
}) {
  const params = await props.params;
  const couple = couples.find((wedding) => wedding.id === params.id);
  if (!couple) {
    return <div>Images not found</div>;
  }
  return <div>
    <Gallery gallery={couple}/>
  </div>;
}
