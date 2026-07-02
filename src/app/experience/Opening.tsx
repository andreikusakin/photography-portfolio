"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./Opening.module.css";

const customEase = [0.16, 1, 0.3, 1] as const;

// Staggered entrance for the text flow (hero / finale idiom)
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

const lineVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 1.4, ease: customEase },
  },
};

const fadeVariants = {
  hidden: { opacity: 0, y: "1em" },
  visible: {
    opacity: 1,
    y: "0em",
    transition: { duration: 1.2, ease: customEase },
  },
};

const clipReveal = {
  initial: { clipPath: "inset(8% 4% 8% 4%)" },
  whileInView: { clipPath: "inset(0% 0% 0% 0%)" },
  viewport: { once: true, margin: "-15%" },
};

/** Cinematic opening spread: dark band, masked heading rise, and three
 *  photographs at different scales drifting at different speeds — one frame
 *  overlapping the gutter so the composition reads as a collage, not a grid. */
export default function Opening() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const yFast = useTransform(scrollYProgress, [0, 1], ["7%", "-7%"]);

  return (
    <section className={styles.wrapper} ref={ref}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <motion.div
            className={styles.textFlow}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15%" }}
          >
            <motion.p className={styles.eyebrow} variants={fadeVariants}>
              A Documentary Approach
            </motion.p>

            <h2 className={styles.heading}>
              <span className={styles.lineMask}>
                <motion.span className={styles.line} variants={lineVariants}>
                  Be present.
                </motion.span>
              </span>
              <span className={styles.lineMask}>
                <motion.span className={styles.line} variants={lineVariants}>
                  I&apos;ll capture <em>everything.</em>
                </motion.span>
              </span>
            </h2>

            <motion.p className={styles.text} variants={fadeVariants}>
              A wedding day is a celebration, not a photoshoot. My documentary
              approach is built around that: by following the day as it
              unfolds, I let you stay inside it, present with the people you
              love rather than aware of a camera. The photographs come from
              the day itself — the laughter and the quiet glances alike —
              holding not only how it looked but how it felt.
            </motion.p>
          </motion.div>

          {/* Counterweight strip under the text, drifting against the anchor */}
          <motion.div
            className={`${styles.frame} ${styles.strip}`}
            {...clipReveal}
            transition={{ duration: 1.4, ease: customEase, delay: 0.15 }}
          >
            <motion.div className={styles.frameInner} style={{ y: yMid }}>
              <Image
                src="/weddings/erin-kyle/000101.jpg"
                alt="Documentary wedding photograph"
                fill
                sizes="(max-width: 991px) 100vw, 35vw"
                className={styles.image}
              />
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.right}>
          {/* Dominant portrait anchoring the spread */}
          <motion.div
            className={`${styles.frame} ${styles.anchor}`}
            {...clipReveal}
            transition={{ duration: 1.4, ease: customEase }}
          >
            <motion.div className={styles.frameInner} style={{ y: ySlow }}>
              <Image
                src="/weddings/valerie-joseph/000035.jpg"
                alt="Candid wedding moment"
                fill
                sizes="(max-width: 991px) 100vw, 40vw"
                className={styles.image}
              />
            </motion.div>
          </motion.div>

          {/* Small frame hanging off the anchor, across the gutter */}
          <motion.div
            className={`${styles.frame} ${styles.float}`}
            {...clipReveal}
            transition={{ duration: 1.4, ease: customEase, delay: 0.3 }}
          >
            <motion.div className={styles.frameInner} style={{ y: yFast }}>
              <Image
                src="/weddings/amy-charlie/000032.jpg"
                alt="Quiet glance between a couple"
                fill
                sizes="(max-width: 991px) 50vw, 18vw"
                className={styles.image}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
