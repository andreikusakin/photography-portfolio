import React from "react";
import styles from "./GetInTouch.module.css";
import ContactForm from "../ContactForm/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/lib/data";

export default function GetInTouch() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>Let's Connect</h2>
        <div className={styles.getInTouch_container}>
          <div className={styles.getInTouch}>
            <h5>Get In Touch</h5>
          </div>
          <p>
            Let's capture your vision together. Reach out today to discuss your
            wedding, portrait, or event photography needs. Serving New England
            and beyond—let’s create something unforgettable.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/couples/alinabrandon/20.jpg"
            alt="Contact"
            fill
            style={{
              objectFit: "cover",
            }}
            quality={80}
          />
        </div>
        <div className={styles.contactDetails}>
          <div className={styles.col1}> <h5>Contact details</h5></div>
         
          <div className={styles.details}>
            <div>Andrew Kusakin Photography LLC.</div>
            <div>
              <div>
                <span>Email: </span>
                <a href="mailto:kusakinphoto@gmail.com">
                  kusakinphoto@gmail.com
                </a>
              </div>
              <div>
                <span>Phone: </span>
                <a href="tel:3473135300">3473135300</a>
              </div>
            </div>
            <div>Based in Boston, Massachusetts</div>
            <div className={styles.socials}>{socials.map((social) => (
              <Link href={social.url} key={social.name}>
                {social.name}
              </Link>
            ))}</div>
            
          </div>
          <div
            className={styles.contactForm}
          ><ContactForm /></div>
          
        </div>
      </div>
    </div>
  );
}
