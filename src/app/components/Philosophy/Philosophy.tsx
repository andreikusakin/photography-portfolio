"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <section className={styles.container}>
      {/* Top Text Section */}
      <motion.div 
        className={styles.textTop}
        initial={{ opacity: 0, y: "2em" }}
        whileInView={{ opacity: 1, y: "0em" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <p className={styles.eyebrow}>THE APPROACH</p>
        <h2 className={styles.heading}>
          CINEMATIC <br />
          STORYTELLING <br />
          <span className={styles.italic}>with</span> TIMELESS <br />
          GRACE
        </h2>
      </motion.div>

      {/* Center Image Section */}
      <motion.div 
        className={styles.imageWrapper}
        initial={{ opacity: 0, filter: "blur(0.5em)" }}
        whileInView={{ opacity: 1, filter: "blur(0em)" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/weddings/erin-kyle/000141.jpg" // Replace with a strong, detail or portrait shot
          alt="Fine art wedding photography details"
          width={800}
          height={1000}
          className={styles.image}
        />
      </motion.div>

      {/* Bottom Text Section */}
      <motion.div 
        className={styles.textBottom}
        initial={{ opacity: 0, y: "1.5em" }}
        whileInView={{ opacity: 1, y: "0em" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p className={styles.bodyText}>
          A unique, cinematic approach to fine art documentary wedding photography. 
          Honoring the quiet strength of human connection and preserving the genuine 
          atmosphere of your day, crafted with care down to the smallest detail.
        </p>
        <Link href="/portfolio">
          <button className={styles.button}>BROWSE PORTFOLIO</button>
        </Link>
      </motion.div>
    </section>
  );
}