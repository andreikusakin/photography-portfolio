import React from "react";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./../../../public/weddings/valerie-joseph/000005.jpg";
import styles from "./page.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
import JsonLd from "../components/JsonLd/JsonLd"; 

export const metadata: Metadata = {
  title: "Contact | Boston Wedding Photographer | Andrew Kusakin Photography",
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
  phone: "(347) 313-5300",
  email: "kusakinphoto@gmail.com",
  website: "https://www.kusakinphoto.com",
  areaServed: [
    "Boston, MA",
    "Cambridge, MA",
    "Cape Cod, MA",
    "The Berkshires, MA",
    "Harford, CT",
    "Providance, RI",
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
  "@type": "Photographer",
  name: businessInfo.name,
  image: businessInfo.website + "/path/to/your/professional/headshot.jpg",
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
};

export default function ContactPage() {
  return (
    <div>
      <JsonLd data={schema} />

      <SmallHero
        title="Let's Tell Your Story"
        image={HeroImage}
        subtitle="Ready to start your next special day? Get in touch to discuss your wedding details and start planning your dream day."
      />

      <div className={styles.container}>
        <div className={styles.intro}>
          <p>
            I would be honored to hear about your plans. Whether you're looking
            for a <strong>documentary wedding photographer in Boston</strong>,
            planning an <strong>engagement session on Cape Cod</strong>, or want
            to capture your family's story anywhere in{" "}
            <strong>New England</strong>, please reach out. Fill out the form
            below with a few details, and I'll get back to you within 48 hours
            to schedule a chat. Let's create something timeless together.
          </p>
        </div>

        <div className={styles.contactGrid}>
          <ContactForm />

          <div className={styles.contactInfo}>
            <h3>Contact Details</h3>
            <p>
              <strong>{businessInfo.name}</strong>
              <br />
              {businessInfo.address.city}, {businessInfo.address.state} <br />
              <a href={`tel:${businessInfo.phone}`}>{businessInfo.phone}</a>
              <br />
              <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            </p>

            <h3>Service Areas</h3>
            <ul>
              {businessInfo.areaServed.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94358.3310110482!2d-71.13348204249843!3d42.35543494187203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1678886666666!5m2!1sen!2sus"
                width="200"
                height="150"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map of Boston, MA"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
