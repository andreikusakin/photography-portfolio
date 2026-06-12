import React from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./../../../public/heroPortfolio.jpg";
import { Gallery, travel } from "@/lib/data";
import { weddings, intimateWeddings, couples } from "@/lib/galleries";
import { weddingHighlights } from "./highlightsWedding";
import type { StaticImageData } from "next/image";

import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery";
import Highlights from "../components/Highlights/Highlights";
import Reveal from "../components/Reveal/Reveal";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio Andrew Kusakin | Boston Wedding Photographer",
  alternates: {
    canonical: "/portfolio",
  },
};

const sections = [
  { id: "weddings", label: "Weddings" },
  { id: "intimate", label: "Intimate & Elopements" },
  { id: "couples", label: "Couples" },
  { id: "travel", label: "Travel" },
];

export default function page() {
  return (
    <div className={styles.wrapper}>
      <SmallHero
        image={HeroImage}
        title="Portfolio"
        subtitle="A Collection of Real Moments"
      />

      {/* In-page index — smooth-scrolls to each collection */}
      <nav className={styles.indexNav} aria-label="Portfolio sections">
        {sections.map((section, i) => (
          <React.Fragment key={section.id}>
            {i > 0 && (
              <span className={styles.indexDot} aria-hidden="true">
                ·
              </span>
            )}
            <a href={`#${section.id}`} className={styles.indexLink}>
              {section.label}
            </a>
          </React.Fragment>
        ))}
      </nav>

      <HighlightSection
        eyebrow="Highlights"
        heading={
          <>
            Wedding <em>&</em> Engagement
          </>
        }
        images={weddingHighlights}
        alt="Wedding highlight"
      />

      <PortfolioSection
        id="weddings"
        index="01"
        title={<>Weddings</>}
        description="A documentary approach to wedding photography, rooted in fine art and cinematic in its eye. The photographs hold to the love at the center of the day and the families it brings together. They live in the big moments everyone turns to witness, and just as much in the small ones that pass almost unseen."
        galleries={weddings}
      />
      <PortfolioSection
        id="intimate"
        index="02"
        tone="warm"
        title={
          <>
            Intimate Weddings <em>&</em> Elopements
          </>
        }
        description="A wedding pared back to its center, with only the closest few to share it. The smaller the day, the more its quietest moments come forward. The photographs are documentary by nature, holding to the closeness between two people and the intimacy of a day made just for them."
        galleries={intimateWeddings}
      />
      <PortfolioSection
        id="couples"
        index="03"
        title={<>Couples</>}
        description="An engagement, an anniversary, or no occasion at all: time set aside for two. The session is shaped by movement and ease more than by posing, and the closeness between them leads. The photographs are cinematic and unforced, drawn from the way they already are with each other."
        galleries={couples}
      />

      <TravelSection />
      <GetInTouch />
    </div>
  );
}

function HighlightSection({
  eyebrow,
  heading,
  images,
  alt,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  images: StaticImageData[];
  alt: string;
}) {
  return (
    <div className={styles.highlightSection}>
      <Reveal className={styles.highlightText}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.highlightHeading}>{heading}</h2>
      </Reveal>
      <Reveal delay={0.2}>
        <Highlights images={images} alt={alt} />
      </Reveal>
    </div>
  );
}

function PortfolioSection({
  id,
  index,
  title,
  description,
  galleries,
  tone = "default",
}: {
  id: string;
  index: string;
  title: React.ReactNode;
  description: string;
  galleries: Gallery[];
  tone?: "default" | "warm";
}) {
  return (
    <section
      id={id}
      className={`${styles.section} ${tone === "warm" ? styles.sectionWarm : ""}`}
    >
      <Reveal className={styles.portfolioSection}>
        <p className={styles.eyebrow}>
          {index} — Galleries
        </p>
        <h2 className={styles.sectionHeading}>{title}</h2>
        <div className={styles.description}>{description}</div>
      </Reveal>
      <PortfolioGallery galleries={galleries} />
    </section>
  );
}

function TravelSection() {
  return (
    <section id="travel" className={styles.travel}>
      <Reveal className={styles.travelHeader}>
        <p className={styles.eyebrow}>04 — Personal Work</p>
        <h2 className={styles.sectionHeading}>
          Travel <em>notes</em>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className={styles.description}>
          My love for storytelling extends to the incredible landscapes I
          encounter on my travels. This is a small, personal collection of work
          from adventures in national parks and beyond — moments of quiet awe
          in the face of nature&apos;s beauty. It&apos;s a reminder of the
          amazing world we get to celebrate in.
        </div>
      </Reveal>
      <div className={styles.images}>
        {travel &&
          travel.map((image, index) => (
            <div className={styles.imageContainer} key={index}>
              <Image
                src={image}
                alt={`Travel highlight ${index + 1}`}
                width={1500}
                height={1500}
                quality={85}
              />
            </div>
          ))}
      </div>
    </section>
  );
}
