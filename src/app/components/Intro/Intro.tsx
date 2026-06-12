"use client";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Intro.module.css";
import Link from "next/link";
import Image1 from "./wedding-photography-private-wovs.jpg"
import Image2 from "./wedding-first-look.jpg"
import Image3 from "./wedding-couple.jpg"
import Image4 from "./bride-father-first-look.jpg"

import { motion, useScroll, useTransform } from "motion/react";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallax1 = useTransform(scrollYProgress, [0, 1], [-5, 2]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [-10, 2]);

  const y1 = useTransform(parallax1, (value) => `${value}em`);
  const y2 = useTransform(parallax2, (value) => `${value}em`);

  return (
    <section className={styles.wrapper} ref={containerRef}>
      <div className={styles.grid}>

        {/* Left Image Column */}
        <div className={styles.col1}>
          <motion.div className={styles.row} style={{ y: y1 }}>
            <motion.div
              initial={{ opacity: 0, y: "3em" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <Image
                src={Image1}
                className={styles.image}
                width={900}
                height={600}
                alt="Intimate wedding photography in Boston"
                placeholder="blur"
              />
            </motion.div>
          </motion.div>
          <motion.div className={styles.row} style={{ y: y2 }}>
            <motion.div
              initial={{ opacity: 0, y: "3em" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={Image2}
                alt="Fine art wedding portrait"
                className={styles.image}
                width={600}
                height={900}
                placeholder="blur"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Center Text Column */}
        <motion.div
          className={styles.col2}
          initial={{ opacity: 0, y: "2em" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className={styles.textTop}>
            <p className={styles.eyebrow}>THE APPROACH</p>
            <h2 className={styles.heading}>
              CINEMATIC <br />
              <span className={styles.italic}>and</span> DEEPLY <br />
              HUMAN
            </h2>
          </div>

          <p className={styles.bodyText}>
            A unique, cinematic approach to fine art documentary wedding photography, crafted with care down to the smallest detail. A wedding day is the people in it — each image is shaped by the connection between two people and the company gathered around them, the affection and the quiet truths that pass through a long day together.
          </p>

          <Link href="/portfolio" className={styles.button}>Browse Portfolio</Link>
        </motion.div>

        {/* Right Image Column — parallax speeds swapped so sides drift against each other */}
        <div className={styles.col3}>
          <motion.div className={styles.row} style={{ y: y2 }}>
            <motion.div
              initial={{ opacity: 0, y: "3em" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src={Image3}
                alt="Candid wedding moments"
                className={styles.image}
                width={600}
                height={900}
                placeholder="blur"
              />
            </motion.div>
          </motion.div>
          <motion.div className={styles.row} style={{ y: y1 }}>
            <motion.div
              initial={{ opacity: 0, y: "3em" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src={Image4}
                alt="Cinematic documentary wedding photography"
                className={styles.image}
                width={900}
                height={600}
                placeholder="blur"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
