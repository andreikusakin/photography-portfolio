import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/lib/data";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.col1}>
          <span>Menu</span>
          <ul>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/information">Information</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* <div className={styles.border}></div> */}
        </div>
        
        <div className={styles.col2}>
          <span>Portfolio</span>
          <ul>
            <li>
              <Link href="/wedding">Weddings</Link>
            </li>
            <li>
              <Link href="/couples">Couples</Link>
            </li>
            <li>
              <Link href="/family">Family</Link>
            </li>

          </ul>
        </div>

          <div className={styles.col3}>
            <span>Contact</span>
            <div>
            <div>Wedding | Family | Event Photographer</div>
            <div>Based in Boston, Massachusetts</div></div>
            <div>
            <div>
              <span>Email: </span>
              <a href="mailto:kusakinphoto@gmail.com">kusakinphoto@gmail.com</a>
            </div>
            <div>
              <span>Phone: </span>
              <a href="tel:3473135300">3473135300</a>
            </div></div>
            <ul>
              {socials.map((social) => (
                <li key={social.name}>
                  <Link href={social.url} target="_blank">
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.copyright}>
              © 2025 Andrew Kusakin Photography LLC.
            </div>
          </div>
        </div>
   
      <div className={styles.image_container}>
        <Image
          src="/wedding/valeriejoseph/18.jpg"
          alt="wedding image"
          fill
          quality={85}
        />
      </div>
    </div>
  );
}
