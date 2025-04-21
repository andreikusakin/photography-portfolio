"use client";
import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Intro.module.css";
import Link from "next/link";
import Image1 from "./../../../../public/wedding/veronicajoseph/11.jpg";
import Image2 from "./../../../../public/wedding/veronicajoseph/13.jpg";
import Image3 from "./../../../../public/wedding/jessicageorge/11.jpg";
import Image4 from "./../../../../public/wedding/marissamichael/26.jpg";

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
            initial={{ opacity: 0, filter: "blur(1em)", y: '0.5em'  }}
            whileInView={{ opacity: 1, filter: "blur(0em)", y: '0em' }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={Image1}
              alt=""
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
            initial={{ opacity: 0, filter: "blur(1em)", y: '0.5em'  }}
            whileInView={{ opacity: 1, filter: "blur(0em)", y: '0em' }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={Image2}
              alt=""
              className={styles.image}
              width={600}
              height={900}
            />
          </motion.div>
        </div>
        <motion.div className={styles.col2}
          initial={{ opacity: 0, filter: "blur(1em)", y: '0.5em'  }}
          whileInView={{ opacity: 1, filter: "blur(0em)", y: '0em' }}
          transition={{ duration: 0.5 }}
        >
          <div
          >
            <h2>Your Wedding Story,</h2>
            <h2>Told Honestly</h2>
          </div>

          <div 
            className={styles.description}

          >
            Forget stiff poses. I document the genuine laughter, happy tears,
            and quiet glances of your wedding day as they truly happen.
            Authentic, emotional, unobtrusive photography for couples who want
            to remember how it felt.
          </div>
          
          <div
          >
            <Link href="/portfolio">
              <button className={styles.button}>Explore Portfolio</button>
            </Link>
          </div>
        </motion.div>
        <div className={styles.col3}>
          <motion.div
            className={styles.row}
            style={{
              y: y1,
            }}
            initial={{ opacity: 0, filter: "blur(1em)", y: '0.5em'  }}
            whileInView={{ opacity: 1, filter: "blur(0em)", y: '0em' }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={Image3}
              alt=""
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
            initial={{ opacity: 0, filter: "blur(1em)", y: '0.5em'  }}
            whileInView={{ opacity: 1, filter: "blur(0em)", y: '0em' }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={Image4}
              alt=""
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
