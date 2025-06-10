"use client";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Intro.module.css";
import Link from "next/link";

import { motion, useScroll, useTransform } from "motion/react";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallax1 = useTransform(scrollYProgress, [0, 1], [-5, 2]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [-10, 2]);

  const y1 = useTransform(parallax1, (value) => `${value}em`);
  const y2 = useTransform(parallax2, (value) => `${value}em`);

  return (
    <section className={styles.wrapper} ref={containerRef}>
      <div className={styles.grid}>
        <div className={styles.col1}>
          <motion.div
            className={styles.row}
            style={{
              y: y1,
            }}
            initial={{ opacity: 0, filter: "blur(1em)", y: "0.5em" }}
            whileInView={{ opacity: 1, filter: "blur(0em)", y: "0em" }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://fta1tprpvqpelfot.public.blob.vercel-storage.com/weddings/veronica-joseph/000011-2wd8bFINIlalmyrxoMLKBgJtrChWma.jpg"
              className={styles.image}
              width={600}
              height={900}
              alt="Wedding Photography Boston, Massachusetts"
              title="Wedding Photo"
            />
          </motion.div>
          <motion.div
            className={styles.row}
            style={{
              y: y2,
            }}
            initial={{ opacity: 0, filter: "blur(1em)", y: "0.5em" }}
            whileInView={{ opacity: 1, filter: "blur(0em)", y: "0em" }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://fta1tprpvqpelfot.public.blob.vercel-storage.com/weddings/veronica-joseph/000013-fvJgebAm5t9cQmUK32CAXStjektsXY.jpg"
              alt="Wedding Photography Boston, Massachusetts"
              title="Wedding Photo"
              className={styles.image}
              width={600}
              height={900}
            />
          </motion.div>
        </div>
        <motion.div
          className={styles.col2}
          initial={{ opacity: 0, filter: "blur(1em)", y: "0.5em" }}
          whileInView={{ opacity: 1, filter: "blur(0em)", y: "0em" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2>
              Your Love Story, <br /> Told Honestly
            </h2>
          </div>

          <div className={styles.description}>
            I focus on real moments, documenting the genuine laughter, happy
            tears, and quiet glances of your wedding day as they truly happen.
            From the softest touch and intimate details to the big, joyful
            moments and all the party fun, no detail is missed – everything is
            captured with authenticity, just the way it felt.
          </div>

          <div>
            <Link href="/portfolio">
              <button className={styles.button}>Browse Portfolio</button>
            </Link>
          </div>
        </motion.div>
        <div className={styles.col3}>
          <motion.div
            className={styles.row}
            style={{
              y: y1,
            }}
            initial={{ opacity: 0, filter: "blur(1em)", y: "0.5em" }}
            whileInView={{ opacity: 1, filter: "blur(0em)", y: "0em" }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://fta1tprpvqpelfot.public.blob.vercel-storage.com/weddings/alex-adam/000048-aXUQ0UFvCQULPrx2z48c5OsBtOHRim.jpg"
              alt="Wedding Photography Boston, Massachusetts"
              title="Wedding Photo"
              className={styles.image}
              width={600}
              height={900}
            />
          </motion.div>
          <motion.div
            className={styles.row}
            style={{
              y: y2,
            }}
            initial={{ opacity: 0, filter: "blur(1em)", y: "0.5em" }}
            whileInView={{ opacity: 1, filter: "blur(0em)", y: "0em" }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://fta1tprpvqpelfot.public.blob.vercel-storage.com/weddings/alex-adam/000044-ean267F0hfGbYdcx97QjC5XIE6d4GN.jpg"
              alt="Wedding Photography Boston, Massachusetts"
              title="Wedding Photo"
              className={styles.image}
              width={600}
              height={900}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
