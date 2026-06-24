"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Experience", href: "/experience" },
  { name: "Pricing", href: "/pricing" },
  { name: "Journal", href: "/journal" },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isMinimalHero =
    (pathname.startsWith("/journal/") && pathname !== "/journal") ||
    (pathname.startsWith("/guides/") && pathname !== "/guides");
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

  const colorChangeStart = isHomePage
    ? viewportHeight * 2.8
    : viewportHeight * 0.4;
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
  const settledShadow = "0 1px 0 rgba(0, 0, 0, 0.1)";
  const settledBg =
    "linear-gradient(to bottom,rgba(245, 240, 235, 0.8) 0%,rgba(245, 240, 235, 0.8) 100%)";

  const boxShadow = useTransform(
    scrollY,
    [50, 150, colorChangeEnd * 0.9, colorChangeEnd],
    isMinimalHero
      ? [settledShadow, settledShadow, settledShadow, settledShadow]
      : isDesktop
      ? [
          "none",
          "0 1px 0 rgba(255, 255, 255, 0.17)",
          "0 1px 0 rgba(255, 255, 255, 0.17)",
          settledShadow,
        ]
      : ["none", "none", "none", "none"],
    { clamp: true }
  );

  const headerColor = useTransform(
    scrollY,
    [colorChangeStart, colorChangeEnd],
    isMinimalHero ? ["#181716", "#181716"] : ["#fff", "#181716"],
    { clamp: true }
  );

  const buttonColor = useTransform(
    scrollY,
    [colorChangeStart, colorChangeEnd],
    isMinimalHero
      ? ["rgba(24, 23, 22, 0.2)", "rgba(24, 23, 22, 0.2)"]
      : ["rgba(255, 255, 255, 0.2)", "rgba(24, 23, 22, 0.2)"],
    { clamp: true }
  );

  const headerBackground = useTransform(
    scrollY,
    [colorChangeStart, colorChangeEnd],
    isMinimalHero
      ? [settledBg, settledBg]
      : [
          "linear-gradient(to bottom,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0) 100%)",
          settledBg,
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
        // Desktop stays fixed for the shrink/settle-on-scroll behavior; on
        // mobile it's absolute so the name sticks to the top of the page and
        // scrolls away instead of following the viewport.
        position: isDesktop ? "fixed" : "absolute",
        height,
        top: 0,
        backdropFilter: filterBlur,
        boxShadow, // Apply the corrected boxShadow transform
        color: headerColor, // Apply the transformed color
        // Conditionally apply background based on isDesktop
        background: isDesktop ? headerBackground : "none",
      }}
    >
      <Link href="/" className={styles.name}>
        Andrew Kusakin
      </Link>
      <nav>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                isActive ? styles.navLinkActive : ""
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <div className={styles.navLinkText_wrapper}>
                <span className={styles.navLinkText}>{link.name}</span>
                <span
                  className={`${styles.navLinkText} ${styles.dublicate}`}
                  aria-hidden="true"
                >
                  {link.name}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
      {/* Anchor styled as a button — a real <button> here would nest an
          interactive element inside the <Link> anchor (invalid markup) */}
      <motion.div
        className={styles.contact}
        style={{
          color: headerColor,
          borderColor: buttonColor,
        }}
      >
        <Link
          href="/contact"
          className={styles.contactButton}
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          <div className={styles.navLinkText_wrapper}>
            <span className={styles.navLinkText}>Connect</span>
            <span
              className={`${styles.navLinkText} ${styles.dublicate}`}
              aria-hidden="true"
            >
              Connect
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.header>
  );
}
