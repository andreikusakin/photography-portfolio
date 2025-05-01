import React from "react";
import type { Gallery as GalleryType } from "@/lib/data"; 
import styles from "./Gallery.module.css";
import PageContainer from "../PageContainer/PageContainer";
import { MotionDiv } from "../MotionDiv/MotionDiv";
import MasonryComponent from "../MasonryComponent/MasonryComponent";
import fs from "fs/promises"; 
import path from "path"; 
import Image from "next/image";



interface ImageData {
  width: number;
  height: number;
  src: string;
  alt: string;
}

interface AllMetadata {
  [galleryKey: string]: ImageData[];
}

async function getImagesData(gallery: GalleryType): Promise<ImageData[]> {
  try {
    const metadataPath = path.join(
      process.cwd(),
      "public",
      "galleries-metadata.json"
    );
    const metadataFile = await fs.readFile(metadataPath, "utf-8");
    const allMetadata: AllMetadata = JSON.parse(metadataFile);

    const galleryKey = `${gallery.type}/${gallery.id}`;
    const imagesData = allMetadata[galleryKey] || []; 

    return imagesData.map((img) => ({
      ...img,
      alt: `${gallery.name} at ${gallery.venue}, ${gallery.location}; ${gallery.type} photography`,
    }));
  } catch (error) {
    console.error("Error reading galleries metadata:", error);
    return []; 
  }
}


export default async function Gallery({ gallery }: { gallery: GalleryType }) {
  const imagesData = await getImagesData(gallery);

  if (!imagesData || imagesData.length === 0) {
    return (
      <PageContainer>
        <p>Gallery not found or is empty.</p>
      </PageContainer>
    );
  }

  

  return (
    <PageContainer>
      <div className={styles.hero}>
        <div className={styles.hero_image}> <Image 
          src={imagesData[gallery.hero - 1].src}
          alt={`${gallery.name} at ${gallery.venue}, ${gallery.location}; ${gallery.type} photography`}
          width={1500}
          height={1500}
          quality={85}
          
        /></div>
       <div className={styles.text}>
        <h1>{gallery.name}</h1>
        <div>{gallery.venue}</div>
        <div>{gallery.location}</div>
        
       </div>
      </div>
        
      {/* <MotionDiv
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
      </MotionDiv> */}

      <MotionDiv
        className={styles.gallery}
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
