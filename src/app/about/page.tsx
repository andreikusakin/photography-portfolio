"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";

export default function About() {
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
        About Me
      </motion.h1>
      <motion.div className={styles.description}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        <motion.div className={styles.imageContainer}>
          <Image
            src="/me.jpg"
            alt="andrew kusakin photo"
            height={900}
            width={600}
            quality={90}
          />
        </motion.div>
        <motion.div className={styles.text}>
          I'm Andrew Kusakin. Art has held a profound place in my heart for as
          long as I can remember. It's not just something I do, but a way for me
          to express myself. I've always enjoyed capturing moments—whether I'm
          drawing them or snapping photos with my camera. For me, every picture
          or drawing is a way to freeze a special moment in time, and I love
          being able to share those with others
        </motion.div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
      >
        Get In Touch
      </motion.h1>
      <motion.div className={styles.contact}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
      >
        <motion.div className={styles.contactItem}>
          <h3>Email</h3>
          <a
            href="mailto:
          kusakinphoto@gmail.com"
          >
            kusakinphoto@gmail.com
          </a>
        </motion.div>
        <motion.div className={styles.socials}>
          <a href="https://www.instagram.com/kusakinphoto/">Instagram</a>
          <a href="https://www.tiktok.com/kusakinphoto/">TikTok</a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
