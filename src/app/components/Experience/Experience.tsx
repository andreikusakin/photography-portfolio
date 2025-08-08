"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Experience.module.css";
import Image1 from "./../../../../public/weddings/erin-kyle/000050.jpg";

import Link from "next/link";

export default function Experience() {
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
          <div>
            <span>THE</span>
            <h3>Experience</h3>
          </div>

          <p className={styles.text}>
            My goal is for you to be fully present and enjoy every moment of
            your wedding celebration. I work unobtrusively, blending into the
            background to capture the day's true emotions and events as they
            unfold naturally. This documentary approach means less time posing
            and more time creating memories, resulting in a gallery of authentic
            photos that feel like you.
          </p>
          <Link href="/experience" className={styles.buttonWrapper}>
            <button>Read More</button>
          </Link>
        </div>
        <div className={styles.col2}>
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
      </div>
    </div>
  );
}
