"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import AlinaBrandon from "./../../../../public/couples/alinabrandon/17.jpg";
import RoxanaKanstantin from "./../../../../public/couples/roxanakonstantin/18.jpg";
import ChristiAdam from "./../../../../public/wedding/christiadam/19.jpg";
import MarissaMichael from "./../../../../public/wedding/marissamichael/27.jpg";
import ValerieJoseph from "./../../../../public/wedding/valeriejoseph/5.jpg"; // 18
import VeronicaJoseph from "./../../../../public/wedding/veronicajoseph/52.jpg";
import OrbreyBrett from "./../../../../public/wedding/orbreybrett/11.jpg";
import JessicaGeorge from "./../../../../public/wedding/jessicageorge/18.jpg";
import { motion, useScroll, useTransform } from "motion/react";

const images = [
  {
    src: JessicaGeorge,
    alt: "Jessica and George wedding photography at Granite Links in Quincy, Massachusetts",
    name: "Jessica + George",
  },
  {
    src: VeronicaJoseph,
    alt: "Veronica and Joseph wedding photography at Harborside Hotel in Bar Harbor, Maine",
    name: "Veronica + Joseph",
  },
  {
    src: OrbreyBrett,
    alt: "Orbrey and Brett wedding photography at Shepherd's Run in South Kingston, Rhode Island",
    name: "Orbrey + Brett",
  },
  {
    src: AlinaBrandon,
    alt: "Alina and Brandon's couple photography session at Borderland State Park in North Easton, Massachusetts",
    name: "Alina + Brandon",
  },
  {
    src: ValerieJoseph,
    alt: "Valerie and Joseph wedding photography at The Bart At Gibblet Hill in Groton, Massachusetts",
    name: "Valerie + Joseph",
  },

  {
    src: RoxanaKanstantin,
    alt: "Roxana and Kanstantin's couple photography session at Raffles Hotel in Boston, Massachusetts",
    name: "Roxana + Kanstantin",
  },
  {
    src: ChristiAdam,
    alt: "Christi and Adam weddinng photograph at Seaport in Boston, Massachusetts",
    name: "Christi + Adam",
  },
  {
    src: MarissaMichael,
    alt: "Marissa and Michael wedding photography at Granite Links in Quincy, Massachusetts",
    name: "Marissa + Michael",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textEmY = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const imageEmY = useTransform(scrollYProgress, [0, 1], [-3, 10]);

  const textY = useTransform(textEmY, (value) => `${value}em`);
  const imageY = useTransform(imageEmY, (value) => `${value}em`);

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={styles.container} ref={containerRef}>
      <motion.div className={styles.heroImagesWrapper}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`${styles.heroImage} ${
              index === currentIndex ? styles.active : ""
            }`}
            style={{ y: imageY }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              title={image.name}
              width={1500}
              height={1000}
              style={{ objectFit: "cover", objectPosition: "top" }}
              quality={90}
              placeholder="blur"
              priority={index === 0 ? true : false}
            />
          </motion.div>
        ))}
        {/* <motion.div
          className={styles.heroImage}
          style={{ y: imageY }}
          initial={{ opacity: 1 }}
        >
          <Image
            src={JessicaGeorge}
            alt={images[7].alt}
            title={images[7].name}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            quality={90}
            placeholder="blur"
            priority
          />
        </motion.div> */}
      </motion.div>

      <motion.div
        className={styles.heroTextWrapper}
        style={{ y: textY }}
        initial={{ opacity: 0, filter: "blur(0.5em)", y: "0.5rem" }}
        whileInView={{ opacity: 1, filter: "blur(0em)", y: "0em" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <div className={styles.heroText}>
          <h1>Capturing Your Day</h1>
          <h1>As It Truly Happens</h1>
          <h1>
            Documentary Wedding Photography for Couples in Love – Boston &
            Beyond
          </h1>
        </div>
      </motion.div>
      <motion.div className={styles.explore}>
        {/* <div className={styles.exploreContent}>
          Explore
          <div className={styles.arrowContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.arrowDown}
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </div> */}
      </motion.div>
    </section>
  );
}
