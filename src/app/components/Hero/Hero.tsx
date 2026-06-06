"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  {
    src: "/hero/1.jpg",
    alt: "Alexandra and Adam wedding photography at Glen Island Harbour Club in New Rochelle, New York",
    name: "Alexandra + Adam",
  },
  {
    src: "/hero/2.jpg",
    alt: "Maddy and Alex wedding photography at Smith Farm Gardens in East Haddam, Connecticut",
    name: "Maddy + Alex",
  },
  {
    src: "/hero/3.jpg",
    alt: "Maddy and Alex wedding photography at Smith Farm Gardens in East Haddam, Connecticut",
    name: "Maddy + Alex",
  },
  {
    src: "/hero/4.jpg",
    alt: "Alexandra and Adam wedding photography at Glen Island Harbour Club in New Rochelle, New York",
    name: "Alexandra + Adam",
  },
  {
    src: "/hero/5.jpg",
    alt: "Maddy and Alex wedding photography at Smith Farm Gardens in East Haddam, Connecticut",
    name: "Maddy + Alex",
  },
  {
    src: "/hero/6.jpg",
    alt: "Alexandra and Adam wedding photography at Glen Island Harbour Club in New Rochelle, New York",
    name: "Alexandra + Adam",
  },
];

// Custom cinematic easing curve
const customEase = [0.16, 1, 0.3, 1];

// Parent container animation variants (controls the stagger)
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.7, // Waits briefly for the background blur to clear
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
      duration: 1.8,
      ease: customEase,
    },
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
    }, 4000); // Slowed down for a more relaxed, luxurious pace

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

          <motion.h1 className={styles.mainHeading} variants={textItemVariants}>
            Capturing Your Day <br/> As It Truly Happens
          </motion.h1>
                    <motion.p className={styles.eyebrow} variants={textItemVariants}>
            Documentary Wedding Photography – Boston & Beyond
          </motion.p>
          {/* <motion.h2 className={styles.subHeading} variants={textItemVariants}>
            Cinematic, fine art storytelling for weddings and elopements.
          </motion.h2> */}
        </motion.div>
      </motion.div>
    </section>
  );
}