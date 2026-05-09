import React from "react";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./000005.jpg";
import styles from "./page.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import JsonLd from "../components/JsonLd/JsonLd";
import OverlapImage from "./OverlapImage";

export const metadata: Metadata = {
  title: "Contact | Boston Wedding Photographer | Andrew Kusakin Photography",
  description:
    "Get in touch with Andrew Kusakin Photography. Boston-based wedding, engagement, and portrait photographer serving New England — including Cape Cod, Providence, Newport, and beyond.",
  alternates: {
    canonical: "/contact",
  },
};

const businessInfo = {
  name: "Andrew Kusakin Photography",
  address: {
    city: "Boston",
    state: "MA",
  },
  phone: "347.313.5300",
  email: "andrew@kusakinphoto.com",
  website: "https://www.kusakinphoto.com",
  areaServed: [
    "Boston, MA",
    "Cambridge, MA",
    "Cape Cod, MA",
    "The Berkshires, MA",
    "Hartford, CT",
    "Providence, RI",
    "Newport, RI",
    "Portsmouth, NH",
    "Portland, ME",
    "New England",
  ],

  geo: {
    latitude: "42.3601",
    longitude: "-71.0589",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Photographer"],
  name: businessInfo.name,
  description:
    "Boston-based wedding, engagement, and portrait photographer serving New England including Cape Cod, Providence, Newport, and beyond.",
  telephone: businessInfo.phone,
  email: businessInfo.email,
  url: businessInfo.website,
  address: {
    "@type": "PostalAddress",
    addressLocality: businessInfo.address.city,
    addressRegion: businessInfo.address.state,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessInfo.geo.latitude,
    longitude: businessInfo.geo.longitude,
  },
  areaServed: businessInfo.areaServed.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  serviceType: [
    "Wedding Photography",
    "Engagement Photography",
    "Portrait Photography",
    "Family Photography",
    "Event Photography",
  ],
};

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={schema} />

      <SmallHero
        title="GET IN TOUCH"
        image={HeroImage}
        subtitle=""
      />

      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.imageColumn}>
            <div className={styles.overlapImage}>
              <OverlapImage
                src="https://res.cloudinary.com/dkmeqvprr/image/upload/000077_ilqmmh"
                alt="Andrew Kusakin Photography"
              />
            </div>
            <p className={styles.imageCaption}>
              Thanks for getting in touch! I&apos;ll personally respond within 48 hours.
              You may also reach out directly via{" "}
              <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            </p>
          </div>

          <div className={styles.formColumn}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
