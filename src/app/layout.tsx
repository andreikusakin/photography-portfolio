import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "Boston Wedding Photographer | Andrew Kusakin Photography",
  description:
    "Andrew Kusakin is a Boston based photographer specializing in weddings, portraits, and events. Available for travel worldwide.",
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
    "New England Wedding Photographer",
    "New England Wedding Photography",
    "Destination Wedding Photographer",
    "Destination Wedding Photography",
    "Destination Photographer",
    "Boston Portrait Photographer",
    "Boston Portrait Photography",
    "Boston Event Photographer",
    "Boston Event Photography",
    "New England Portrait Photographer",
    "New England Portrait Photography",
    "Wedding photography in Boston",
    "Wedding photography in New England",
    "Wedding photography in Massachusetts",
    "Wedding photography in Rhode Island",
    "Wedding photography in Maine",
    "Wedding photography in Vermont",
    "Wedding photography in New Hampshire",
    "Wedding photography in Connecticut",
    "Wedding photography in Cape Cod",
    "Wedding photography in North Shore",
    "Wedding photographer in Boston",
    "Wedding photographer in New England",
    "Wedding photographer in Massachusetts",
    "Wedding photographer in Rhode Island",
    "photographer in Boston",
    "photographer in New England",
    "photographer in Massachusetts",
    "family photographer in Boston",
    "family photographer in New England",
    "family photographer in Massachusetts",
    "family photographer"


  ],
  authors: [{ name: "Andrew Kusakin" }],
  openGraph: {
    title: "Andrew Kusakin Photography - Capturing Authentic Moments",
    description:
      "Andrew Kusakin in a wedding, portrait, event photographer in Boston, Masschusetts. Available for travel worldwide.",
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
  metadataBase: new URL('https://www.kusakinphoto.com/'),
  alternates: {
    canonical: '/',
  }
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
