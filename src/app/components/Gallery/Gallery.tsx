'use client'

import React, { useState, useEffect } from "react";
import type { Gallery } from "@/lib/data";
import styles from "./Gallery.module.css";
import { MotionDiv } from "../MotionDiv/MotionDiv";
import PageContainer from "../PageContainer/PageContainer";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Gallery({ gallery }: { gallery: Gallery }) {
  // We'll track loaded images to handle natural dimensions
  const [imagesData, setImagesData] = useState<Array<{ width: number; height: number }>>([]);
  
  useEffect(() => {
    // Pre-load images to get their dimensions
    const preloadImages = async () => {
      const imagePromises = Array.from({ length: gallery.count }, (_, i) => {
        return new Promise<{ width: number; height: number }>((resolve) => {
          const img = new window.Image();
          img.src = `/${gallery.type}/${gallery.id}/${i + 1}.jpg`;
          img.onload = () => {
            resolve({ width: img.width, height: img.height });
          };
          img.onerror = () => {
            resolve({ width: 800, height: 1200 }); // Fallback dimensions
          };
        });
      });
      
      const loadedImagesData = await Promise.all(imagePromises);
      setImagesData(loadedImagesData);
    };
    
    preloadImages();
  }, [gallery]);

  return (
    <PageContainer>
      <MotionDiv
        className={styles.description}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h5>{gallery.name}</h5>
        <div>
          <div>{gallery.venue}</div>
          <div>{gallery.location}</div>
        </div>
      </MotionDiv>
      <MotionDiv
        className={styles.images_wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 767: 2, 991: 4 }}>
          <Masonry gutter="1em">
            {Array.from({ length: gallery.count }, (_, i) => i + 1).map(
              (item, index) => (
                <MotionDiv
                  key={item}
                  className={styles.image_container}
                  variants={{
                    offscreen: {
                      opacity: 0,
                      y: 10,
                    },
                    onscreen: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                      },
                    },
                  }}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                >
                  {imagesData[index] ? (
                    <Image
                      src={`/${gallery.type}/${gallery.id}/${item}.jpg`}
                      alt={`${gallery.name} image-${item}`}
                      quality={90}
                      width={imagesData[index].width}
                      height={imagesData[index].height}
                      style={{ 
                        width: '100%', 
                        height: 'auto', 
                        objectFit: "contain" 
                      }}
                    />
                  ) : (
                    <div className={styles.image_placeholder} />
                  )}
                </MotionDiv>
              )
            )}
          </Masonry>
        </ResponsiveMasonry>
      </MotionDiv>
    </PageContainer>
  );
}
