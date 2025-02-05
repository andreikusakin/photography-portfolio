"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./Hero.module.css";

const images = [
  {
    src: "/couples/alinabrandon/20.jpg",
    alt: "Alina and Brandon",
    name: "Alina + Brandon",
  },
  {
    src: "/couples/alinabrandon/30.jpg",
    alt: "Alina and Brandon 2",
    name: "Alina + Brandon 2",
  },
];

// 1. The parent that staggers each word container
const heroTextVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between words
    },
  },
};

// 2. Each word container (stagger letters)
const wordContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1, // speed for each letter
    },
  },
};

// 3. Each letter's animation
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
  const [currentImage] = useState(images[0]);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1200], [0, 200]);
  const textY = useTransform(scrollY, [0, 1200], [0, -100]);

  return (
    <section className={styles.heroContainer}>
      {/* Background image */}
      <motion.div className={styles.imageOverlay}
      initial={{ opacity: 0, y: -5, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}>
        <motion.div
          className={styles.heroImage}
          
          style={{ y: imageY }}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            quality={90}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={currentImage.src}
          />
        </motion.div>
      </motion.div>

      {/* The container for all words, with a top-level stagger for each word */}
      <motion.div
        className={styles.hero_text}
        variants={heroTextVariants}
        initial="hidden"
        animate="visible"
      >
        {/* WORD 1: "For" */}
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

        {/* WORD 2: "people" */}
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

        {/* WORD 3: "in" */}
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

        {/* WORD 4: "love" */}
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

      <motion.div className={styles.coupleName}>{currentImage.name}</motion.div>
    </section>
  );
}
