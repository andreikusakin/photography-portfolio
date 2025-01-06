"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";

export default function page() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Pricing
      </motion.h1>
      <motion.div
        className={styles.description}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        {/* <motion.div className={styles.imageContainer}>
              <Image
                src="/me.jpg"
                alt="andrew kusakin photo"
                height={900}
                width={600}
                quality={90}
              />
            </motion.div> */}
        <div className={styles.text}>
          I offer a variety of packages to suit your needs. Whether you're
          looking for a wedding photographer, portrait photographer, or event
          photographer, I've got you covered.
        </div>
      </motion.div>

      <motion.div
        className={styles.wedding}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      >
        <motion.h2>My Wedding Package Includes:</motion.h2>
        <div className={styles.text}>
          <ul>
            <li>Full day coverage</li>
            <li>Engagement session</li>
            <li>Second shooter</li>
            <li>Online gallery</li>
          </ul>
          <h4>$5000</h4>
        </div>
        <div>For more information check out FAQ or contact me directly.</div>
      </motion.div>
      <motion.div>
        Engagements/Portraits/Events start at $400 per hour.
      </motion.div>
    </motion.div>
  );
}
