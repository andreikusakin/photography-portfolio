import React from "react";
import styles from "./Marquee.module.css";

// Booking window, derived at render so the strip never goes stale. Bump this
// offset if you'd rather the window roll over mid-year (e.g. 1 = start naming
// next year once the current season is mostly booked).
const YEAR_OFFSET = 0;

const currentYear = new Date().getFullYear() + YEAR_OFFSET;
const nextYear = currentYear + 1;

const words = [
  `Now Booking ${currentYear} & ${nextYear}`,
  "Weddings & Elopements",
  "Boston and New England",
  `Limited ${currentYear} Dates`,
  "Available Worldwide",
];

/** Slow, infinite availability strip — a quiet breath between the hero and the
 *  first section, carrying current booking years so the page reads as live.
 *  Pure CSS animation; pauses for reduced-motion users. */
export default function Marquee() {
  const row = (ariaHidden: boolean) => (
    <div className={styles.row} aria-hidden={ariaHidden || undefined}>
      {words.map((word) => (
        <span className={styles.item} key={word}>
          <span className={styles.word}>{word}</span>
          <span className={styles.dot}>·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
