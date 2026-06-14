import React from "react";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./outdoor-wedding-ceremony.jpg";
import OverlapImageSrc from "./smith-farm-gardens-wedding-ceremony.jpg";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "../components/ContactForm/ContactForm";
import JsonLd from "../components/JsonLd/JsonLd";

export const metadata: Metadata = {
  title: "Contact | Boston Wedding Photographer | Andrew Kusakin Photography",
  description:
    "Get in touch with Andrew Kusakin Photography. Boston-based wedding, engagement, and portrait photographer serving New England — including Cape Cod, Providence, Newport, and beyond.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Boston Wedding Photographer | Andrew Kusakin Photography",
    description:
      "Get in touch with Andrew Kusakin Photography. Boston-based wedding, engagement, and portrait photographer serving New England — including Cape Cod, Providence, Newport, and beyond.",
    url: "https://www.kusakinphoto.com/contact",
    siteName: "Andrew Kusakin Photography",
    images: [
      {
        url: "https://www.kusakinphoto.com/contact/outdoor-wedding-ceremony.jpg",
        width: 1500,
        height: 1000,
        alt: "Outdoor wedding ceremony photographed by Andrew Kusakin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Boston Wedding Photographer | Andrew Kusakin Photography",
    description:
      "Get in touch with Andrew Kusakin Photography. Boston-based wedding, engagement, and portrait photographer serving New England.",
    images: ["https://www.kusakinphoto.com/contact/outdoor-wedding-ceremony.jpg"],
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
  sameAs: [
    "https://www.instagram.com/kusakinphoto/",
    "https://www.tiktok.com/@kusakinphoto",
    "https://www.pinterest.com/kusakinphoto/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-347-313-5300",
    contactType: "customer service",
    email: "andrew@kusakinphoto.com",
    availableLanguage: "English",
  },
};

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={schema} />

      <SmallHero
        title="Let's Tell Your Story"
        image={HeroImage}
        subtitle="Tell Me About the Day You're Planning"
        alt="A candid wedding moment by Andrew Kusakin, Boston wedding photographer"
      />

      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.imageColumn}>
            <div className={styles.overlapImage}>
              <Image
                src={OverlapImageSrc}
                alt="Wedding ceremony at Smith Farm Gardens photographed by Andrew Kusakin, Boston wedding photographer"
                sizes="(max-width: 767px) 100vw, 40vw"
                quality={85}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <p className={styles.lede}>
              Thank you for being here. Share a little about the two of you and
              the day you&apos;re planning — I&apos;ll personally respond
              within <em>48 hours</em>.
            </p>

            <dl className={styles.details}>
              <div className={styles.detailRow}>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${businessInfo.email}`}>
                    {businessInfo.email}
                  </a>
                </dd>
              </div>
              <div className={styles.detailRow}>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+13473135300">+1 (347) 313-5300</a>
                </dd>
              </div>
              <div className={styles.detailRow}>
                <dt>Based in</dt>
                <dd>Boston, MA — traveling anywhere the story leads</dd>
              </div>
            </dl>

            <p className={styles.note}>
              If you don&apos;t hear back within two days, please peek into
              your spam or promotions folder — sometimes my reply hides there.
            </p>
          </div>

          <div className={styles.formColumn}>
            <div className={styles.formHeader}>
              <p className={styles.eyebrow}>Inquire</p>
              <h2 className={styles.formHeading}>
                Begin <em>your</em> story
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
