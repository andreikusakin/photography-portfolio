"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import styles from "./Experience.module.css";
import Reveal from "../Reveal/Reveal";

const customEase = [0.16, 1, 0.3, 1] as const;

/** Numbered editorial process — each movement paired with a photograph,
 *  middle column staggered for rhythm. Structurally distinct from the
 *  portrait-led AboutMe above and the quote-led Kind Words below. */
const steps = [
  {
    title: "A calming presence",
    text: "I guide each story with a calming presence, creating an environment where you and the people you love feel at ease and open — because that is when images reveal true emotion.",
    image: "/weddings/alyssa-jonathan/000010.jpg",
    alt: "A couple walking hand in hand, at ease during their wedding day",
  },
  {
    title: "Less posing, more living",
    text: "A documentary approach means less time performing for a camera and more time inside the day itself — with your people, not with a shot list.",
    image: "/weddings/erin-kyle/000050.jpg",
    alt: "A bride and groom caught mid-stride in a candid moment",
  },
  {
    title: "An honest gallery",
    text: "What you keep is a gallery of honest photographs — the look, the laugh, the held hand — that feels unmistakably like you.",
    image: "/weddings/amy-charlie/000090.jpg",
    alt: "A first dance surrounded by the wedding party",
  },
];

export default function Experience() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <p className={styles.eyebrow}>What to Expect</p>
          <h3 className={styles.heading}>The Experience</h3>
        </Reveal>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.title} className={styles.step}>
              <motion.div
                className={styles.imageFrame}
                initial={{ clipPath: "inset(8% 4% 8% 4%)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{
                  duration: 1.4,
                  ease: customEase,
                  delay: 0.15 * i,
                }}
                viewport={{ once: true, margin: "-15%" }}
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 991px) 100vw, 30vw"
                  className={styles.image}
                />
              </motion.div>

              <Reveal className={styles.stepBody} delay={0.15 * i}>
                <span className={styles.index}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepText}>{step.text}</p>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal className={styles.ctaRow} delay={0.3}>
          <Link href="/experience" className={styles.cta}>
            More about the experience
            <span className={styles.ctaLine} aria-hidden="true"></span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
