import React from "react";
import GalleryList from "../GalleryList/GalleryList";
import EmblaCarousel from "../Carousel/EmblaCarousel";
import { Gallery, Highlight } from "@/lib/data";
import styles from "./PortfolioGallery.module.css";

export default function PortfolioGallery({

  galleries,
  highlights,
}: {
  galleries: Gallery[];
  highlights: Highlight[];
}) {
  return (
    <div style={{ overflow: "hidden" }}
      className={styles.container}
    >
      <div className={styles.title}>
        <h3>Highlights</h3>
      </div>
      <div>
        <EmblaCarousel slides={highlights} />
      </div>
      <div className={styles.title}>
        <h3>Galleries</h3>
      </div>
      <div>
        <GalleryList gallery={galleries} />
      </div>
    </div>
  );
}
