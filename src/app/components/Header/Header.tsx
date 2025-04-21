"use client";

import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { MotionDiv } from "../MotionDiv/MotionDiv";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <MotionDiv
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.header}
      style={{
        position: isHomePage ? "absolute" : "relative",
      }}
    >
      <Link href="/">
        <h5 className={styles.name}>Andrew Kusakin Photography</h5>
      </Link>
      <nav>
        <Link href="/portfolio" className={styles.navLink}>
          <div className={styles.navLinkText_wrapper}>
            <span className={styles.navLinkText}>Portfolio</span>
            <span className={`${styles.navLinkText} ${styles.dublicate}`}>
              Portfolio
            </span>
          </div>
        </Link>
        <Link href="/about" className={styles.navLink}>
          <div className={styles.navLinkText_wrapper}>
            <span className={styles.navLinkText}>About</span>
            <span className={`${styles.navLinkText} ${styles.dublicate}`}>
              About
            </span>
          </div>
        </Link>
        <Link href="/pricing" className={styles.navLink}>
          <div className={styles.navLinkText_wrapper}>
            <span className={styles.navLinkText}>Pricing</span>
            <span className={`${styles.navLinkText} ${styles.dublicate}`}>
              Pricing
            </span>
          </div>
        </Link>
        <Link href="/information" className={styles.navLink}>
          <div className={styles.navLinkText_wrapper}>
            <span className={styles.navLinkText}>Information</span>
            <span className={`${styles.navLinkText} ${styles.dublicate}`}>
              Information
            </span>
          </div>
        </Link>
        <Link href="/contact" className={styles.contact}>
          <button className={styles.contactButton}>
            <div className={styles.navLinkText_wrapper}>
              <span className={styles.navLinkText}>Contact</span>
              <span className={`${styles.navLinkText} ${styles.dublicate}`}>
                Contact
              </span>
            </div>
          </button>
        </Link>
      </nav>
    </MotionDiv>
  );
}
