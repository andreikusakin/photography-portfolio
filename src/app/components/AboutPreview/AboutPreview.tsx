"use client";
import React from "react";
import Image from "next/image";
import styles from "./AboutPreview.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Image Column */}
        <motion.div 
          className={styles.imageCol}
          initial={{ opacity: 0, x: "-2em" }}
          whileInView={{ opacity: 1, x: "0em" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className={styles.imageFrame}>
            <Image 
              src="/andrew-kusakin-portrait.jpg" // Replace with your portrait
              alt="Andrew Kusakin Wedding Photographer"
              width={600}
              height={800}
              className={styles.portrait}
            />
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div 
          className={styles.textCol}
          initial={{ opacity: 0, x: "2em" }}
          whileInView={{ opacity: 1, x: "0em" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className={styles.eyebrow}>THE ARTIST</p>
          <h2 className={styles.heading}>The Guide Behind the Lens</h2>
          <p className={styles.bodyText}>
            Andrew Kusakin is an intentional storyteller dedicated to the gravity of human connection. 
            Rooted in a documentary perspective, the focus remains on creating an effortless 
            environment where genuine chemistry thrives. Whether navigating the grand energy of a 
            full-scale wedding or the quiet intimacy of a secluded elopement, the goal is to 
            provide a calm presence that allows couples to be fully present. By honoring true 
            color and authentic mood, every gallery becomes a radiant testament to the people 
            and the relationships that define a legacy.
          </p>
          <Link href="/about">
            <button className={styles.button}>MEET ANDREW</button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}