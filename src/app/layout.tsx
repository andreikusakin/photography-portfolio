import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Andrew Kusakin Photography - New England & Destination Photographer",
  description:
    "Andrew Kusakin is a Boston-based photographer specializing in weddings, portraits, and events. Capturing authentic, timeless moments across New England and beyond.",
  keywords: [
    "Andrew Kusakin Photography",
    "Boston Photographer",
    "Wedding Photographer",
    "Portrait Photographer",
    "Event Photographer",
    "New England Photography",
    "Destination Photography",
    "Candid Photography",
    "Professional Photographer",
    "Boston Wedding Photography",
    "Boston Wedding Photographer",
    "Massachusetts Photographer",
    "New England Photographer",
  ],
  authors: [{ name: "Andrew Kusakin" }],
  openGraph: {
    title: "Andrew Kusakin Photography - Capturing Authentic Moments",
    description:
      "Explore Andrew Kusakin's portfolio of weddings, portraits, and event photography. Based in Boston, available for travel worldwide.",
    url: "https://www.kusakinphoto.com",
    images: [
      {
        url: "https://www.kusakinphoto.com/card-image.jpg",
        width: 1000,
        height: 1000,
        alt: "Andrew Kusakin Photography - Capturing Authentic Moments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrew Kusakin Photography",
    description:
      "Boston-based photographer specializing in weddings, portraits, and events. Available for travel across New England and beyond.",
    images: ["https://www.kusakinphoto.com/twitter-card-image.jpg"],
  },
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
      </head>
      <body>
        <main 
          // style={{overflow: "hidden"}}
        >
          <Menu />
          <Header />
          {children}
          <Footer />
        </main>
      </body>
      <GoogleAnalytics gaId="G-90SBL0XP3V" />
    </html>
  );
}
