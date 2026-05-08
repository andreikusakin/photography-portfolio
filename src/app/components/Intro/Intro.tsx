"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Intro.module.css";
import Link from "next/link";

import { motion, useScroll, useTransform } from "motion/react";

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

// Heading vertical center from intro top (padding-top 12em + eyebrow ~3.5em + half heading ~9.5em)
const HEADING_CENTER_EM = 25;
// Image natural center from intro top: CSS top (-10em) + half height (21em) = 11em
const IMAGE_NATURAL_CENTER_EM = 11;
// Drift needed when heading is at viewport center
const DRIFT_AT_ANCHOR_EM = HEADING_CENTER_EM - IMAGE_NATURAL_CENTER_EM; // 14em
// Image moves at half page speed (parallax factor)
const PARALLAX_SPEED = 0.5;

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introOffsetTopRef = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portraitImages.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  // Measure intro's document offset — used in the parallax formula.
  // Using a ref (not state) so the transform function always reads the latest value.
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        introOffsetTopRef.current = containerRef.current.offsetTop;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Track absolute window scroll (not section progress) so the formula works correctly
  // regardless of viewport height.
  const { scrollY } = useScroll();

  const portraitY = useTransform(scrollY, (v) => {
    const pxPerEm = 16;
    const vh = window.innerHeight;
    const introTop = introOffsetTopRef.current;

    // scrollAnchor = scrollY at which heading center == viewport center
    const scrollAnchor = introTop + HEADING_CENTER_EM * pxPerEm - vh / 2;

    // Linear parallax anchored at scrollAnchor:
    // drift(scrollAnchor) = DRIFT_AT_ANCHOR_EM  → image center == heading center
    const drift =
      DRIFT_AT_ANCHOR_EM * pxPerEm + (v - scrollAnchor) * PARALLAX_SPEED;

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
              CINEMATIC <br />
              STORYTELLING <br />
              <span className={styles.italic}>with</span> TIMELESS <br />
              GRACE
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
          {portraitImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.portraitWrapper} ${
                index === currentIndex ? styles.portraitActive : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={900}
                className={styles.portraitImage}
                priority={index === 0}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
