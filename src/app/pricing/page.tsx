import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import HeroImage from "./../../../public/weddings/erin-kyle/000067.jpg";
import IntimateImage from "./../../../public/weddings/alyssa-jonathan/000066.jpg";
import FullDayImage from "./../../../public/weddings/alex-adam/000045.jpg";
import EngagementPhoto from "./../../../public/couples/alina-brandon/000017.jpg";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import Reveal from "../components/Reveal/Reveal";
import Faq from "../components/Faq/Faq";

export const metadata: Metadata = {
  title: "Pricing | Boston Wedding Photographer",
  alternates: {
    canonical: "/pricing",
  },
};

type Package = {
  index: string;
  eyebrow: string;
  title: string;
  blurb: string;
  includes?: { label: string; text: string }[];
  note?: string;
  priceLabel: string;
  price: string;
  image: typeof HeroImage;
  alt: string;
  reverse?: boolean;
};

const packages: Package[] = [
  {
    index: "01",
    eyebrow: "The Complete Story",
    title: "Full-Day Wedding",
    blurb:
      "Perfect for larger weddings (30+ guests) where you want the full narrative of your day captured without having to watch the clock. This is my signature offering, designed to document every chapter of your celebration, from the quiet moments of getting ready to the wild energy of the last dance.",
    includes: [
      {
        label: "Full-Day Coverage",
        text: "Ideal for celebrations lasting 6 hours or more. I'm with you for the entire journey — no timelines built around photography, no stress about running out of time. Just pure celebration.",
      },
      {
        label: "Second Photographer",
        text: "A second storyteller to capture more angles, more candid moments, and a richer, more complete view of your day.",
      },
      {
        label: "Complementary Engagement Session",
        text: "Our chance to connect, have fun, and get you both comfortable in front of the camera before the big day. It makes a world of difference.",
      },
      {
        label: "Online Gallery",
        text: "A beautiful, high-resolution online gallery of your edited images, ready to be downloaded, shared, and printed.",
      },
    ],
    priceLabel: "Investment",
    price: "$5,000",
    image: FullDayImage,
    alt: "Full-day wedding photography",
  },
  {
    index: "02",
    eyebrow: "Intimate",
    title: "Weddings & Elopements",
    blurb:
      "Perfect for city hall ceremonies, adventurous elopements, or smaller celebrations with your closest loved ones (up to 30 guests). This package is designed to capture the heart of your intimate day with the same candid, documentary style.",
    includes: [
      {
        label: "Up to 4 Hours of Coverage",
        text: "Ideal for capturing your ceremony, portraits, and the key moments of your celebration.",
      },
      {
        label: "One Photographer (Me)",
        text: "I'll be there personally to document your story.",
      },
      {
        label: "Online Gallery",
        text: "Your beautiful, high-resolution online gallery of edited images.",
      },
    ],
    priceLabel: "Investment",
    price: "$2,000",
    image: IntimateImage,
    alt: "Intimate wedding and elopement photography",
    reverse: true,
  },
  {
    index: "03",
    eyebrow: "Just the Two of You",
    title: "Engagement & Couple Sessions",
    blurb:
      "Let's celebrate your connection. Whether it's for your engagement, an anniversary, or just because, these sessions are relaxed, fun, and focused on capturing you as you truly are. We'll find a beautiful spot, put on some music, and create authentic portraits that feel like you.",
    note: "An engagement session is already included in the Full-Day Wedding package.",
    priceLabel: "Starting at",
    price: "$500",
    image: EngagementPhoto,
    alt: "Engagement and couple session photography",
  },
];

const travelDetails = [
  {
    label: "Massachusetts & Rhode Island",
    text: "No travel fees, period. If you're getting married anywhere in Massachusetts or Rhode Island, I'm there — no extra cost.",
  },
  {
    label: "Rest of New England",
    text: "For weddings in Connecticut, Maine, New Hampshire, or Vermont, there are no travel fees for venues within 100 miles of Boston.",
  },
  {
    label: "Beyond New England",
    text: "I love to travel. For weddings outside of New England, I provide a simple, all-inclusive custom travel quote so there are no surprises.",
  },
  {
    label: "Fine Art Albums",
    text: "Your photos deserve to be held. I offer beautiful, custom-designed fine art albums that turn your digital gallery into a timeless family heirloom. Please inquire for album pricing.",
  },
];

export default function page() {
  return (
    <div>
      <SmallHero
        title="Pricing"
        subtitle="Boston Wedding Photographer"
        image={HeroImage}
        alt="A fine art wedding portrait by Andrew Kusakin, Boston wedding photographer"
      />

      <div className={styles.container}>
        <Reveal className={styles.intro}>
          <p className={styles.eyebrow}>The Investment</p>
          <h2 className={styles.introHeading}>Simple, honest pricing</h2>
          <p className={styles.introText}>
            My goal is to keep things simple and transparent. No hidden fees, no
            confusing packages — just a clear breakdown of my offerings so you
            can find what's right for your wedding day. The focus should be on
            your celebration, not on complicated contracts.
          </p>
          <p className={styles.priceNote}>
            Prices below are for 2026 and 2027 weddings. For 2028 dates, please
            inquire.
          </p>
        </Reveal>

        <section className={styles.packages}>
          {packages.map((pkg) => (
            <article
              key={pkg.index}
              className={`${styles.package} ${
                pkg.reverse ? styles.packageReverse : ""
              }`}
            >
              <div className={styles.packageImage}>
                <ParallaxImage
                  src={pkg.image}
                  width="32em"
                  height="44em"
                  alt={pkg.alt}
                />
              </div>

              <Reveal className={styles.packageBody}>
                <div className={styles.packageHead}>
                  <span className={styles.packageIndex}>{pkg.index}</span>
                  <span className={styles.packageEyebrow}>{pkg.eyebrow}</span>
                </div>

                <h3 className={styles.packageTitle}>{pkg.title}</h3>
                <p className={styles.packageBlurb}>{pkg.blurb}</p>

                {pkg.includes && (
                  <ul className={styles.includes}>
                    {pkg.includes.map((item) => (
                      <li key={item.label} className={styles.includeItem}>
                        <span className={styles.includeLabel}>
                          {item.label}
                        </span>
                        <span className={styles.includeText}>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {pkg.note && <p className={styles.packageNote}>{pkg.note}</p>}

                <div className={styles.price}>
                  <span className={styles.priceLabel}>{pkg.priceLabel}</span>
                  <span className={styles.priceValue}>{pkg.price}</span>
                </div>

                <Link href="/contact" className={styles.packageCta}>
                  Check your date
                  <span className={styles.packageCtaLine} aria-hidden="true"></span>
                </Link>
              </Reveal>
            </article>
          ))}
        </section>
      </div>

      <section className={styles.details}>
        <Reveal className={styles.detailsInner}>
          <p className={styles.detailsEyebrow}>The Fine Print</p>
          <h2 className={styles.detailsHeading}>
            Travel &amp; other details
          </h2>
          <ul className={styles.detailsList}>
            {travelDetails.map((item) => (
              <li key={item.label} className={styles.detailsItem}>
                <span className={styles.detailsLabel}>{item.label}</span>
                <span className={styles.detailsText}>{item.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Faq />
      <GetInTouch />
    </div>
  );
}
