import React from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./../../../public/heroPortfolio.jpg";
import { Gallery, travel } from "@/lib/data";
import { weddings, intimateWeddings, couples } from "@/lib/galleries";
import { weddingHighlights } from "./highlightsWedding";
import type { StaticImageData } from "next/image";

// import { families, familyHighlights } from "@/lib/data";

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

export default async function page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SmallHero
          image={HeroImage}
          title="Portfolio"
          subtitle="A Collection of Real Moments"
        />
      </div>
      <HighlightSection
        eyebrow="Highlights"
        heading="Wedding & Engagement"
        images={weddingHighlights}
        alt="Wedding highlight"
      />
      <PortfolioSection
        title="weddings"
        subtitle=""
        description="A documentary approach to wedding photography, rooted in fine art and cinematic in its eye. The photographs hold to the love at the center of the day and the families it brings together. They live in the big moments everyone turns to witness, and just as much in the small ones that pass almost unseen."
        galleries={weddings}
      />
            <PortfolioSection
        title="Intimate Weddings & Elopements"
        subtitle=""
        description="A wedding pared back to its center, with only the closest few to share it. The smaller the day, the more its quietest moments come forward. The photographs are documentary by nature, holding to the closeness between two people and the intimacy of a day made just for them."
        galleries={intimateWeddings}
      />
      <PortfolioSection
        title="couples"
        subtitle=""
        description="An engagement, an anniversary, or no occasion at all: time set aside for two. The session is shaped by movement and ease more than by posing, and the closeness between them leads. The photographs are cinematic and unforced, drawn from the way they already are with each other."
        galleries={couples}
      />
      {/* <PortfolioSection
        title="family"
        subtitle=""
        description="Preserving the beautiful, fleeting moments of your family life. From playful chaos to quiet cuddles and everyday adventures, these sessions are about capturing your family's genuine interactions, unique personalities, and the honest connections that bind you, all in a relaxed, documentary style."
        highlights={familyHighlights}
        galleries={families}
      /> */}
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
  heading: string;
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
  title,
  subtitle,
  description,
  galleries,
}: {
  title: string;
  subtitle: string;
  description: string;
  galleries: Gallery[];
}) {
  return (
    <div
      style={{
        backgroundColor:
          title === "Intimate Weddings & Elopements"
            ? "var(--color-button)"
            : "var(--color-background)",
      }}
      className={styles.section}
    >
      <Reveal className={styles.portfolioSection}>
        <h2>{title}</h2>
        <div>{subtitle}</div>
        <div className={styles.description}>{description}</div>
      </Reveal>
      <PortfolioGallery galleries={galleries} />
    </div>
  );
}

async function TravelSection() {

  return (
    <div className={styles.travel}>
      <Reveal>
        <h2>Travel</h2>
      </Reveal>
      <Reveal delay={0.15}>
        <div className={styles.description}>
        My love for storytelling extends to the incredible landscapes I encounter on my travels. This is a small, personal collection of work from adventures in national parks and beyond—moments of quiet awe in the face of nature's beauty. It’s a reminder of the amazing world we get to celebrate in.
        </div>
      </Reveal>
      <div className={styles.images}>
        {travel &&
          travel.map((image, index) => (
            <div className={styles.imageContainer} key={index}>
              <Image
                key={index}
                src={image}
                alt={`Travel highlight ${index + 1}`}
                width={1500}
                height={1500}
                quality={85}
                layout="responsive"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
