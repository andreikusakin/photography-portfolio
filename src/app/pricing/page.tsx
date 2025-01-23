"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import Image from "next/image";
import PageContainer from "../components/PageContainer/PageContainer";
import Link from "next/link";
import { ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE, HOUR_RATE, STARTER_WEDDING_PACKAGE_PRICE,  } from "@/lib/data";

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
        <div className={styles.weddingPackages}>
          <div className={styles.package}>
            <motion.h4 variants={itemVariants}>Starter Wedding Package</motion.h4>
            <motion.div className={styles.section} variants={itemVariants}>
              <div className={styles.imageContainer}>
                <Image
                  src="/wedding/veronicajoseph/17.jpg"
                  alt="wedding photo"
                  height={900}
                  width={600}
                  quality={90}
                />
              </div>

              <div className={styles.column}>
                
                <ul>
                  <li>
                    <strong>6+ Hours of Coverage</strong> <br /> Tailored to fit
                    your wedding timeline and needs.
                  </li>
                  <li>
                    <strong>Second Photographer</strong> <br /> Additional
                    angles and coverage to ensure no detail is missed.
                  </li>
                  <li>
                    <strong>Engagement Session</strong> <br /> A complimentary
                    session to celebrate and announce your big day.
                  </li>
                  <li>
                    <strong>Online Gallery</strong> <br /> Easily view, share,
                    and download your high-resolution photos.
                  </li>
                </ul>
                <h4>Starting at ${STARTER_WEDDING_PACKAGE_PRICE}</h4>
                <div>
                  Ideal for intimate and medium-sized celebrations. Let’s
                  discuss your wedding day vision and customize this package to
                  fit your needs!
                </div>
                <div>
                  For more details, be sure to check out my{" "}
                  <Link href="/faq">FAQ</Link> or{" "}
                  <Link href="/contact">reach out</Link> to me directly.
                </div>
                <a
            href="https://andrewkusakinphotography57.pixieset.com/contact-form/cf_EfoWk4CFGPjPNv7Jk5AReGyJpZuE"
            className={styles.contactForm_link}
            target="_blank"
          >
            <div className={styles.contactItem}>
              <h2>Inquire</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
                ></path>
              </svg>
            </div>
          </a>
              </div>
            </motion.div>
          </div>
          <div className={styles.package}>
            <motion.h4 variants={itemVariants}>
              All-Inclusive Wedding Package
            </motion.h4>
            <motion.div className={styles.section} variants={itemVariants}>
              <div className={styles.imageContainer}>
                <Image
                  src="/wedding/valeriejoseph/17.jpg"
                  alt="wedding photo"
                  height={900}
                  width={600}
                  quality={90}
                />
              </div>

              <div className={styles.column}>
               
                <ul>
                  <li>
                    <strong>Full-Day Coverage</strong> <br /> No set time limit,
                    so every important moment is captured.
                  </li>
                  <li>
                    <strong>Engagement Session</strong> <br /> A complimentary
                    session to celebrate and announce your big day.
                  </li>
                  <li>
                    <strong>Second Photographer</strong> <br /> Additional
                    angles and coverage to ensure no detail is missed.
                  </li>
                  <li>
                    <strong>Online Gallery</strong> <br /> Easily view, share,
                    and download your high-resolution photos.
                  </li>
                  <li>
                    <strong>Wedding Album</strong> <br /> A custom-designed
                    album to preserve your memories.
                  </li>
                </ul>
                <h4>${ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE}</h4>
                <div>
                  I believe in capturing every moment of your wedding without
                  compromise, which is why my package covers you from start to
                  finish. No hourly limits, no hidden fees—just comprehensive
                  coverage of your big day.
                </div>
                <div>
                  For more details, be sure to check out my{" "}
                  <Link href="/faq">FAQ</Link> or{" "}
                  <Link href="/contact">reach out</Link> to me directly.
                </div>
                <a
            href="https://andrewkusakinphotography57.pixieset.com/contact-form/cf_EfoWk4CFGPjPNv7Jk5AReGyJpZuE"
            className={styles.contactForm_link}
            target="_blank"
          >
            <div className={styles.contactItem}>
              <h2>Inquire</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
                ></path>
              </svg>
            </div>
          </a>
              </div>
            </motion.div>
          </div>
        </div>
       
        <motion.h2 variants={itemVariants}>
          Engagements / Portraits / Events
        </motion.h2>
        <motion.div className={styles.section} variants={itemVariants}>
          <div>
            <strong>Starting at ${HOUR_RATE} per hour</strong> Customizable
            based on the scope of your session.
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
