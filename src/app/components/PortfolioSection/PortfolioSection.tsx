import React from "react";
import styles from "./PortfolioSection.module.css";
import Image from "next/image";
import Link from "next/link";
import WeddingPicture from "./weddings.jpg";
import CouplesPicture from "./couples.jpg";
import FamilyPicture from "./family.jpg";
import * as motion from "motion/react-client";

export default function PortfolioSection() {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, filter: "blur(0.5em)" }}
      whileInView={{ opacity: 1, filter: "blur(0em)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ y: "0.5rem" }}
        whileInView={{ y: "0em" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Explore The Moments
      </motion.h2>
      <motion.div
        className={styles.text}
        initial={{ y: "0.5rem" }}
        whileInView={{ y: "0em" }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Dive into galleries filled with genuine laughter, quiet connections, and
        authentic celebrations. From the energy of a wedding day to the intimacy
        of a couple's session or the warmth of family life, my focus is always
        on capturing real moments, beautifully.
      </motion.div>
      <motion.div
        className={styles.categories}
        initial={{ y: "0.5rem", opacity: 0, filter: "blur(0.5em)" }}
        whileInView={{ y: "0em", opacity: 1, filter: "blur(0em)" }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link href="/wedding">
          <div className={styles.category}>
            <div className={styles.imageContainer}>
              <Image
                src={WeddingPicture}
                alt="Wedding"
                className={styles.image}
               
              />
            </div>
            <div className={styles.overlay}>
              <h2 className={styles.name}>Weddings</h2>
              <button>Explore</button>
            </div>
          </div>
        </Link>
        <Link href="/couples">
          <div className={styles.category}>
            <div className={styles.imageContainer}>
              <Image
                src={CouplesPicture}
                alt="Couples"
                className={styles.image}
               
              />
            </div>
            <div className={styles.overlay}>
              <h2 className={styles.name}>Couples</h2>
              <button>Explore</button>
            </div>
          </div>
        </Link>
        <Link href="/family">
          <div className={styles.category}>
            <div className={styles.imageContainer}>
              <Image
                src={FamilyPicture}
                alt="Family"
                className={styles.image}
               
              />
            </div>

            <div className={styles.overlay}>
              <h2 className={styles.name}>Family</h2>
              <button>Explore</button>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
