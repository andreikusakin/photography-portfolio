"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Intro.module.css";
import Link from "next/link";

import { motion, useScroll, useTransform, useMotionValue } from "motion/react";

const portraitImages = [
  {
    src: "/weddings/erin-kyle/000141.jpg",
    alt: "Intimate wedding photography in Boston",
  },
  {
    src: "/weddings/veronica-joseph/000013.jpg",
    alt: "Fine art wedding portrait",
  },
  {
    src: "/weddings/alex-adam/000048.jpg",
    alt: "Candid wedding moments",
  },
  {
    src: "/weddings/erica-mike/000078.jpg",
    alt: "Cinematic documentary wedding photography",
  },
];

// ─────────────────────────────────────────────────────────────
// HEADING CONTENT — edit words here, add/remove lines freely.
// Each entry in the outer array = one line.
// Each word object: { text: string, italic?: true }
// ─────────────────────────────────────────────────────────────
const HEADING: { text: string; italic?: true }[][] = [
  [{ text: "CINEMATIC" }],
  [{ text: "STORYTELLING" },],
  [{ text: "with", italic: true }, { text: "TIMELESS" }],
  [{ text: "GRACE" }],
];

// Heading vertical center from intro top (padding-top 12em + eyebrow ~3.5em + half heading ~9.5em)
const HEADING_CENTER_EM = 25;
// Image natural center from intro top: CSS top (-5em) + half height (25.5em) = 20.5em
const IMAGE_NATURAL_CENTER_EM = 20.5;
// Drift needed when heading is at viewport center
const DRIFT_AT_ANCHOR_EM = HEADING_CENTER_EM - IMAGE_NATURAL_CENTER_EM; // 14em
// Image moves at 1/4 page speed — keeps initial overlap lower and parallax subtle
const PARALLAX_SPEED = 0.25;

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introTopMV = useMotionValue(0);

  // Two-layer crossfade — see Hero.tsx HeroColumn for the full rationale.
  const [displayIndex, setDisplayIndex] = useState(0);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);

  useEffect(() => {
    if (portraitImages.length <= 1) return;
    let intervalId: ReturnType<typeof setInterval>;
    let nextIndex = 0;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        nextIndex = (nextIndex + 1) % portraitImages.length;
        setPendingIndex(nextIndex);
      }, 4000);
    }, 1500);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (pendingIndex === null) return;
    const t = setTimeout(() => {
      setDisplayIndex(pendingIndex);
      setPendingIndex(null);
    }, 1500);
    return () => clearTimeout(t);
  }, [pendingIndex]);

  // useMotionValue means the portrait transform re-evaluates immediately on mount
  // (when introTopMV.set() fires), not only on the next scroll event.
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        introTopMV.set(containerRef.current.offsetTop);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [introTopMV]);

  // Track absolute window scroll (not section progress) so the formula works correctly
  // regardless of viewport height.
  const { scrollY } = useScroll();

  // Scroll-driven heading: each line slides from right to left as section scrolls into view.
  // offset "start end → start start": p=0 when section bottom hits viewport, p=1 when section top hits viewport top.
  const { scrollYProgress: headingProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });
  // Scroll-driven heading: one transform per word, staggered.
  // Pre-allocated for up to 10 words — hooks must always be called in the same order.
  const stagger = 0.05;
  const wordTransforms = [
    useTransform(headingProgress, [0.05 + stagger * 0, 0.4 + stagger * 0], ["3em", "0em"]),
    useTransform(headingProgress, [0.05 + stagger * 1, 0.4 + stagger * 1], ["3em", "0em"]),
    useTransform(headingProgress, [0.05 + stagger * 2, 0.4 + stagger * 2], ["3em", "0em"]),
    useTransform(headingProgress, [0.05 + stagger * 3, 0.4 + stagger * 3], ["3em", "0em"]),
    useTransform(headingProgress, [0.05 + stagger * 4, 0.4 + stagger * 4], ["3em", "0em"]),
    useTransform(headingProgress, [0.05 + stagger * 5, 0.4 + stagger * 5], ["3em", "0em"]),
    useTransform(headingProgress, [0.05 + stagger * 6, 0.4 + stagger * 6], ["3em", "0em"]),
    useTransform(headingProgress, [0.05 + stagger * 7, 0.4 + stagger * 7], ["3em", "0em"]),
    useTransform(headingProgress, [0.05 + stagger * 8, 0.4 + stagger * 8], ["3em", "0em"]),
    useTransform(headingProgress, [0.05 + stagger * 9, 0.4 + stagger * 9], ["3em", "0em"]),
  ];

  // Reactive form: re-runs whenever scrollY OR introTopMV changes (including on mount).
  const portraitY = useTransform(() => {
    const v = scrollY.get();
    const introTop = introTopMV.get();
    const pxPerEm = 16;
    const vh = window.innerHeight;
    const scrollAnchor = introTop + HEADING_CENTER_EM * pxPerEm - vh / 2;
    const drift = DRIFT_AT_ANCHOR_EM * pxPerEm + (v - scrollAnchor) * PARALLAX_SPEED;
    return `${drift / pxPerEm}em`;
  });

  return (
    <section className={styles.wrapper} ref={containerRef}>
      <div className={styles.grid}>
        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0, y: "2em" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <div className={styles.textTop}>
            <p className={styles.eyebrow}>THE APPROACH</p>
            <h2 className={styles.heading}>
              {HEADING.map((line, lineIndex) => {
                const lineStart = HEADING.slice(0, lineIndex).reduce((sum, l) => sum + l.length, 0);
                return (
                  <span key={lineIndex} className={styles.headingLine}>
                    {line.map((word, wi) => (
                      <React.Fragment key={wi}>
                        {wi > 0 && " "}
                        <motion.span
                          className={`${styles.headingWord}${word.italic ? ` ${styles.italic}` : ""}`}
                          style={{ x: wordTransforms[lineStart + wi] }}
                        >
                          {word.text}
                        </motion.span>
                      </React.Fragment>
                    ))}
                  </span>
                );
              })}
            </h2>
          </div>

          <p className={styles.bodyText}>
            A thoughtful blend of documentary honesty and fine art aesthetics.
            Focused on the unscripted gravity of human connection, this approach
            preserves the true color, authentic mood, and intricate details of a
            celebration to create a timeless visual legacy.
          </p>

          <div>
            <Link href="/portfolio">
              <button className={styles.button}>DISCOVER THE APPROACH</button>
            </Link>
          </div>
        </motion.div>

        <motion.div className={styles.portraitCol} style={{ y: portraitY }}>
          {/* Display layer — always visible behind */}
          <div className={styles.portraitWrapper} style={{ zIndex: 1 }}>
            <Image
              src={portraitImages[displayIndex].src}
              alt={portraitImages[displayIndex].alt}
              width={600}
              height={900}
              className={styles.portraitImage}
              priority
            />
          </div>

          {/* Pending layer — fades in fresh each cycle (key forces remount) */}
          {pendingIndex !== null && (
            <motion.div
              key={pendingIndex}
              className={styles.portraitWrapper}
              style={{ zIndex: 2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <Image
                src={portraitImages[pendingIndex].src}
                alt={portraitImages[pendingIndex].alt}
                width={600}
                height={900}
                className={styles.portraitImage}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
