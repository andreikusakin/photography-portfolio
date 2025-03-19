import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { MotionDiv } from "../MotionDiv/MotionDiv";

export default function Header() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.header}
    >
      <Link href="/" className={styles.description}>
        wedding & portrait photographer in boston, Massachusetts
      </Link>
      <Link href="/">
        <h5 className={styles.name}>Andrew Kusakin</h5>
      </Link>
      <nav>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/information">Information</Link>
        <Link href="/contact" className={styles.contact}>
          Contact
        </Link>
      </nav>
    </MotionDiv>
  );
}
