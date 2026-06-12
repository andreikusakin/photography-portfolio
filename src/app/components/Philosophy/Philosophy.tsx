"use client";

import React, { useRef } from "react";
import styles from "./Philosophy.module.css";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const statement =
  "Each image is created with a deep reverence for storytelling and truth — honoring the quiet strength of human connection and the relationships that shape a celebration.";

const words = statement.split(" ");

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <span className={styles.wordMask}>
      <motion.span className={styles.word} style={{ opacity }}>
        {children}
      </motion.span>{" "}
    </span>
  );
}

/** The photographer's statement, revealed word by word as the reader scrolls
 *  through the section — the text "develops" like a print in the tray. */
export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <section className={styles.wrapper} ref={containerRef}>
      <p className={styles.eyebrow}>Philosophy</p>
      <p className={styles.quote}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = (i + 1) / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
      <span className={styles.rule} aria-hidden="true"></span>
    </section>
  );
}
