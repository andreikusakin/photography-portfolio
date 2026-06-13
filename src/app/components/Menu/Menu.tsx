"use client";

import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { socials } from "@/lib/data";

const customEase = [0.16, 1, 0.3, 1] as const;

const menuLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Pricing", href: "/pricing" },
  // { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth > 992) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Lock the page scroll while the menu is open
  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={styles.wrapper}>
      {isMobile && (
        <motion.button
          className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Masked word swap — "Menu" rides up and out as "Close" rises in */}
          <span className={styles.toggleMask} aria-hidden="true">
            <span className={styles.toggleWords}>
              <span>Menu</span>
              <span>Close</span>
            </span>
          </span>
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <div className={styles.menu}>
            {/* Dimmed page behind the panel — tap to close */}
            <motion.div
              className={styles.overlay}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div>

            <motion.nav
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.7, ease: customEase }}
            >
              <div className={styles.name}>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Andrew Kusakin
                </Link>
              </div>

              <ul>
                {menuLinks.map((link, i) => (
                  <li key={link.name} onClick={() => setIsOpen(false)}>
                    <span className={styles.linkMask}>
                      <motion.span
                        className={styles.linkRow}
                        initial={{ y: "110%" }}
                        animate={{ y: "0%" }}
                        exit={{
                          y: "110%",
                          transition: { duration: 0.35, ease: customEase },
                        }}
                        transition={{
                          duration: 0.9,
                          ease: customEase,
                          delay: 0.25 + i * 0.07,
                        }}
                      >
                        <span className={styles.linkIndex} aria-hidden="true">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Link
                          href={link.href}
                          className={
                            pathname === link.href ? styles.active : undefined
                          }
                        >
                          {link.name}
                        </Link>
                      </motion.span>
                    </span>
                  </li>
                ))}
              </ul>

              <motion.div
                className={styles.menuFooter}
                initial={{ opacity: 0, y: "1em" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.25 } }}
                transition={{ duration: 0.8, ease: customEase, delay: 0.55 }}
              >
                <div className={styles.socials}>
                  {socials.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </Link>
                  ))}
                </div>
                <a
                  href="mailto:kusakinphoto@gmail.com"
                  className={styles.email}
                >
                  kusakinphoto@gmail.com
                </a>
              </motion.div>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
