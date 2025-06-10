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
        <h2>Ready to Tell Your Story?</h2>
        <p>
          If a relaxed, authentic, and completely documented wedding day sounds
          like what you're dreaming of, I would be honored to be a part of it.
          Let's start the conversation.
        </p>
        <Link href="/contact">
          <button>Let's Connect</button>
        </Link>
      </div>
    </div>
  );
}
