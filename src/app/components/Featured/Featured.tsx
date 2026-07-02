"use client";

import React, { useRef } from "react";
import styles from "./Featured.module.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "../Reveal/Reveal";
import HannahKisuk from "./fruitlands-museum-wedding-ceremony-00081.jpg"
import EricaMike from "./white-cliffs-plymouth-wedding-ceremony-00062.jpg"

interface Gallery {
  title: string;
  heroImage: string | StaticImageData;
  smallImage: string;
  link: string;
  location: string;
}

const galleries: Gallery[] = [
  {
    title: "Hannah + Kisuk",
    heroImage: HannahKisuk,
    smallImage: "/weddings/alex-adam/000045.jpg",
    link: "/wedding/hannah-kisuk",
    location: "Fruitlands Museum, Massachusetts",
  },
  {
    title: "Maddy + Alex",
    heroImage: "/weddings/maddy-alex/000130.jpg",
    smallImage: "/weddings/maddy-alex/000050.jpg",
    link: "/wedding/maddy-alex",
    location: "Smith Farm Gardens, Connecticut",
  },
  {
    title: "Erica + Mike",
    heroImage: EricaMike,
    smallImage: "/weddings/amy-charlie/000099.jpg",
    link: "/wedding/erica-mike",
    location: "White Cliffs Country Club, Massachusetts",
  },
];

const customEase = [0.16, 1, 0.3, 1] as const;

function Story({ gallery, index }: { gallery: Gallery; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Image drifts slowly inside its frame as the story scrolls past
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const reverse = index % 2 === 1;

  return (
    <div
      className={`${styles.story} ${reverse ? styles.storyReverse : ""}`}
      ref={ref}
    >
      <Link href={gallery.link} className={styles.storyLink}>
        {/* Main image — unmasked by a rising clip as it enters the viewport */}
        <motion.div
          className={styles.imageFrame}
          initial={{ clipPath: "inset(8% 4% 8% 4%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.4, ease: customEase }}
          viewport={{ once: true, margin: "-15%" }}
        >
          <motion.div className={styles.imageInner} style={{ y }}>
            <Image
              src={gallery.heroImage}
              alt={`${gallery.title} — ${gallery.location}`}
              className={styles.image}
              width={1500}
              height={1000}
              quality={85}
              sizes="(max-width: 767px) 100vw, 62vw"
            />
          </motion.div>
        </motion.div>

        {/* Editorial caption block */}
        <Reveal className={styles.meta} delay={0.15}>
          <span className={styles.index}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.title}>{gallery.title}</h3>
          <p className={styles.location}>{gallery.location}</p>
          <span className={styles.cta}>
            View Story
            <span className={styles.ctaLine} aria-hidden="true"></span>
          </span>
        </Reveal>
      </Link>
    </div>
  );
}

export default function Featured() {
  return (
    <section className={styles.wrapper}>
      <Reveal className={styles.header}>
        <p className={styles.eyebrow}>Selected Work</p>
        <div className={styles.headingRow}>
          <h2 className={styles.heading}>Featured stories</h2>
          <span className={styles.count} aria-hidden="true">
            ({String(galleries.length).padStart(2, "0")})
          </span>
        </div>
      </Reveal>

      <div className={styles.stories}>
        {galleries.map((gallery, index) => (
          <Story key={gallery.title} gallery={gallery} index={index} />
        ))}
      </div>

      <Reveal className={styles.footerLink}>
        <Link href="/portfolio" className={styles.allLink}>
          Browse the full portfolio
          <span className={styles.allLinkLine} aria-hidden="true"></span>
        </Link>
      </Reveal>
    </section>
  );
}
