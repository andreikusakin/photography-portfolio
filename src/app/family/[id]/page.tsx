import React from "react";
import { family } from "@/lib/data";
import Gallery from "@/app/components/Gallery/Gallery";

type Params = Promise<{ id: string }>;

export default async function familyPage(props: {
  params: Params
}) {
  const params = await props.params;
  const familyImages = family.find((family) => family.id === params.id);
  if (!familyImages) {
    return <div>Images not found</div>;
  }
  return <div>
    <Gallery gallery={familyImages}/>
  </div>;
}
