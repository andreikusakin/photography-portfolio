"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./AboutMe.module.css";
import Image1 from "./../../../../public/about/ak1.jpg";

import Link from "next/link";

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [-3, 2]);
  const y1 = useTransform(parallax, (value) => `${value}em`);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.grid}>
        <div className={styles.col1}>
          <div className={styles.imageContainer}>
            <motion.div className={styles.imageWrapper} style={{ y: y1 }}>
              <Image
                src={Image1}
                alt="Andrew Kusakin, Wedding Photographer Based In Boston, Massachusetts"
                height={900}
                width={600}
                quality={90}
                title="Andrew Kusakin Photography"
              />
            </motion.div>
          </div>
        </div>
        <div className={styles.col2}>
          <span>MEET YOUR PHOTOGRAPHER</span>
          <div>
            <h3>Storyteller & Friend</h3>
            <h3>Behind the Lens</h3>
          </div>

          <p className={styles.text}>
            I'm Andrew Kusakin, a wedding photographer located in Boston and
            serving all of New England (and always up for an adventure beyond!).
            My approach is rooted in documentary and candid photography. I
            prioritize getting to know you, fostering a connection that helps
            you feel at ease in front of the camera. This allows me to focus on
            documenting the genuine interactions and emotions, telling your
            unique love story authentically.
          </p>
          <Link href="/about" className={styles.buttonWrapper}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
