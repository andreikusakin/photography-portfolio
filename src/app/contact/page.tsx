import React from "react";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./000005.jpg";
import styles from "./page.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import JsonLd from "../components/JsonLd/JsonLd"; 

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
        {/* <div className={styles.intro}>
          <p>
            I would be honored to hear about your plans. Whether you're looking
            for a <strong>documentary wedding photographer in Boston</strong>,
            planning an <strong>engagement session on Cape Cod</strong>, or want
            to capture your family's story anywhere in{" "}
            <strong>New England</strong>, please reach out. Fill out the form
            below with a few details, and I'll get back to you within 48 hours
            to schedule a chat. Let's create something timeless together.
          </p>
        </div> */}

        <div className={styles.contactInfo}>
          <div className={styles.contactCol}>
            <span>{businessInfo.name}</span>
            <span>{businessInfo.address.city}, {businessInfo.address.state}</span>
          </div>
          <div className={styles.contactCol}>
            <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
            <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
          </div>
        </div>

        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
