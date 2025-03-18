"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import styles from "./Hero.module.css";
import AlinaBrandon from "./../../../../public/couples/alinabrandon/20.jpg";
import RoxanaKanstantin from "./../../../../public/couples/roxanakonstantin/18.jpg";
import ChristiAdam from "./../../../../public/wedding/christiadam/19.jpg";
import MarissaMichael from "./../../../../public/wedding/marissamichael/27.jpg";
import ValerieJoseph from "./../../../../public/wedding/valeriejoseph/7.jpg";
import VeronicaJoseph from "./../../../../public/wedding/veronicajoseph/32.jpg";
import OrbreyBrett from "./../../../../public/wedding/orbreybrett/23.jpg";

const images = [
  {
    src: AlinaBrandon,
    alt: "Alina and Brandon photograph in Massachusetts",
    name: "Alina + Brandon",
  },
  {
    src: RoxanaKanstantin,
    alt: "Roxana and Kanstantin photograph in Boston, Massachusetts",
    name: "Roxana + Kanstantin",
  },
  {
    src: ChristiAdam,
    alt: "Christi and Adam photograph in Seaport, Boston, Massachusetts",
    name: "Christi + Adam",
  },
  {
    src: MarissaMichael,
    alt: "Marissa and Michael photograph in Quincy, Massachusetts",
    name: "Marissa + Michael",
  },
  {
    src: ValerieJoseph,
    alt: "Valerie and Joseph photograph in Boston, Massachusetts",
    name: "Valerie + Joseph",
  },
  {
    src: VeronicaJoseph,
    alt: "Veronica and Joseph photograph in Boston, Massachusetts",
    name: "Veronica + Joseph",
  },
  {
    src: OrbreyBrett,
    alt: "Orbrey and Brett photograph in Boston, Massachusetts",
    name: "Orbrey + Brett",
  },
];

// Animation variants unchanged...
const heroTextVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    x: 10,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1200], [0, 200]);
  const textY = useTransform(scrollY, [0, 1200], [0, -100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <section className={styles.heroContainer}>
      {/* Background image */}
      <motion.div
        className={styles.imageOverlay}
        initial={{ opacity: 0, y: -5, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className={styles.heroImage}
            style={{ y: imageY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1920}
              height={1080}
              quality={80}
              style={{ objectFit: "cover" }}
              placeholder="blur"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Text content */}
      <motion.div
        className={styles.hero_text}
        variants={heroTextVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Words content unchanged */}
        <motion.div
          variants={wordContainerVariants}
          className={styles.word1}
          style={{ y: textY }}
        >
          {"For".split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={wordContainerVariants}
          className={styles.word2}
          style={{ y: textY }}
        >
          {"people".split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={wordContainerVariants}
          className={styles.word3}
          style={{ y: textY }}
        >
          {"in".split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={wordContainerVariants}
          className={styles.word4}
          style={{ y: textY }}
        >
          {"love".split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className={styles.coupleName}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentImage.name}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
