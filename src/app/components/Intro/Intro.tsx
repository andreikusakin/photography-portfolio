"use client";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Intro.module.css";
import Link from "next/link";

import { motion, useScroll, useTransform } from "motion/react";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallax1 = useTransform(scrollYProgress, [0, 1], [-5, 2]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [-10, 2]);

  const y1 = useTransform(parallax1, (value) => `${value}em`);
  const y2 = useTransform(parallax2, (value) => `${value}em`);

  return (
    <section className={styles.wrapper} ref={containerRef}>
      <div className={styles.grid}>
        
        {/* Left Image Column */}
        <div className={styles.col1}>
          <motion.div className={styles.row} style={{ y: y1 }}>
            <motion.div
              initial={{ opacity: 0, y: "3em" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <Image
                src="/weddings/erin-kyle/000141.jpg"
                className={styles.image}
                width={600}
                height={900}
                alt="Intimate wedding photography in Boston"
                title="Wedding Photo"
              />
            </motion.div>
          </motion.div>
          <motion.div className={styles.row} style={{ y: y2 }}>
            <motion.div
              initial={{ opacity: 0, y: "3em" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="/weddings/veronica-joseph/000013.jpg"
                alt="Fine art wedding portrait"
                title="Wedding Photo"
                className={styles.image}
                width={600}
                height={900}
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Center Text Column (Updated Typography) */}
        <motion.div
          className={styles.col2}
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
            A thoughtful blend of documentary honesty and fine art aesthetics. Focused on the unscripted gravity of human connection, this approach preserves the true color, authentic mood, and intricate details of a celebration to create a timeless visual legacy.
          </p>

          <div>
            <Link href="/portfolio">
              <button className={styles.button}>DISCOVER THE APPROACH</button>
            </Link>
          </div>
        </motion.div>

        {/* Right Image Column */}
        <div className={styles.col3}>
          <motion.div className={styles.row} style={{ y: y1 }}>
            <motion.div
              initial={{ opacity: 0, y: "3em" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="/weddings/alex-adam/000048.jpg"
                alt="Candid wedding moments"
                title="Wedding Photo"
                className={styles.image}
                width={600}
                height={900}
              />
            </motion.div>
          </motion.div>
          <motion.div className={styles.row} style={{ y: y2 }}>
            <motion.div
              initial={{ opacity: 0, y: "3em" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="/weddings/erica-mike/000078.jpg"
                alt="Cinematic documentary wedding photography"
                title="Wedding Photo"
                className={styles.image}
                width={600}
                height={900}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}