"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import styles from "./Testimonials.module.css";
import Reveal from "../Reveal/Reveal";

const customEase = [0.16, 1, 0.3, 1] as const;

/* PLACEHOLDER COPY — swap every quote below for the couple's real words
   before publishing. Images are placeholders from /public/weddings. */
const testimonials = [
  {
    quote:
      "We barely noticed Andrew during the day — and somehow every moment we remember is in the gallery, looking better than we remember it.",
    names: "Maddy + Alex",
    detail: "Smith Farm Gardens, Connecticut",
    image: "/weddings/maddy-alex/000125.jpg",
    alt: "Maddy and Alex exchanging vows at Smith Farm Gardens in Connecticut",
  },
  {
    quote:
      "Andrew kept everything calm, even when the day wasn’t. Our families still talk about how easy he made everyone feel.",
    names: "Erica + Mike",
    detail: "White Cliffs Country Club, Massachusetts",
    image: "/weddings/erica-mike/000040.jpg",
    alt: "Erica smiling at Mike during their White Cliffs Country Club ceremony",
  },
  {
    quote:
      "The gallery felt like our wedding and no one else’s — every person we love, exactly as they are.",
    names: "Veronica + Joseph",
    detail: "Bar Harbor, Maine",
    image: "/weddings/veronica-joseph/000030.jpg",
    alt: "Veronica and Joseph exchanging rings at their Bar Harbor wedding",
  },
];

export default function Testimonials() {
  const count = testimonials.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((prev) => (prev + dir + count) % count),
    [count]
  );

  // Gentle auto-advance; restarts on any index change, pauses on hover and
  // for reduced-motion users (auto-rotating content is a WCAG 2.2.2 concern).
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((prev) => (prev + 1) % count), 8000);
    return () => clearInterval(id);
  }, [index, paused, count]);

  const active = testimonials[index];

  return (
    <section
      className={styles.wrapper}
      aria-label="Kind words from past clients"
    >
      <div className={styles.grid}>
        <Reveal className={styles.content}>
          <p className={styles.eyebrow}>Kind Words</p>

          <div
            className={styles.quoteStage}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                className={styles.figure}
                initial={{ opacity: 0, y: "0.6em" }}
                animate={{ opacity: 1, y: "0em" }}
                exit={{ opacity: 0, y: "-0.4em" }}
                transition={{ duration: 0.8, ease: customEase }}
              >
                <blockquote className={styles.quote}>
                  {active.quote}
                </blockquote>
                <figcaption className={styles.caption}>
                  <span className={styles.names}>{active.names}</span>
                  <span className={styles.detail}>{active.detail}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => go(-1)}
              aria-label="Previous quote"
            >
              Prev
            </button>
            <span className={styles.counter} aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.counterDivider}>/</span>
              <span className={styles.counterTotal}>
                {String(count).padStart(2, "0")}
              </span>
            </span>
            <button
              type="button"
              className={styles.navButton}
              onClick={() => go(1)}
              aria-label="Next quote"
            >
              Next
            </button>
          </div>
        </Reveal>

        {/* Companion image — clip-reveal on entry (site idiom), crossfade on change */}
        <motion.div
          className={styles.imageFrame}
          initial={{ clipPath: "inset(8% 4% 8% 4%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.4, ease: customEase }}
          viewport={{ once: true, margin: "-15%" }}
        >
          <AnimatePresence>
            <motion.div
              key={index}
              className={styles.imageInner}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <Image
                src={active.image}
                alt={active.alt}
                fill
                sizes="(max-width: 991px) 100vw, 30vw"
                className={styles.image}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
