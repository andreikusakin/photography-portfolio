"use client";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Intro.module.css";
import Link from "next/link";
import Reveal from "../Reveal/Reveal";
import Image1 from "./boston-wedding-photographer-andrew-kusakin-photography-3.jpg";
import Image2 from "./boston-wedding-photographer-andrew-kusakin-photography-1.jpg";
import Image3 from "./boston-wedding-photographer-andrew-kusakin-photography-2.jpg";

import { motion, useScroll, useTransform } from "motion/react";

const customEase = [0.16, 1, 0.3, 1] as const;

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // The dominant portrait drifts slowly; the side images counter it faster
  const ySlow = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section className={styles.wrapper} ref={containerRef}>
      <div className={styles.grid}>
        {/* Dominant portrait — anchors the composition on the left */}
        <motion.div
          className={styles.mainFrame}
          initial={{ clipPath: "inset(8% 4% 8% 4%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.4, ease: customEase }}
          viewport={{ once: true, margin: "-15%" }}
        >
          <motion.div className={styles.frameInner} style={{ y: ySlow }}>
            <Image
              src={Image2}
              alt="Fine art wedding portrait at a first look"
              className={styles.image}
              placeholder="blur"
              sizes="(max-width: 991px) 100vw, 40vw"
            />
          </motion.div>
        </motion.div>

        {/* Editorial text block — left-aligned against the centered page */}
        <Reveal className={styles.text} delay={0.15}>
          <p className={styles.eyebrow}>The Approach</p>
          <h2 className={styles.heading}>
            Cinematic and deeply human
          </h2>
          <p className={styles.lede}>
Bringing a unique, cinematic vision to fine art documentary wedding photography. Every fleeting moment is captured with care, down to the smallest detail.
          </p>
          <p className={styles.bodyText}>
            The work is documentary at its core: the day photographed as it
            happens, from the first quiet hours to the last song, so the
            gallery reads the way the day felt — a complete story, not a set
            of portraits.
          </p>
          <Link href="/portfolio" className={styles.cta}>
            Browse the portfolio
            <span className={styles.ctaLine} aria-hidden="true"></span>
          </Link>
        </Reveal>

        {/* Counterweights — two smaller frames at different scales */}
        <div className={styles.sideCol}>
          {[
            {
              src: Image3,
              alt: "Candid wedding moment between a couple",
              className: styles.sidePortrait,
              y: yFast,
            },
            {
              src: Image1,
              alt: "Intimate private vows at a Boston wedding",
              className: styles.sideLandscape,
              y: ySlow,
            },
          ].map((img, i) => (
            <motion.div
              key={i}
              className={`${styles.sideFrame} ${img.className}`}
              initial={{ clipPath: "inset(8% 4% 8% 4%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{
                duration: 1.4,
                ease: customEase,
                delay: 0.15 * (i + 1),
              }}
              viewport={{ once: true, margin: "-15%" }}
            >
              <motion.div className={styles.frameInner} style={{ y: img.y }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  className={styles.image}
                  placeholder="blur"
                  sizes="(max-width: 991px) 50vw, 20vw"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
