"use client";

import React, { useRef } from "react";
import styles from "./GetInTouch.module.css";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function GetInTouch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const y1 = useTransform(parallax, (value) => `${value}em`);

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} ref={containerRef}>
        <motion.div className={styles.imageContainer}
          style={{
            y: y1,
          }}
        >
          <Image
            src="/weddings/christi-adam/000049.jpg"
            alt="contact"
            width={1500}
            height={1000}
          />
        </motion.div>
      </div>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Let&apos;s Connect</p>
        <h2>
          Ready to tell <em>your</em> story?
        </h2>
        <p>
          If what you&apos;ve seen here resonates, let&apos;s talk about the day
          you&apos;re planning: the place, the people, and what you&apos;re
          hoping to remember.
        </p>
        <Link href="/contact">
          <button>Inquire</button>
        </Link>
      </div>
    </div>
  );
}
