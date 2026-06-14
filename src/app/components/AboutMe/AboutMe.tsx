"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./AboutMe.module.css";
import Image1 from "./../../../../public/about/ak1.jpg";
import Reveal from "../Reveal/Reveal";

import Link from "next/link";

export default function AboutMe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [-3, 2]);
  const y1 = useTransform(parallax, (value) => `${value}em`);

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={styles.grid}>
        <div className={styles.col1}>
          <div className={styles.imageContainer}>
            <motion.div className={styles.imageWrapper} style={{ y: y1 }}>
              <Image
                src={Image1}
                alt="Andrew Kusakin, fine art documentary wedding photographer based in Boston"
                height={900}
                width={600}
                quality={90}
                title="Andrew Kusakin Photography"
              />
            </motion.div>
          </div>
        </div>
        <Reveal className={styles.col2}>
          <p className={styles.eyebrow}>Behind the Camera</p>
          <h3>
            Hi, I&apos;m <em>Andrew</em>.
          </h3>

          <p className={styles.text}>
            After more than a hundred weddings, I&apos;ve learned where to stand, when to step back, and how to let a day tell its own story. The way I see that story owes as much to cinematography, classical art, and architecture as it does to photography. Some frames I compose with care; most I simply watch for and catch as they happen.
What draws me in is human connection, not only between two people but between them and the families and closest friends who came for them. I love photographing couples who are openly affectionate, the kind who reach and lean and hold on through a long day and never need to be told to look at each other.
I&apos;m based in Boston, and glad to travel through New England and wherever the day leads.
          </p>

          <dl className={styles.stats}>
            <div className={styles.stat}>
              <dt>Weddings documented</dt>
              <dd>100+</dd>
            </div>
            <div className={styles.stat}>
              <dt>Home base</dt>
              <dd>Boston, MA</dd>
            </div>
            <div className={styles.stat}>
              <dt>Coverage</dt>
              <dd>Full day</dd>
            </div>
          </dl>

          <Link href="/about" className={styles.buttonWrapper}>
            <button>Read More</button>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
