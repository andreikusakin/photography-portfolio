"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./PortfolioSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import WeddingPicture from '../../../../public/wedding/valeriejoseph/13.jpg'
import CouplesPicture from '../../../../public/couples/alinabrandon/30.jpg'
import FamilyPicture from '../../../../public/family/hancharou/12.jpg'

export default function PortfolioSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const containerRef = useRef<HTMLDivElement>(null);

  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const horizontalScroll = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -containerWidth * 2 - 40]
  );

  return (
    <div className={styles.wrapper}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.sticky}>
          <div className={styles.description}>Searching for a wedding, portrait, or family photographer? You're in the right place—I’ve got you covered!</div>
          <motion.div style={{ x: horizontalScroll, display: "flex", gap: 20 }}>
            <motion.div
              className={styles.section}
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className={styles.text}>
                <h2>Weddings</h2>
                <div>One of the most important days of your life</div>
                <button>
                  <Link href="/wedding">Explore More</Link>
                </button>
              </div>
              <div className={styles.image_container}>
                <Image
                  src={WeddingPicture}
                  alt="wedding image"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={70}
                  placeholder="blur"
                />
              </div>
            </motion.div>

            <motion.div
              className={styles.section}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.text}>
                <h2>Couples</h2>
                <div>Love is in the air</div>
                <button>
                  <Link href="/couples">Explore More</Link>
                </button>
              </div>
              <div className={styles.image_container}>
                <Image
                  src={CouplesPicture}
                  alt="couples image"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={70}
                  placeholder="blur"
                />
              </div>
            </motion.div>

            <motion.div
              className={styles.section}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.text}>
                <h2>Family</h2>
                <div>Family is everything</div>
                <button>
                  <Link href="/family">Explore More</Link>
                </button>
              </div>
              <div className={styles.image_container}>
                <Image
                  src={FamilyPicture}
                  alt="family image"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={70}
                  placeholder="blur"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
