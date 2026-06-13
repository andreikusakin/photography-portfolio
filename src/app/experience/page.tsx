import React from "react";
import styles from "./page.module.css";
import type { Metadata } from "next";

import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./../../../public/weddings/alex-adam/000033.jpg";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Reveal from "../components/Reveal/Reveal";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Faq from "../components/Faq/Faq";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Experience | Boston Wedding Photographer",
  alternates: {
    canonical: "/experience",
  },
};

const triptych = [
  { src: "/weddings/valerie-joseph/000035.jpg", alt: "Candid wedding moment" },
  { src: "/weddings/erin-kyle/000101.jpg", alt: "Documentary wedding photograph" },
  { src: "/weddings/amy-charlie/000032.jpg", alt: "Quiet glance between a couple" },
];

export default function page() {
  return (
    <div>
      <SmallHero
        image={HeroImage}
        title="The Experience"
        subtitle="Fine Art Documentary Wedding Photography"
      />

      {/* Opening statement — cinematic dark band */}
      <section className={styles.opening}>
        <div className={styles.openingHead}>
          <Reveal>
            <p className={styles.eyebrow}>A Documentary Approach</p>
            <h2 className={styles.openingHeading}>
              Be present.
              <br />
              I'll capture <em>everything.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal className={styles.openingText} delay={0.1}>
          <p>
            A wedding day is a celebration, not a photoshoot. My documentary
            approach is built around that: by following the day as it unfolds, I
            let you stay inside it, present with the people you love rather than
            aware of a camera. The photographs come from the day itself — the
            laughter and the quiet glances alike — holding not only how it
            looked but how it felt.
          </p>
        </Reveal>

        <div className={styles.triptych}>
          {triptych.map((img) => (
            <div key={img.src} className={styles.triptychItem}>
              <ParallaxImage
                src={img.src}
                alt={img.alt}
                width="22em"
                height="30em"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Full-day coverage — warm band */}
      <section className={`${styles.feature} ${styles.featureWarm}`}>
        <div className={styles.featureInner}>
          <div className={styles.featureImage}>
            <ParallaxImage
              src="/weddings/maddy-alex/000019.jpg"
              alt="Full-day wedding coverage"
              width="32em"
              height="42em"
            />
          </div>
          <Reveal className={styles.featureBody}>
            <p className={styles.eyebrow}>Full-Day Coverage</p>
            <h2 className={styles.featureHeading}>
              Your story <em>without a clock</em>
            </h2>
            <p className={styles.featureText}>
              I cover weddings for the full day, never by the hour. Telling the
              story of a day means being there for the length of it, which
              leaves no clock to watch and no timeline bent around the
              photography. There is nothing to rush and nothing to squeeze in.
              From the first quiet hours of the morning to the last song of the
              night, the whole day has room to unfold, and I photograph it as it
              does.
            </p>
            <Link href="/pricing" className={styles.button}>
              View Pricing
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Guidance & care */}
      <section className={styles.feature}>
        <div className={`${styles.featureInner} ${styles.featureReverse}`}>
          <div className={styles.featureImage}>
            <ParallaxImage
              src="/couples/alina-brandon/000017.jpg"
              alt="A relaxed, candid couple session"
              width="32em"
              height="42em"
            />
          </div>
          <Reveal className={styles.featureBody}>
            <p className={styles.eyebrow}>Guidance &amp; Care</p>
            <h2 className={styles.featureHeading}>
              Help <em>whenever you need it</em>
            </h2>
            <p className={styles.featureText}>
              I like to know the couples I photograph, to whatever degree feels
              comfortable, and from our first conversation onward I stay easy to
              reach. Consultations are unlimited, and no question is too small —
              whether it is about timelines, light, or how a part of the day
              might flow. When you have a planner, much of the logistics sit
              with them, and I'm glad to add my experience wherever it helps.
            </p>
            <p className={styles.featureText}>
              I also share a series of wedding guides, drawn from more than a
              hundred weddings, covering the parts of the day where my
              perspective as a photographer tends to make things easier. Beyond
              photography, I'm passionate about classic men's tailoring, and I
              love helping grooms put their wedding looks together.
            </p>
          </Reveal>
        </div>
      </section>

      <GetInTouch />
      <Faq />
    </div>
  );
}
