"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { CldImage } from 'next-cloudinary';
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

type HeroImage = {
  src: string;
  alt: string;
  name: string;
};

// ─────────────────────────────────────────────────────────────
// HERO IMAGES — outer array = columns, inner = cycle list per column.
// Add more entries to either inner array to cycle through more images.
// ─────────────────────────────────────────────────────────────
const heroSlots: HeroImage[][] = [
  // Left column
  [
    {
      src: "000041-AndrewKusakinPhotography_twhdke",
      alt: "Alexandra and Adam wedding photography at Glen Island Harbour Club in New Rochelle, New York",
      name: "Alexandra + Adam",
    },
    {
      src: "000021-AndrewKusakinPhotography_fyyfez",
      alt: "Maddy and Alex wedding photography at Smith Farm Gardens in East Haddam, Connecticut",
      name: "Maddy + Alex",
    },
    {
      src: "000059_a1irkv",
      alt: "Maddy and Alex wedding photography at Smith Farm Gardens in East Haddam, Connecticut",
      name: "Maddy + Alex",
    },
    {
      src: "000040_o8uglw",
      alt: "Maddy and Alex wedding photography at Smith Farm Gardens in East Haddam, Connecticut",
      name: "Maddy + Alex",
    },
  ],
  // Right column
  [
    {
      src: "000021-AndrewKusakinPhotography_fyyfez",
      alt: "Maddy and Alex wedding photography at Smith Farm Gardens in East Haddam, Connecticut",
      name: "Maddy + Alex",
    },
    {
      src: "000041-AndrewKusakinPhotography_twhdke",
      alt: "Alexandra and Adam wedding photography at Glen Island Harbour Club in New Rochelle, New York",
      name: "Alexandra + Adam",
    },
  ],
];

const CYCLE_INTERVAL_MS = 4000;
// Stagger between columns so they don't swap simultaneously
const COLUMN_OFFSET_MS = 2000;

// Custom cinematic easing curve
const customEase = [0.16, 1, 0.3, 1];

// Parent container animation variants (controls the stagger)
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4, // Waits briefly for the background blur to clear
    },
  },
};

// Individual text element animation variants
const textItemVariants = {
  hidden: { opacity: 0, y: "1.5em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: {
      duration: 1.2,
      ease: customEase,
    },
  },
};

// ─────────────────────────────────────────────────────────────
// One hero column — manages its own cycle state and crossfade.
// Outgoing image holds at z-index:1 opacity:1 while incoming
// fades in at z-index:2 — no see-through during transitions.
// ─────────────────────────────────────────────────────────────
const FADE_DURATION_MS = 1500;

function HeroColumn({
  images,
  startDelay,
  imageY,
  priority,
}: {
  images: HeroImage[];
  startDelay: number;
  imageY: MotionValue<string>;
  priority: boolean;
}) {
  // Two-layer crossfade:
  //   displayIndex — the image always visible underneath at opacity 1
  //   pendingIndex — the incoming image fading in on top; remounts every cycle
  //                  via `key`, guaranteeing a fresh 0→1 fade even when an
  //                  image cycles back (which the prev/active pattern fails on
  //                  for short cycle lists).
  const [displayIndex, setDisplayIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    let intervalId: ReturnType<typeof setInterval>;
    let nextIndex = 0;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        nextIndex = (nextIndex + 1) % images.length;
        setPendingIndex(nextIndex);
      }, CYCLE_INTERVAL_MS);
    }, startDelay);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [images.length, startDelay]);

  // After the fade-in completes, promote the pending image to the display layer
  // and unmount the foreground layer.
  useEffect(() => {
    if (pendingIndex === null) return;
    const t = setTimeout(() => {
      setDisplayIndex(pendingIndex);
      setPendingIndex(null);
    }, FADE_DURATION_MS);
    return () => clearTimeout(t);
  }, [pendingIndex]);

  return (
    <motion.div className={styles.heroImagePair} style={{ y: imageY }}>
      {/* Display layer — always visible behind */}
      <div className={styles.imageWrapper} style={{ zIndex: 1 }}>
        <CldImage
          src={images[displayIndex].src}
          alt={images[displayIndex].alt}
          title={images[displayIndex].name}
          width={1500}
          height={1500}
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={90}
          priority={priority}
        />
      </div>

      {/* Pending layer — fades in fresh each cycle (key forces remount) */}
      {pendingIndex !== null && (
        <motion.div
          key={pendingIndex}
          className={styles.imageWrapper}
          style={{ zIndex: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: FADE_DURATION_MS / 1000, ease: "easeInOut" }}
        >
          <CldImage
            src={images[pendingIndex].src}
            alt={images[pendingIndex].alt}
            title={images[pendingIndex].name}
            width={1500}
            height={1500}
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={90}
          />
        </motion.div>
      )}

      <div className={styles.imageOverlay}></div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle image parallax (drifts background down slightly)
  const imageEmY = useTransform(scrollYProgress, [0, 1], [0, 4]);
  const imageY = useTransform(imageEmY, (value) => `${value}em`);

  // Strong text parallax (pulls foreground down much faster)
  const textEmY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const textY = useTransform(textEmY, (value) => `${value}em`);

  // Fade out: starts at 70% scroll through hero, gone by 100%
  const heroOpacity = useTransform(scrollYProgress, [0.5, 0.9], [1, 0]);

  return (
    <section className={styles.container} ref={containerRef}>
      <motion.div style={{ opacity: heroOpacity, height: "100%" }}>
      <motion.div
        className={styles.heroImagesWrapper}
        initial={{ opacity: 0, filter: "blur(0.5em)" }}
        whileInView={{ opacity: 1, filter: "blur(0em)" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {heroSlots.map((columnImages, columnIndex) => (
          <HeroColumn
            key={columnIndex}
            images={columnImages}
            startDelay={columnIndex * COLUMN_OFFSET_MS}
            imageY={imageY}
            priority={columnIndex === 0}
          />
        ))}
      </motion.div>
      </motion.div>

      {/* Cinematic Staggered Text Wrapper */}
      <motion.div
        className={styles.heroTextWrapper}
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Inner div that receives the strong parallax scroll effect */}
        <motion.div className={styles.heroText} style={{ y: textY }}>

          <motion.h1 className={styles.mainHeading} variants={textItemVariants}>
            The Art of Honest Connection
          </motion.h1>
                    <motion.p className={styles.eyebrow} variants={textItemVariants}>
            Boston Wedding Photographer
          </motion.p>
          {/* <motion.h2 className={styles.subHeading} variants={textItemVariants}>
            Cinematic, fine art storytelling for weddings and elopements.
          </motion.h2> */}
        </motion.div>
      </motion.div>
    </section>
  );
}