import React from "react";
import styles from "./GetInTouch.module.css";

export default function GetInTouch() {
  return (
    <div>
      <h1>Get In Touch</h1>
      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <a
            href="https://andrewkusakinphotography57.pixieset.com/contact-form/cf_EfoWk4CFGPjPNv7Jk5AReGyJpZuE"
            className={styles.contactForm_link}
            target="_blank"
          >
            <div className={styles.contactItem}>
              <h3>Contact Form</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <path
                  fill="currentColor"
                  d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"
                ></path>
              </svg>
            </div>
          </a>
        </div>

        <div>
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
