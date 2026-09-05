"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import styles from "./Testimonials.module.css";
import Reveal from "../Reveal/Reveal";
import Image1 from "./boston-wedding-photographer-andrew-kusakin-photography-1.jpg";
import Image2 from "./boston-wedding-photographer-andrew-kusakin-photography-2.jpg";
import Image3 from "./boston-wedding-photographer-andrew-kusakin-photography-3.jpg";
import Image4 from "./boston-wedding-photographer-andrew-kusakin-photography-4.jpg";

const customEase = [0.16, 1, 0.3, 1] as const;

/* Real 5-star Google reviews, excerpted to fit the four-line quote stage.
   Ellipses mark skipped text; everything shown is verbatim. Alt text is
   deliberately generic — make it name the couple and venue only for images
   that actually depict that reviewer's wedding. */
const testimonials = [
  {
    quote:
      "His photos capture how the day felt, not just how it looked, and every image feels artistic and beautiful without ever feeling staged or overly posed.",
    names: "Kelsey & Colin",
    detail: "Google Review",
    image: Image1,
    alt: "A couple during their wedding ceremony, photographed by Andrew Kusakin",
  },
  {
    quote:
      "We got a wonderful mix of romantic couples portraits and candid photos with our friends and family… so happy with all the beautiful memories he captured of our wedding day.",
    names: "Mary & Ryan",
    detail: "Google Review",
    image: Image2,
    alt: "A candid wedding moment photographed by Andrew Kusakin",
  },
  {
    quote:
      "Andrew was phenomenal to work with: thoughtful, considered, and consultative in his approach… We would hire him again in a heartbeat!",
    names: "Thea & Fernando",
    detail: "Google Review",
    image: Image3,
    alt: "A wedding couple photographed by Andrew Kusakin in New England",
  },
  {
    quote:
      "He took the time to get to know me and my husband, and planned his shots accordingly… He was such a pleasure to work with and I can’t recommend him enough.",
    names: "Leah Doolittle",
    detail: "Google Review",
    image: Image4,
    alt: "A wedding day moment photographed by Andrew Kusakin",
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
