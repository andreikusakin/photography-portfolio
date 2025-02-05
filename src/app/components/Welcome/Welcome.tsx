"use client";

import React, { useRef } from "react";
import styles from "./Welcome.module.css";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

export default function Welcome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Welcome animations
  const welcomeOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.5],
    [0, 1, 1, 0]
  );
  const welcomeY = useTransform(scrollYProgress, [0, 0.2], [-800, 0]);

  // Capture animations
  const captureOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.9, 1],
    [0, 1, 1, 0]
  );
  const captureScale = useTransform(scrollYProgress, [0.4, 1], [1.5, 3]);

  // Control image opacity
  const welcomeImageOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  // Parallax effect: as you scroll, move the image vertically
  const imageParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className={styles.container} ref={containerRef}>
      {/* Shared sticky container */}
      <div className={styles.sticky}>
        {/* Welcome Animation */}
        <motion.div
          style={{ opacity: welcomeOpacity, y: welcomeY }}
          className={styles.welcome}
        >
          <div className={styles.text}>
            <div style={{ opacity: 0.8 }}>Welcome, I'm Andrew Kusakin</div>
            <h5>Photographer & Story Teller</h5>
            <div style={{ opacity: 0.8, fontWeight: 400 }}>
              Thank you for taking the time to stop by my little corner of the
              Internet. I'm Caroline: a Boston area photographer of marriage and
              motherhood, story-teller, and a believer in love. I'm so glad
              you're here.
            </div>
          </div>
          <motion.div className={styles.imageOverlay}>
            <motion.div
              className={styles.imageWrapper}
              style={{
                opacity: welcomeImageOpacity,
                y: imageParallax, // Apply the parallax transform here
                scale: 1.1,  
              }}
            >
              <Image
                src="/couples/alinabrandon/30.jpg"
                fill
                quality={90}
                style={{ objectFit: "cover" }}
                alt="Welcome Image"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Capture Animation (positioned absolutely to overlap) */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: captureOpacity,
            scale: captureScale,
          }}
        >
          <div className={styles.images}></div>
          <div className={styles.capture}>
            <div>I'm here</div>
            <div>to capture</div>
            <div>your</div>
            <div>precious</div>
            <div>moments</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
