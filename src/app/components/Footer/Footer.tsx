import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { socials } from "@/lib/data";

const menuLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      {/* Oversized wordmark — the footer as a closing title card */}
      <div className={styles.wordmarkRow}>
        <Link href="/" className={styles.wordmark}>
          Andrew <em>Kusakin</em>
        </Link>
        <p className={styles.tagline}>
          Fine art documentary wedding photography — crafted with care down to
          the smallest detail.
        </p>
      </div>

      <div className={styles.columns}>
        <div className={styles.col}>
          <span className={styles.label}>Menu</span>
          <ul>
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <span className={styles.label}>Follow</span>
          <ul>
            {socials.map((social) => (
              <li key={social.name}>
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.navLink}
                >
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <span className={styles.label}>Contact</span>
          <ul>
            <li>
              <a href="mailto:andrew@kusakinphoto.com" className={styles.navLink}>
                andrew@kusakinphoto.com
              </a>
            </li>
            <li>
              <a href="tel:+13473135300" className={styles.navLink}>
                +1 (347) 313-5300
              </a>
            </li>
            <li className={styles.muted}>Boston, MA — and beyond</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <span>© {new Date().getFullYear()} Andrew Kusakin Photography LLC</span>
        <span className={styles.muted}>
          Documentary Wedding Photographer, Boston
        </span>
      </div>
    </footer>
  );
}
