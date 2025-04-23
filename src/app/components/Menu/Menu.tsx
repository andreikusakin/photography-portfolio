"use client";

import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { socials } from "@/lib/data";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 991);
      if (window.innerWidth > 991) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);



  return (
    <div className={styles.wrapper}>
      {(isMobile) && (
        <motion.div 
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          exit={{ opacity: 0}}
          transition={{ duration: 0.2}}
        >
          <div></div>
          <div></div>
        </motion.div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menu}
                // initial={{ opacity: 0}}
                // animate={{ opacity: 1}}
                // exit={{ opacity: 0}}
                // transition={{ duration: 0.2}}
          >
            <div>
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className={styles.name}>
                  <Link href="/">Andrew Kusakin Photography</Link>
                </div>
                <ul>
                  <li onClick={() => setIsOpen(false)}>
                    <Link
                      href="/portfolio"
                      className={
                        pathname === "/portfolio" ? styles.active : undefined
                      }
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <Link
                      href="/about"
                      className={
                        pathname === "/about" ? styles.active : undefined
                      }
                    >
                      About
                    </Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <Link
                      href="/pricing"
                      className={
                        pathname === "/pricing" ? styles.active : undefined
                      }
                    >
                      Pricing
                    </Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <Link
                      href="/information"
                      className={
                        pathname === "/information" ? styles.active : undefined
                      }
                    >
                      Information
                    </Link>
                  </li>
                  <li onClick={() => setIsOpen(false)}>
                    <Link
                      href="/contact"
                      className={
                        pathname === "/contact" ? styles.active : undefined
                      }
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
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
              </motion.nav>
            </div>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
