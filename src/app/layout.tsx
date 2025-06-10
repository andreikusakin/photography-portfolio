import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
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
        url: "https://www.kusakinphoto.com/logo.png",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Andrew Kusakin Photography",
  url: "https://www.kusakinphoto.com",

  logo: "https://www.kusakinphoto.com/logo.png",
  sameAs: [
    "https://www.instagram.com/kusakinphoto",
    "https://www.tiktok.com/kusakinphoto",

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
        <link rel="stylesheet" href="https://use.typekit.net/ygj5rom.css" />
        <JsonLd data={organizationSchema} />
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
    </html>
  );
}