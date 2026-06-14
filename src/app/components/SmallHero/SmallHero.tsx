"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./SmallHero.module.css";
import type { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from "motion/react";


export default function SmallHero({
  image,
  title,
  subtitle,
  alt,
}: {
  image: StaticImageData;
  title: string;
  subtitle: string;
  /** Per-page image alt; falls back to a generic brand line */
  alt?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textEmY = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const imageEmY = useTransform(scrollYProgress, [0, 1], [-2, 10]);

  const textY = useTransform(textEmY, (value) => `${value}em`);
  const imageY = useTransform(imageEmY, (value) => `${value}em`);

  return (
    <section className={styles.container} ref={containerRef}>
      <motion.div className={styles.heroImagesWrapper}
        initial={{ opacity: 0, filter: "blur(0.5em)"}}
        animate={{ opacity: 1, filter: "blur(0em)"}}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      >
        <motion.div
          className={`${styles.heroImage}
              `}
          style={{ y: imageY }}
        >
          <Image
            src={image}
            alt={
              alt ??
              "Fine art documentary wedding photography by Andrew Kusakin, Boston"
            }
            width={1500}
            height={1000}
            style={{ objectFit: "cover" }}
            quality={90}
            priority
          />
          
        </motion.div>
        
      </motion.div>
      <div className={styles.overlay}></div>
      <motion.div className={styles.heroTextWrapper} style={{ y: textY }}>
        <div className={styles.heroText}>
          <h1>
            <span className={styles.lineMask}>
              <motion.span
                className={styles.line}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3,
                }}
              >
                {title}
              </motion.span>
            </span>
          </h1>
          {subtitle && (
            <motion.div
              className={styles.subtitle}
              initial={{ opacity: 0, y: "0.8em" }}
              animate={{ opacity: 1, y: "0em" }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.6,
              }}
            >
              {subtitle}
            </motion.div>
          )}
        </div>
      </motion.div>

    </section>
  );
}
