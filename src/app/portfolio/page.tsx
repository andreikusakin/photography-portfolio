import React from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./../../../public/heroPortfolio.jpg";
import { weddings, weddingHighlights, Gallery, Highlight } from "@/lib/data";
import { couples, couplesHighlights } from "@/lib/data";
// import { families, familyHighlights } from "@/lib/data";

import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Portfolio Andrew Kusakin | Boston Wedding Photographer",
  alternates: {
    canonical: "/portfolio",
  },
};
import { list } from "@vercel/blob";

export default async function page() {
  // const { blobs } = await list({ prefix: "weddings/maddy-alex/"});


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <SmallHero
          image={HeroImage}
          title="Portfolio"
          subtitle="A Collection of Real Moments"
        />
      </div>
      <PortfolioSection
        title="weddings"
        subtitle=""
        description="Your wedding isn’t just a series of events; it’s one continuous story filled with emotion. My documentary approach means I’m there for it all—from the quiet anticipation of getting ready to the wild energy of the dance floor. I focus on capturing the unscripted moments and genuine interactions that truly define your day, creating a timeless gallery you'll cherish forever."
        highlights={weddingHighlights}
        galleries={weddings}
      />
      <PortfolioSection
        title="couples"
        subtitle=""
        description="Whether it’s for your engagement, an anniversary, or just because, these sessions are all about the two of you. Forget stiff, awkward poses. We’ll find a beautiful spot, put on some music, and create a relaxed space where you can simply be yourselves. The result is a set of photos that genuinely reflects your unique bond and the fun you have together."
        highlights={couplesHighlights}
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
    </div>
  );
}

function PortfolioSection({
  title,
  subtitle,
  description,
  highlights,
  galleries,
}:
  {
    title: string;
    subtitle: string;
    description: string;
    highlights: Highlight[];
    galleries: Gallery[];
  }
) {
  return (
    <div
      style={{
        backgroundColor:
          title === "couples"
            ? "var(--color-button)"
            : "var(--color-background)",
      }}
      className={styles.section}
    >
      <div className={styles.portfolioSection}>
        <h2>{title}</h2>
        <div>{subtitle}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <PortfolioGallery
        galleries={galleries}
        highlights={highlights}
      />
    </div>
  );
}

async function TravelSection() {
  const { blobs } = await list({ prefix: "travel/" });
  const travelImages = blobs.filter((blob) => blob.url.endsWith(".jpg")).map((blob) => blob.url);

  return (
    <div className={styles.travel}>
      <h2>Travel</h2>
      <div className={styles.description}>
      My love for storytelling extends to the incredible landscapes I encounter on my travels. This is a small, personal collection of work from adventures in national parks and beyond—moments of quiet awe in the face of nature's beauty. It’s a reminder of the amazing world we get to celebrate in.
      </div>
      <div className={styles.images}>
        {travelImages &&
          travelImages.map((image, index) => (
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
