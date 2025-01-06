"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/wedding" || pathname === "/couples") {
      setIsPortfolioOpen(true);
    }
    if (pathname === "/faq" || pathname === "/pricing") {
      setIsInformationOpen(true);
    }
  }, [pathname]);
  return (
    <motion.header
      className={styles.wrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/" className={styles.name}>
          <h3>Andrew Kusakin</h3>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menu_button}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className={styles.side_bar}>
        <nav className={styles.nav_desktop}>
          <span
            onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
            className={styles.nav_link}
          >
            Portfolio
          </span>
          <AnimatePresence>
            {isPortfolioOpen && (
              <motion.ul
                className={styles.dropdown}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <li>
                  <Link
                    href="/wedding"
                    className={`${styles.nav_link} ${
                      pathname === "/wedding" ? styles.selected : ""
                    }`}
                  >
                    Wedding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/couples"
                    className={`${styles.nav_link} ${
                      pathname === "/couples" ? styles.selected : ""
                    }`}
                  >
                    Couples
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>

          <Link href="/about" className={styles.nav_link}>
            About
          </Link>

          <span
            onClick={() => setIsInformationOpen(!isInformationOpen)}
            className={styles.nav_link}
          >
            Information
          </span>
          <AnimatePresence>
            {isInformationOpen && (
              <motion.ul
                className={styles.dropdown}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <li>
                  <Link href="/faq" className={styles.nav_link}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className={styles.nav_link}>
                    Pricing
                  </Link>
                </li>
              </motion.ul>
            )}
          </AnimatePresence>

          <Link href="/about" className={styles.nav_link}>
            Contact
          </Link>
        </nav>

        <div className={styles.subtitle}>Photographer based in Boston, MA</div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobile}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <nav className={styles.nav_desktop}>
              <span
                onClick={() => {
                  setIsPortfolioOpen(!isPortfolioOpen);
                  if (!isPortfolioOpen) setIsMenuOpen(false);
                }}
                className={styles.nav_link}
              >
                Portfolio
              </span>

              {isPortfolioOpen && (
                <ul className={styles.dropdown}>
                  <li>
                    <Link
                      href="/wedding"
                      onClick={() => setIsMenuOpen(false)}
                      className={`${styles.nav_link} ${
                        pathname === "/wedding" ? styles.selected : ""
                      }`}
                    >
                      Wedding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/couples"
                      onClick={() => setIsMenuOpen(false)}
                      className={`${styles.nav_link} ${
                        pathname === "/couples" ? styles.selected : ""
                      }`}
                    >
                      Portrait
                    </Link>
                  </li>
                </ul>
              )}

              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={styles.nav_link}
              >
                About
              </Link>

              <span
                onClick={() => {
                  setIsInformationOpen(!isInformationOpen);
                  if (!isInformationOpen) setIsMenuOpen(false);
                }}
                className={styles.nav_link}
              >
                Information
              </span>

              {isInformationOpen && (
                <ul className={styles.dropdown}>
                  <li>
                    <Link
                      href="/faq"
                      onClick={() => setIsMenuOpen(false)}
                      className={styles.nav_link}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pricing"
                      onClick={() => setIsMenuOpen(false)}
                      className={styles.nav_link}
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              )}

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={styles.nav_link}
              >
                Contact
              </Link>
            </nav>

            <div className={styles.subtitle}>
              Photographer based in Boston, MA
            </div>
          </motion.div>
        )}
      </AnimatePresence></div>
    </motion.header>
  );
}
