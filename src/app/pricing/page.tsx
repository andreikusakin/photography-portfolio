"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";
import PageContainer from "../components/PageContainer/PageContainer";
import Link from "next/link";
import { WEDDING_COST } from "@/lib/data";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function page() {
  return (
    <PageContainer>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        <motion.h1 variants={itemVariants}>Pricing</motion.h1>
        <motion.div className={styles.description} variants={itemVariants}>
          <div className={styles.text}>
            I offer a range of photography services designed to fit your unique
            needs—whether you’re looking for a wedding photographer, a portrait
            photographer, or coverage for a special event.
          </div>
        </motion.div>
        <motion.h2 variants={itemVariants}>Wedding Package</motion.h2>
        <motion.div className={styles.section} variants={itemVariants}>
          <div className={styles.imageContainer}>
            <Image
              src="/wedding/veronicajoseph/47.jpg"
              alt="wedding photo"
              height={900}
              width={600}
              quality={90}
            />
          </div>

          <div className={styles.column}>
            <ul>
              <li>
                <strong>Full-Day Coverage</strong> <br /> No set time limit, so
                every important moment is captured.
              </li>
              <li>
                <strong>Engagement Session</strong> <br /> A complimentary
                session to celebrate and announce your big day.
              </li>
              <li>
                <strong>Second Photographer</strong> <br /> Additional angles
                and coverage to ensure no detail is missed.
              </li>
              <li>
                <strong>Online Gallery</strong> <br /> Easily view, share, and
                download your high-resolution photos.
              </li>
            </ul>
            <h4>${WEDDING_COST}</h4>
            <div>
              I believe in capturing every moment of your wedding without
              compromise, which is why my package covers you from start to
              finish. No hourly limits, no hidden fees—just comprehensive
              coverage of your big day. For more details, be sure to check out
              my <Link href="/faq">FAQ</Link> or{" "}
              <Link href="/contact">reach out</Link> to me directly.
            </div>
          </div>
        </motion.div>
        <motion.h2 variants={itemVariants}>
          Engagements / Portraits / Events
        </motion.h2>
        <motion.div className={styles.section} variants={itemVariants}>
          <div>
            <strong>Starting at $350 per hour</strong> Customizable based on the
            scope of your session.
          </div>
        </motion.div>
        <motion.h3 variants={itemVariants}>
          Ready to book or have more questions?
        </motion.h3>
        <motion.div className={styles.section} variants={itemVariants}>
          <div>
            Head over to my <Link href="/faq">FAQ page</Link> for additional
            details, or feel free to <Link href="/contact">get in touch</Link>{" "}
            so I can help you find the perfect photography solution.
          </div>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
}
