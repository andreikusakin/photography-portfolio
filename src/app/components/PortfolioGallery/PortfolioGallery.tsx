import React from "react";
import GalleryList from "../GalleryList/GalleryList";
import EmblaCarousel from "../Carousel/EmblaCarousel";
import PageContainer from "../PageContainer/PageContainer";
import { MotionDiv } from "../MotionDiv/MotionDiv";
import { Gallery, Highlight } from "@/lib/data";

export default function PortfolioGallery({
  name,
  galleries,
  highlights,
}: {
  name: string;
  galleries: Gallery[];
  highlights: Highlight[];
}) {
  return (
    <PageContainer>
      <MotionDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h1>{name} Highlights</h1>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      >
        <EmblaCarousel slides={highlights} />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
      >
        <h1>Explore More</h1>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeInOut" }}
      >
        <GalleryList gallery={galleries} />
      </MotionDiv>
    </PageContainer>
  );
}
