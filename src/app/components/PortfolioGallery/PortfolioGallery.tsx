import React from "react";
import GalleryList from "../GalleryList/GalleryList";
import { Gallery } from "@/lib/data";
import styles from "./PortfolioGallery.module.css";

export default function PortfolioGallery({
  galleries,
}: {
  galleries: Gallery[];
}) {
  return (
    <div className={styles.container}>
      <GalleryList gallery={galleries} />
    </div>
  );
}
