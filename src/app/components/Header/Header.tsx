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
  
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth > 991);
    };
    

    checkIfDesktop();
    

    window.addEventListener('resize', checkIfDesktop);
    

    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);
  

  const { scrollY } = useScroll();

  const filterBlur = useTransform(
    scrollY,
    [50, 150],
    isDesktop? ["blur(0em)", "blur(0.5em)"] : ["blur(0em)", "blur(0em)"]
  );
  const height = useTransform(
    scrollY,
    [50, 150],
    isDesktop? ["7em", "5em"] : ["5em", "5em"]
    
  );
  const boxShadow = useTransform(
    scrollY,
    [50, 150],
    isDesktop? ["none", "0 1px 0 rgba(255, 255, 255, 0.17)"] : ["none", "none"] 

  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.header}
      style={{
        position: isHomePage ? "fixed" : "sticky",
        height,
        top: 0,
        backdropFilter: filterBlur,
        boxShadow
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
    </motion.header>
  );
}
