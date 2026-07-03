"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Philosophy.module.css";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const statement =
  "Some frames I compose with care. Most I simply watch for — and catch in the half-second before the day moves on.";

const words = statement.split(" ");

const customEase = [0.16, 1, 0.3, 1] as const;

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

/** The photographer's statement flanked by large "caught" frames — a pair of
 *  portraits above, a wide landscape below — each drifting at its own speed
 *  while the words develop. Editorial spread, not marginalia. */
export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  // Word reveal tracks the quote itself, so the timing stays true no matter
  // how tall the surrounding spread is
  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ["start 0.9", "start 0.35"],
  });

  // Full-travel progress of the whole spread drives the frames' drift
  const { scrollYProgress: drift } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yA = useTransform(drift, [0, 1], ["3em", "-3em"]);
  const yB = useTransform(drift, [0, 1], ["-2em", "2em"]);
  const yC = useTransform(drift, [0, 1], ["2.5em", "-2.5em"]);

  const clipReveal = {
    initial: { clipPath: "inset(8% 4% 8% 4%)" },
    whileInView: { clipPath: "inset(0% 0% 0% 0%)" },
    viewport: { once: true, margin: "-15%" },
  };

  return (
    <section className={styles.wrapper} ref={containerRef}>
      {/* Opening pair — two large portraits at offset heights */}
      <div className={styles.topRow}>
        <motion.div
          className={`${styles.frame} ${styles.frameA}`}
          style={{ y: yA }}
          {...clipReveal}
          transition={{ duration: 1.4, ease: customEase }}
        >
          <Image
            src="/weddings/amy-charlie/000030.jpg"
            alt="A flower girl scattering petals, caught mid-air"
            fill
            sizes="(max-width: 767px) 45vw, 26vw"
            className={styles.image}
          />
        </motion.div>

        <motion.div
          className={`${styles.frame} ${styles.frameB}`}
          style={{ y: yB }}
          {...clipReveal}
          transition={{ duration: 1.4, ease: customEase, delay: 0.15 }}
        >
          <Image
            src="/weddings/maddy-alex/000090.jpg"
            alt="Parents watching a wedding ceremony from the front row"
            fill
            sizes="(max-width: 767px) 40vw, 20vw"
            className={styles.image}
          />
        </motion.div>
      </div>

      {/* The statement — words develop as the reader scrolls through */}
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Philosophy</p>
        <p className={styles.quote} ref={quoteRef}>
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
      </div>

      {/* Closing frame — one wide landscape, off the center axis */}
      <div className={styles.bottomRow}>
        <motion.div
          className={`${styles.frame} ${styles.frameC}`}
          style={{ y: yC }}
          {...clipReveal}
          transition={{ duration: 1.4, ease: customEase, delay: 0.1 }}
        >
          <Image
            src="/weddings/orbrey-brett/000025.jpg"
            alt="A toast caught in golden evening light"
            fill
            sizes="(max-width: 767px) 80vw, 34vw"
            className={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
}
