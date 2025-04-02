import React from "react";
import type { Gallery } from "@/lib/data";
import styles from "./Gallery.module.css";
import PageContainer from "../PageContainer/PageContainer";
import { imageSizeFromFile } from "image-size/fromFile";
import { MotionDiv } from "../MotionDiv/MotionDiv";
import MasonryComponent from "../MansoryComponent/MasonryComponent";
import path from "path";

async function getImagesData(gallery: Gallery) {
  const imagesData = await Promise.all(
    Array.from({ length: gallery.count }, async (_, i) => {
      const imagePath = path.join(
        process.cwd(),
        "public",
        gallery.type,
        gallery.id,
        (i + 1).toString() + ".jpg"
      )
      const dimensions = await imageSizeFromFile(imagePath);

      return {
        width: dimensions.width,
        height: dimensions.height,
        path: imagePath,
        alt:
          gallery.name +
          " at " +
          gallery.venue +
          ", " +
          gallery.location +
          "; " +
          gallery.type +
          " photography",
        src: "/" + gallery.type + "/" + gallery.id + "/" + (i + 1) + ".jpg",
      };
    })
  );
  return imagesData;
}

export default async function Gallery({ gallery }: { gallery: Gallery }) {
  const imagesData = await getImagesData(gallery);

  return (
    <PageContainer>
      <MotionDiv
        className={styles.description}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h5>{gallery.name}</h5>
        <div>
          <div>{gallery.venue}</div>
          <div>{gallery.location}</div>
        </div>
      </MotionDiv>

      <MotionDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      >
        <MasonryComponent imagesData={imagesData} />
      </MotionDiv>
    </PageContainer>
  );
}
