"use client";

import React, { useRef } from "react";
import styles from "./GetInTouch.module.css";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const customEase = [0.16, 1, 0.3, 1] as const;

// Staggered entrance, mirroring the hero: the finale bookends the opening
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

// Heading lines rise out of overflow-hidden masks (hero idiom)
const lineVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1.4, ease: customEase },
  },
};

const fadeVariants = {
  hidden: { opacity: 0, y: "1em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 1.2, ease: customEase },
  },
};

export default function GetInTouch() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const y1 = useTransform(parallax, (value) => `${value}em`);

  return (
    <section className={styles.wrapper} ref={containerRef}>
      <div className={styles.background}>
        <motion.div className={styles.imageContainer} style={{ y: y1 }}>
          <Image
            src="/weddings/christi-adam/000049.jpg"
            alt="A wedding couple photographed by Andrew Kusakin, Boston wedding photographer"
            width={1500}
            height={1000}
          />
        </motion.div>
      </div>

      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20%" }}
      >
        <motion.p className={styles.eyebrow} variants={fadeVariants}>
          Let&apos;s Connect
        </motion.p>

        <h2 className={styles.heading}>
          <span className={styles.lineMask}>
            <motion.span className={styles.line} variants={lineVariants}>
              Ready to tell
            </motion.span>
          </span>
          <span className={styles.lineMask}>
            <motion.span className={styles.line} variants={lineVariants}>
              <em>your</em> story?
            </motion.span>
          </span>
        </h2>

        <motion.p className={styles.lede} variants={fadeVariants}>
          If what you&apos;ve seen here resonates, let&apos;s talk about the
          day you&apos;re planning.
        </motion.p>

        <motion.div variants={fadeVariants}>
          <Link href="/contact">
            <button>Inquire</button>
          </Link>
        </motion.div>

        <motion.p className={styles.subline} variants={fadeVariants}>
          Boston · New England · Beyond
        </motion.p>
      </motion.div>
    </section>
  );
}
