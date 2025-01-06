"use client";

import React, { useState } from "react";
import styles from "./Overlay.module.css";

export default function Overlay({
  type,
  location,
  src,
}: {
  type: string;
  location: string;
  src: string;
}) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className={styles.overlay} onClick={() => setIsClicked(!isClicked)}>
        <div className={styles.type}>{type}</div>
        <div className={styles.location}>{location}</div>
      </div>
      {isClicked && (
        <div
          className={styles.fullscreen}
          onClick={() => setIsClicked(!isClicked)}
        >
          <img
            src={src}
            alt={`${location} ${type}`}
            className={styles.fullscreen_image}
          />
        </div>
      )}
      
    </>
  );
}
