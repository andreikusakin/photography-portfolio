import React from "react";
import type { Gallery } from "@/lib/data";
import styles from "./Gallery.module.css";
import { MotionDiv } from "../MotionDiv/MotionDiv";
import PageContainer from "../PageContainer/PageContainer";
import Image from "next/image";

export default function Gallery({ gallery }: { gallery: Gallery }) {
  return (
    <PageContainer>
      <MotionDiv
        className={styles.description}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1>{gallery.name}</h1>
        <h2>{gallery.venue}</h2>
        <h2>{gallery.location}</h2>
      </MotionDiv>
      <MotionDiv className={styles.images_wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      >
        {Array.from({ length: gallery.count }, (_, i) => i + 1).map((item) => (
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
            <Image
              src={`/${gallery.type}/${gallery.id}/${item}.jpg`}
              alt={`${gallery.name} image-${item}`}
              quality={90}
              width={1500}
              height={1500}
            />
          </MotionDiv>
        ))}
      </MotionDiv>
    </PageContainer>
  );
}
