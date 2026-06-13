"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";

const images = [
  {
    src: "/hero/1.jpg",
    alt: "Michaela and David wedding photography at The Bradley Estate in Canton, MA",
    name: "Michaela + David",
    location: "Massachusetts",
  },
  {
    src: "/hero/2.jpg",
    alt: "Michaela and David wedding photography at The Bradley Estate in Canton, MA",
    name: "Michaela + David",
    location: "Massachusetts",
  },
  {
    src: "/hero/3.jpg",
    alt: "Hannah and Kisuk wedding photography at Fruitlands Museum in Harvard, MA",
    name: "Hannah + Kisuk",
    location: "Massachusetts",
  },
  {
    src: "/hero/4.jpg",
    alt: "Hannah and Kisuk wedding photography at Fruitlands Museum in Harvard, MA",
    name: "Hannah + Kisuk",
    location: "Massachusetts",
  },
  {
    src: "/hero/5.jpg",
    alt: "Gwen and Alec engagement photography at New England Botanic Garden at Tower Hill in Boylston, MA",
    name: "Gwen + Alec",
    location: "Massachusetts",
  },
  {
    src: "/hero/6.jpg",
    alt: "Gwen and Alec engagement photography at New England Botanic Garden at Tower Hill in Boylston, MA",
    name: "Gwen + Alec",
    location: "Massachusetts",
  },
    {
    src: "/hero/bar-harbor-wedding-00021.jpg",
    alt: "Veronica & Joseph wedding photography at Harborside Hotel in Bar Harbor, MA",
    name: "Veronica + Joseph",
    location: "Maine",
  },
     {
    src: "/hero/bar-harbor-wedding-00053.jpg",
    alt: "Veronica & Joseph wedding photography at Harborside Hotel in Bar Harbor, MA",
    name: "Veronica + Joseph",
    location: "Maine",
  },
  // {
  //   src: "/hero/3.jpg",
  //   alt: "Maddy and Alex wedding photography at Smith Farm Gardens in East Haddam, Connecticut",
  //   name: "Maddy + Alex",
  //   location: "Connecticut",
  // },
];

// Custom cinematic easing curve
const customEase = [0.16, 1, 0.3, 1] as const;

// Parent container animation variants (controls the stagger)
const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.6, // Waits briefly for the background blur to clear
    },
  },
};

// Each heading line rises out of an overflow-hidden mask
const lineVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1.6, ease: customEase },
  },
};

const fadeVariants = {
  hidden: { opacity: 0, y: "1em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 1.6, ease: customEase },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track the mobile breakpoint so the slideshow can step through every image
  // one at a time, instead of two-at-a-time like the desktop pairs.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    // Desktop advances by a pair (step 2); mobile advances one image at a time.
    const step = isMobile ? 1 : 2;
    setCurrentIndex(0); // reset so the index stays valid for the new step size
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + step >= images.length ? 0 : prevIndex + step
      );
    }, 5200); // Slowed down for a relaxed, luxurious pace

    return () => clearInterval(intervalId);
  }, [isMobile]);

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

  // The scroll cue and captions dissolve as soon as the page starts moving
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const step = isMobile ? 1 : 2;
  const slideNumber = Math.floor(currentIndex / step) + 1;
  const slideCount = Math.ceil(images.length / step);
  const activeImage = images[currentIndex];

  return (
    <section className={styles.container} ref={containerRef}>
      <motion.div
        className={styles.heroImagesWrapper}
        initial={{ opacity: 0, filter: "blur(0.5em)" }}
        whileInView={{ opacity: 1, filter: "blur(0em)" }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        {isMobile
          ? // Mobile: one full-width image per slide, cycling through them all
            images.map((image, index) => (
              <motion.div
                key={index}
                className={`${styles.heroImagePair} ${
                  index === currentIndex ? styles.active : ""
                }`}
                style={{ y: imageY }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    title={image.name}
                    width={1500}
                    height={1000}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    quality={90}
                    priority={index === 0}
                  />
                </div>

                {/* Overlay to ensure white text is always readable over bright images */}
                <div className={styles.imageOverlay}></div>
              </motion.div>
            ))
          : // Desktop: two images side by side per slide
            images.map((image, index) => {
              if (index % 2 !== 0) return null;

              const isPairActive = index === currentIndex;
              const nextImage = images[index + 1];

              return (
                <motion.div
                  key={index}
                  className={`${styles.heroImagePair} ${
                    isPairActive ? styles.active : ""
                  }`}
                  style={{ y: imageY }}
                >
                  {/* Left Image (Desktop Only) */}
                  <div className={`${styles.imageWrapper} ${styles.desktopOnly}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      title={image.name}
                      width={1500}
                      height={1000}
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      quality={90}
                      priority={index === 0}
                    />
                  </div>

                  {/* Right Image (Visible on all devices) */}
                  {nextImage && (
                    <div className={`${styles.imageWrapper} ${styles.mobileVisible}`}>
                      <Image
                        src={nextImage.src}
                        alt={nextImage.alt}
                        title={nextImage.name}
                        width={1500}
                        height={1000}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        quality={90}
                        priority={index === 0}
                      />
                    </div>
                  )}

                  {/* Overlay to ensure white text is always readable over bright images */}
                  <div className={styles.imageOverlay}></div>
                </motion.div>
              );
            })}
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
          <motion.p className={styles.eyebrow} variants={fadeVariants}>
            Fine Art Documentary Wedding Photography
          </motion.p>

          <h1 className={styles.mainHeading}>
            <span className={styles.lineMask}>
              <motion.span className={styles.line} variants={lineVariants}>
                Capturing your day
              </motion.span>
            </span>
            <span className={styles.lineMask}>
              <motion.span
                className={`${styles.line} ${styles.lineItalic}`}
                variants={lineVariants}
              >
                as it truly happens
              </motion.span>
            </span>
          </h1>

          <motion.p className={styles.subline} variants={fadeVariants}>
            Boston · New England · Beyond
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Bottom rail — couple caption, scroll cue, slide counter */}
      <motion.div
        className={styles.bottomRail}
        style={{ opacity: cueOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 2 }}
      >
        <div className={styles.caption}>
          <AnimatePresence mode="wait">
            <motion.span
              key={activeImage.name + currentIndex}
              initial={{ opacity: 0, y: "0.6em" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-0.6em" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={styles.captionText}
            >
              {activeImage.name} — {activeImage.location}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span className={styles.scrollLabel}>Scroll</span>
          <span className={styles.scrollLine}></span>
        </div>

        <div className={styles.counter}>
          <span>{String(slideNumber).padStart(2, "0")}</span>
          <span className={styles.counterDivider}>/</span>
          <span className={styles.counterTotal}>
            {String(slideCount).padStart(2, "0")}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
