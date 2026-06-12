import React from "react";
import styles from "./Marquee.module.css";

const words = [
  "Documentary",
  "Cinematic",
  "Fine Art",
  "Unposed",
  "Storytelling",
  "True Emotion",
];

/** Slow, infinite keyword strip — a quiet breath between the hero and the
 *  first section. Pure CSS animation; pauses for reduced-motion users. */
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
