import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import LenisScroll from "./components/LenisScroll/LenisScroll";
import JsonLd from "./components/JsonLd/JsonLd";

export const metadata: Metadata = {

  title: "Boston Wedding Photographer | Andrew Kusakin Photography",

  description:
    "Boston-based wedding photographer Andrew Kusakin captures authentic, candid moments that tell your unique story. Specializing in emotional, documentary-style photography in New England and beyond.",

  authors: [{ name: "Andrew Kusakin" }],
  openGraph: {
    title: "Andrew Kusakin Photography - Capturing Authentic Moments",

    description:
      "Andrew Kusakin is a wedding, portrait, and event photographer in Boston, Massachusetts. Available for travel worldwide.",
    url: "https://www.kusakinphoto.com",
    images: [
      {
        url: "https://www.kusakinphoto.com/card-image.jpg",
        width: 1000,
        height: 1000,
        alt: "A candid photo from a wedding by Andrew Kusakin Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Kusakin Photography",
    description:
      "Boston-based photographer specializing in weddings, portraits, and events. Available for travel across New England and beyond.",
    images: ["https://www.kusakinphoto.com/card-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.kusakinphoto.com/"),
  alternates: {
    canonical: "/",
  },
};

// Canonical, site-wide business entity. Referenced by a stable @id so every
// page reinforces the same local-business profile (name, location, service
// area, price range) — strongest signal for local SEO.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Photographer"],
  "@id": "https://www.kusakinphoto.com/#business",
  name: "Andrew Kusakin Photography",
  description:
    "Boston-based fine art documentary wedding photographer serving New England including Cape Cod, Providence, Newport, and beyond.",
  url: "https://www.kusakinphoto.com",
  email: "andrew@kusakinphoto.com",
  telephone: "+1-347-313-5300",
  image: "https://www.kusakinphoto.com/card-image.jpg",
  logo: "https://www.kusakinphoto.com/logo.png",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Boston",
    addressRegion: "MA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "42.3601",
    longitude: "-71.0589",
  },
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
  ].map((name) => ({ "@type": "Place", name })),
  serviceType: [
    "Wedding Photography",
    "Engagement Photography",
    "Portrait Photography",
    "Event Photography",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-347-313-5300",
    email: "andrew@kusakinphoto.com",
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.instagram.com/kusakinphoto/",
    "https://www.tiktok.com/@kusakinphoto",
    "https://www.pinterest.com/kusakinphoto/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Warm up the font + image origins so TLS/connection setup runs in
            parallel with (not after) the render-blocking font CSS. The Typekit
            font files are CORS, so those preconnects need crossOrigin. */}
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://p.typekit.net"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.kusakinphoto.com" />
        <link rel="stylesheet" href="https://use.typekit.net/ygj5rom.css" />
        <link rel="stylesheet" href="https://use.typekit.net/xyp4arb.css" />
        <JsonLd data={businessSchema} />
      </head>
      <body>
        <LenisScroll>
          <main className="main">
            <Header />
            <Menu />
            {children}
            <Footer />
          </main>
        </LenisScroll>
      </body>
      <GoogleAnalytics gaId="G-90SBL0XP3V" />
      <GoogleTagManager gtmId="AW-11562135208" />
    </html>
  );
}