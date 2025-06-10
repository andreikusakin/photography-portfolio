"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isDesktop, setIsDesktop] = useState(true);
  const [viewportHeight, setViewportHeight] = useState(0); 

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth > 991);
    };

    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight); 
    };

    checkIfDesktop();
    updateViewportHeight(); 

    window.addEventListener("resize", checkIfDesktop);
    window.addEventListener("resize", updateViewportHeight); 


    return () => {
      window.removeEventListener("resize", checkIfDesktop);
      window.removeEventListener("resize", updateViewportHeight);
    };
  }, []);

  const { scrollY } = useScroll();

  const colorChangeStart = isHomePage ? viewportHeight * 2.8 : viewportHeight * 0.4;
  const colorChangeEnd = isHomePage ? viewportHeight * 3 : viewportHeight * 0.6;

  const filterBlur = useTransform(
    scrollY,
    [50, 150],
    isDesktop ? ["blur(0em)", "blur(0.5em)"] : ["blur(0em)", "blur(0em)"]
  );
  const height = useTransform(
    scrollY,
    [50, 150],
    isDesktop ? ["7em", "5em"] : ["5em", "5em"]
  );
  const boxShadow = useTransform(
    scrollY,
    [50, 150, colorChangeEnd * 0.9, colorChangeEnd],
    isDesktop
      ? ["none", "0 1px 0 rgba(255, 255, 255, 0.17)"  , "0 1px 0 rgba(255, 255, 255, 0.17)", "0 1px 0 rgba(0, 0, 0, 0.1)"]
      : ["none", "none", "none", "none"],
    { clamp: true }
  );

  const headerColor = useTransform(
    scrollY,
    [colorChangeStart, colorChangeEnd],
    ["#fff" , "#181716"],
    { clamp: true }
  );

  const buttonColor = useTransform(
    scrollY,
    [colorChangeStart, colorChangeEnd],
    // Update the start and end colors here
    [
    "rgba(255, 255, 255, 0.2)",
      "rgba(238, 229, 217, 1)",
    ],
    { clamp: true }
  );

  const headerBackground = useTransform(
    scrollY,
    [colorChangeStart, colorChangeEnd],
   [
          "linear-gradient(to bottom,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0) 100%)",
          "linear-gradient(to bottom,rgba(245, 240, 235, 0.8) 0%,rgba(245, 240, 235, 0.8) 100%)",
        ],
     
    { clamp: true }
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.header}
      style={{
        position: "fixed",
        height,
        top: 0,
        backdropFilter: filterBlur,
        boxShadow, // Apply the corrected boxShadow transform
        color: headerColor, // Apply the transformed color
        // Conditionally apply background based on isDesktop
        background: isDesktop ? headerBackground : 'none',
      }}
    >
      <Link href="/" className={styles.name}>
        Andrew Kusakin Photography
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
        <Link href="/experience" className={styles.navLink}>
          <div className={styles.navLinkText_wrapper}>
            <span className={styles.navLinkText}>Experience</span>
            <span className={`${styles.navLinkText} ${styles.dublicate}`}>
              Experience
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

        <Link href="/contact" className={styles.contact}>
          <motion.button
            className={styles.contactButton}
            style={{
              color: headerColor, // Keep text color consistent with header
              background: buttonColor, // Apply the updated button background color
            }}
          >
            <div className={styles.navLinkText_wrapper}>
              <span className={styles.navLinkText}>Contact</span>
              <span className={`${styles.navLinkText} ${styles.dublicate}`}>
                Contact
              </span>
            </div>
          </motion.button>
        </Link>
      </nav>

    </motion.header>
  );
}
