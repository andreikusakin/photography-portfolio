"use client";
import React, { useRef } from "react";
import type { Gallery as GalleryType } from "@/lib/data";
import styles from "./Gallery.module.css";
import MasonryComponent from "../MasonryComponent/MasonryComponent";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

export default function Gallery({ gallery }: { gallery: GalleryType }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const imagesData = gallery.images?.map((image) => ({
    alt: `${gallery.name} at ${gallery.venue}, ${gallery.location}; ${gallery.type} photography`,
    src: image,
  }));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const textEmY = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const imageEmY = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const textY = useTransform(textEmY, (value) => `${value}em`);
  const imageY = useTransform(imageEmY, (value) => `${value}em`);

  return (
    <div>
      <div className={styles.hero} ref={containerRef}>
        <motion.div className={styles.hero_image} style={{ y: imageY }}>
          {" "}
          <Image
            src={gallery.hero}
            alt={`${gallery.name} at ${gallery.venue}, ${gallery.location}; ${gallery.type} photography`}
            width={1500}
            height={1500}
            quality={85}
          />
        </motion.div>
        <motion.div className={styles.text} style={{ y: textY }}>
          <h1>{gallery.name}</h1>
          <div>{gallery.venue}</div>
          <div>{gallery.location}</div>
        </motion.div>
      </div>

      <div className={styles.gallery}>
        <MasonryComponent imagesData={imagesData || []} />
      </div>
    </div>
  );
}
