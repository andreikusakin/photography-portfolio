import React from "react";
import styles from "./page.module.css";
import type { Metadata } from "next";

import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./../../../public/weddings/alex-adam/000033.jpg";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Reveal from "../components/Reveal/Reveal";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Faq from "../components/Faq/Faq";
import DayTimeline from "./DayTimeline";
import Opening from "./Opening";

export const metadata: Metadata = {
  title: "The Experience | Boston Wedding Photographer",
  alternates: {
    canonical: "/experience",
  },
};

export default function page() {
  return (
    <div>
      <SmallHero
        image={HeroImage}
        title="The Experience"
        subtitle="Fine Art Documentary Wedding Photography"
        alt="A candid documentary moment from a wedding day, photographed by Andrew Kusakin"
      />

      {/* Opening statement — cinematic overlapping spread */}
      <Opening />

      {/* The signature device: the wedding day as a scroll-driven timeline */}
      <DayTimeline />

      {/* Guidance & care — warm editorial ledger */}
      <section className={styles.guidance}>
        <div className={styles.guidanceInner}>
          <div className={styles.guidanceLeft}>
            <Reveal className={styles.guidanceHeader}>
              <p className={styles.eyebrow}>Guidance &amp; Care</p>
              <h2 className={styles.guidanceHeading}>
                Help whenever you need it
              </h2>
              <p className={styles.guidanceLede}>
                From our first conversation to the final gallery, I stay easy
                to reach.
              </p>
            </Reveal>
            <div className={styles.guidanceImage}>
              <ParallaxImage
                src="/couples/alina-brandon/000017.jpg"
                alt="A relaxed, candid couple session"
                width="26em"
                height="32em"
              />
            </div>
          </div>

          <div className={styles.ledger}>
            {[
              {
                label: "Unlimited consultations",
                text: "Consultations are unlimited, and no question is too small. I like to know the couples I photograph, to whatever degree feels comfortable.",
              },
              {
                label: "Timelines & logistics",
                text: "Whether it's timelines, light, or how a part of the day might flow, I'm glad to add my experience wherever it helps. When you have a planner, much of the logistics sit with them.",
              },
              {
                label: "Wedding guides",
                text: "A series of guides drawn from more than a hundred weddings, covering the parts of the day where a photographer's perspective tends to make things easier.",
              },
              {
                label: "Groom style",
                text: "Beyond photography, I'm passionate about classic men's tailoring — and I love helping grooms put their wedding looks together.",
              },
            ].map((item, i) => (
              <Reveal
                key={item.label}
                className={styles.ledgerItem}
                delay={0.1 * i}
              >
                <span className={styles.ledgerLabel}>{item.label}</span>
                <p className={styles.ledgerText}>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Faq />
      <GetInTouch />
    </div>
  );
}
