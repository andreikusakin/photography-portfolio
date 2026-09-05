"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "./Interlude.module.css";

const customEase = [0.16, 1, 0.3, 1] as const;

/** Full-bleed cinematic breather — one edge-to-edge photograph with a slow
 *  parallax drift and a quiet caption. The page's single widescreen moment
 *  between the hero and the finale. */
export default function Interlude() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section className={styles.wrapper} ref={ref}>
      <motion.div className={styles.imageLayer} style={{ y }}>
        <Image
          src="/weddings/veronica-joseph/hero.jpg"
          alt="A seaside wedding ceremony overlooking the harbor in Bar Harbor, Maine"
          fill
          sizes="100vw"
          className={styles.image}
        />
      </motion.div>

      {/* Soft scrim keeps the caption legible without muddying the sky */}
      <div className={styles.scrim} aria-hidden="true"></div>

      <motion.p
        className={styles.caption}
        initial={{ opacity: 0, y: "1em" }}
        whileInView={{ opacity: 1, y: "0em" }}
        transition={{ duration: 1.2, ease: customEase }}
        viewport={{ once: true }}
      >
        Veronica + Joseph — Bar Harbor, Maine
      </motion.p>
    </section>
  );
}
