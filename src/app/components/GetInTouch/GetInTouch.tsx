import React from "react";
import styles from "./GetInTouch.module.css";

export default function GetInTouch() {
  return (
    <div>
      <h1>Get In Touch</h1>
      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <h3>Email</h3>
          <a
            href="mailto:
      kusakinphoto@gmail.com"
          >
            kusakinphoto@gmail.com
          </a>
        </div>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/kusakinphoto/">Instagram</a>
          <a href="https://www.tiktok.com/kusakinphoto/">TikTok</a>
        </div>
      </div>
    </div>
  );
}
