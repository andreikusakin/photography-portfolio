'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { GoArrowDown } from "react-icons/go";
import { motion, useScroll } from "motion/react"

const images = [
  {
    src: "/couples/alinabrandon/20.jpg",
    alt: "Alina and Brandon",
    name: "Alina + Brandon",
  },
  {
    src: "/couples/alinabrandon/30.jpg",
    alt: "Alina and Brandon",
    name: "Alina + Brandon 2",
  },

];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  const { scrollYProgress } = useScroll();
  

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const currentIndex = images.indexOf(currentImage);
  //     const nextIndex = (currentIndex + 1) % images.length;
  //     setCurrentImage(images[nextIndex]);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [currentImage]);

  return (
    <section className={styles.heroContainer}>
      <motion.div  className={styles.heroImage}>
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

      <motion.div className={styles.hero_text}>
        <div>For</div>
        <div>people</div>
        <div>in</div>
        <div>love</div>
      </motion.div>

      <div className={styles.coupleName}>{currentImage.name}</div>
      {/* <div className={styles.scroll}><div><GoArrowDown /></div></div> */}
    </section>
  );
}
