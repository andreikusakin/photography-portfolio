"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "motion/react";
import styles from "./DayTimeline.module.css";
import Reveal from "../components/Reveal/Reveal";

const customEase = [0.16, 1, 0.3, 1] as const;

/** The page's signature device: the full wedding day as a scroll-driven
 *  timeline. A center rail draws itself in as the reader moves through the
 *  chapters — full-day coverage as something you feel, not a claim. */
const chapters = [
  {
    time: "09:00",
    title: "The quiet hours",
    text: "Steam on a mirror, a toast poured early, the people closest to you drifting in and out. I arrive with the morning and photograph it exactly as it is.",
    image: "/weddings/erin-kyle/000005.jpg",
    alt: "Groomsmen sharing a toast while getting ready in the morning",
  },
  {
    time: "15:00",
    title: "The gathering",
    text: "The cast of your day assembles — family in their best, old friends finding their seats, small reunions everywhere you look.",
    image: "/weddings/erica-mike/000012.jpg",
    alt: "Guests arriving and finding their seats before an outdoor ceremony",
  },
  {
    time: "16:00",
    title: "The ceremony",
    text: "I work quietly and at a distance — close enough to hold the look on your faces, far enough that the moment stays entirely yours.",
    image: "/weddings/christi-adam/000030.jpg",
    alt: "A bride smiling at her groom during their wedding ceremony",
  },
  {
    time: "19:00",
    title: "The toasts",
    text: "Golden light through the tent, a microphone passed between the people who know you best — laughter first, tears close behind.",
    image: "/weddings/orbrey-brett/000025.jpg",
    alt: "A best man giving a toast in golden evening light",
  },
  {
    time: "22:00",
    title: "The dance floor",
    text: "No interruptions and nothing staged — just the people you love, loud and lit and entirely themselves, until the last song plays.",
    image: "/weddings/kayla-jackson/AndrewKusakinPhotography-240.jpg",
    alt: "A bride and groom laughing with guests on the dance floor",
  },
];

export default function DayTimeline() {
  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 0.75", "end 0.75"],
  });

  return (
    <section className={styles.wrapper}>
      <Reveal className={styles.header}>
        <p className={styles.eyebrow}>One Day, Start to Finish</p>
        <h2 className={styles.heading}>From first light to last song</h2>
        <p className={styles.intro}>
          I cover weddings for the full day, never by the hour — no clock to
          watch, no timeline bent around the photography. This is roughly how
          a day unfolds.
        </p>
      </Reveal>

      <div className={styles.chapters} ref={railRef}>
        {/* Center rail draws itself in as the reader scrolls the day */}
        <div className={styles.rail} aria-hidden="true">
          <motion.div
            className={styles.railProgress}
            style={{ scaleY: scrollYProgress }}
          />
        </div>

        {chapters.map((chapter, i) => (
          <div
            key={chapter.title}
            className={`${styles.chapter} ${
              i % 2 === 1 ? styles.chapterFlip : ""
            }`}
          >
            <span className={styles.dot} aria-hidden="true"></span>

            <Reveal className={styles.chapterBody}>
              <span className={styles.time}>{chapter.time}</span>
              <h3 className={styles.chapterTitle}>{chapter.title}</h3>
              <p className={styles.chapterText}>{chapter.text}</p>
            </Reveal>

            <motion.div
              className={styles.chapterImage}
              initial={{ clipPath: "inset(8% 4% 8% 4%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.4, ease: customEase }}
              viewport={{ once: true, margin: "-15%" }}
            >
              <Image
                src={chapter.image}
                alt={chapter.alt}
                fill
                sizes="(max-width: 991px) 100vw, 40vw"
                className={styles.image}
              />
            </motion.div>
          </div>
        ))}
      </div>

      <Reveal className={styles.ctaRow}>
        <Link href="/pricing" className={styles.cta}>
          View pricing
          <span className={styles.ctaLine} aria-hidden="true"></span>
        </Link>
      </Reveal>
    </section>
  );
}
