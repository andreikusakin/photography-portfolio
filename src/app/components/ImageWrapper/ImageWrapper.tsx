import React from "react";
import styles from "./ImageWrapper.module.css";

interface ImageWrapperProps {
  src: string;
  location: string;
  type: string;
  venue: string;
}
export default function ImageWrapper({
  src,
  location,
  type,
  venue,
}: ImageWrapperProps) {
  return (
    <div className={styles.image_wrapper}>
      <img className={styles.image} src={src} alt={`${location} ${type}`} />{" "}
      <div className={styles.overlay}>
        <div className={styles.type}>{type}</div>
        <div className={styles.venue}>{venue}</div>
        <div className={styles.location}>{location}</div>
        
      </div>
    </div>
  );
}
