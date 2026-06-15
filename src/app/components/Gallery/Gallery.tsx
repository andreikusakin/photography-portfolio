"use client";
import React, { useRef } from "react";
import Link from "next/link";
import type { Gallery as GalleryType } from "@/lib/data";
import styles from "./Gallery.module.css";
import MasonryComponent from "../MasonryComponent/MasonryComponent";
import Photo from "../Photo/Photo";
import { motion, useScroll, useTransform } from "motion/react";

const customEase = [0.16, 1, 0.3, 1] as const;

const TYPE_LABEL: Record<string, string> = {
  wedding: "A Wedding Story",
  couple: "A Couple Session",
};

export default function Gallery({ gallery }: { gallery: GalleryType }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const imagesData = gallery.images?.map((image) => ({
    alt: `${gallery.name} at ${gallery.venue}, ${gallery.location}; ${gallery.type} photography`,
    src: image.src,
    width: image.width,
    height: image.height,
  }));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const textEmY = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const imageEmY = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const textY = useTransform(textEmY, (value) => `${value}em`);
  const imageY = useTransform(imageEmY, (value) => `${value}em`);

  const eyebrow = TYPE_LABEL[gallery.type] ?? "A Story";
  const meta = [gallery.venue, gallery.location].filter(Boolean).join("  ·  ");

  return (
    <div>
      <div className={styles.hero} ref={containerRef}>
        <motion.div
          className={styles.hero_image}
          style={{ y: imageY }}
          initial={{ opacity: 0, filter: "blur(0.5em)" }}
          animate={{ opacity: 1, filter: "blur(0em)" }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
        >
          <Photo
            src={gallery.hero?.src || ""}
            alt={`${gallery.name} at ${gallery.venue}, ${gallery.location}; ${gallery.type} photography`}
            width={gallery.hero?.width || 1500}
            height={gallery.hero?.height || 1000}
            sizes="100vw"
            priority
            style={{ height: "100%", objectFit: "cover" }}
          />
        </motion.div>

        <div className={styles.overlay} aria-hidden="true"></div>

        <motion.div className={styles.text} style={{ y: textY }}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: "0.8em" }}
            animate={{ opacity: 1, y: "0em" }}
            transition={{ duration: 1, ease: customEase, delay: 0.5 }}
          >
            {eyebrow}
          </motion.p>

          <h1 className={styles.title}>
            <span className={styles.lineMask}>
              <motion.span
                className={styles.line}
                /* 150% (not 110%) so the line fully clears the mask's extra
                   bottom padding and no text peeks on the first frame */
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.4, ease: customEase, delay: 0.6 }}
              >
                {gallery.name}
              </motion.span>
            </span>
          </h1>

          {meta && (
            <motion.p
              className={styles.meta}
              initial={{ opacity: 0, y: "0.8em" }}
              animate={{ opacity: 1, y: "0em" }}
              transition={{ duration: 1.2, ease: customEase, delay: 0.95 }}
            >
              {meta}
            </motion.p>
          )}
        </motion.div>
      </div>

      <div className={styles.gallery}>
        <MasonryComponent imagesData={imagesData || []} />
      </div>

      {/* Closing: route back to the portfolio so the gallery isn't a dead-end */}
      <div className={styles.outro}>
        <Link href="/portfolio" className={styles.backLink}>
          <span className={styles.backArrow} aria-hidden="true">
            &larr;
          </span>
          <span className={styles.backLabel}>Back to Portfolio</span>
        </Link>
      </div>
    </div>
  );
}
