import React from "react";
import styles from "./GetInTouch.module.css";
import ContactForm from "../ContactForm/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/lib/data";
import ContactImage from "./../../../../public/wedding/valeriejoseph/5.jpg";

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
            src={ContactImage}
            alt="Wedding couple at ceremony"
            width={1920}
            height={810}
            quality={90}
            placeholder="blur"
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
