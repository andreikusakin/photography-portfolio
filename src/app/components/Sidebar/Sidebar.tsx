"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/wedding", text: "Wedding" },
  { href: "/couples", text: "Couples" },
  { href: "/about", text: "About" },
  { href: "/faq", text: "FAQ" },
  { href: "/pricing", text: "Pricing" },
  { href: "/contact", text: "Contact" },
];

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

export default function Sidebar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <nav className={styles.navigation}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${styles.nav_link} ${
                      pathname === link.href ? styles.selected : ""
                    }`}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.subtitle}>
            Photographer based in Boston, MA
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobile}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{ duration: 0.5 }}
            >
              <motion.div
                className={styles.backdrop}
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
              <nav className={styles.navigation}>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {navLinks.map((link) => (
                    <motion.li key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`${styles.nav_link} ${
                          pathname === link.href ? styles.selected : ""
                        }`}
                      >
                        {link.text}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
