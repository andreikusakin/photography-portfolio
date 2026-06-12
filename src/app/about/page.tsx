import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Reveal from "../components/Reveal/Reveal";
import Image2 from "./../../../public/about/ak2.jpg";
import Image3 from "./../../../public/about/ak3.jpg";
import Image4 from "./../../../public/about/ak4.jpg";
import Image5 from "./../../../public/about/ak5.jpg";

export const metadata: Metadata = {
  title: "About Andrew Kusakin | Boston Wedding Photographer",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <div>
      <SmallHero
        title="About Me"
        subtitle="Boston Wedding Photographer"
        image={Image2}
      />
      <div className={styles.container}>

        {/* — Intro — */}
        <div className={styles.intro}>
          <Image src={Image3} alt="Andrew Kusakin" className={styles.meImage} />
          <Reveal className={styles.introText}>
            <p className={styles.eyebrow}>Nice to Meet You</p>
            <h2>Hi, I'm Andrew.</h2>
            <p>
              I am Andrew Kusakin, a photographer based in Boston. Having
              documented over a hundred weddings, I choose to focus on full-day
              coverage that honors the scale and arc of the day. My perspective
              balances fine art with a documentary eye, guided by clean
              composition and natural light.
            </p>
            <p>
              I view a wedding as a complete narrative rather than a collection
              of separate moments. By staying present from early morning until
              the final departures, I follow both the prominent milestones and
              the quieter interactions that pass in between.
            </p>
          </Reveal>
        </div>

        {/* — Philosophy — */}
        <div className={styles.philosophyWrapper}>
          <div className={styles.twoCol}>
            <ParallaxImage src={Image5} alt="Andrew Kusakin" width="30em" height="40em" />
            <Reveal className={styles.col}>
              <p className={styles.eyebrow}>Philosophy</p>
              <h2>Cinema, art and classical form</h2>
              <p>
                My visual language is shaped by cinema, classical painting, and
                architecture. The lines of an old building, the deliberate light
                in an old master's canvas, the way a film holds a face in
                frame: these inform how I see a room and how I compose within
                it.
              </p>
              <p>
                The natural world has always been a teacher of light and
                patience. Time in open landscapes and unfamiliar places sharpens
                the eye for the fleeting, for the moment just before something
                shifts, which is exactly where the most honest photographs tend
                to live.
              </p>
            </Reveal>
          </div>
        </div>

        {/* — Perspective — */}
        <div className={styles.perspectiveWrapper}>
          <div className={`${styles.twoCol} ${styles.twoColReverse}`}>
            <Reveal className={styles.col}>
              <p className={styles.eyebrow}>Perspective</p>
              <h2>At the heart of every wedding</h2>
              <p>
                What draws me to this is people: the way two people are with
                each other, and the way that closeness ripples outward to the
                families and friends gathered around them. I am drawn to couples
                who show affection without hesitation, and to the quiet
                exchanges that pass between parents, siblings, and old friends
                across a long day. These are the moments a wedding is really
                made of.
              </p>
            </Reveal>
            <ParallaxImage src={Image4} alt="Andrew Kusakin" width="30em" height="40em" />
          </div>
        </div>

      </div>
      <GetInTouch />
    </div>
  );
}
