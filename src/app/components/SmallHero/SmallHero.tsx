"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./SmallHero.module.css";
import type { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from "motion/react";


export default function SmallHero({ 
  image, 
  title, 
  subtitle 
}: { 
  image: StaticImageData;
  title: string;
  subtitle: string;
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
            alt="Andrew Kusakin, Wedding Photographer Based In Boston, Massachusetts. Browse Portfolio"
            width={1500}
            height={1000}
            style={{ objectFit: "cover"}}
            quality={90}
           
            priority
          />
          
        </motion.div>
        
      </motion.div>
      <div className={styles.overlay}></div>
      <motion.div
        className={styles.heroTextWrapper}
        style={{ y: textY }}
        initial={{ opacity: 0, filter: "blur(0.5em)", y: "0.5rem" }}
        whileInView={{ opacity: 1, filter: "blur(0em)", y: "0em" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className={styles.heroText}>
          <h1>{title}</h1>
          <div>{subtitle}</div>
        </div>
      </motion.div>

    </section>
  );
}
