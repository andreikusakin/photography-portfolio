
import React from "react";
import { weddings, weddingHighlights } from "@/lib/data";
import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boston Wedding Photography | Andrew Kusakin Photography",
  description:
    "Andrew Kusakin is a Boston based wedding photographer specializing in capturing the beauty of your special day. Available for travel worldwide.",
  alternates: {
    canonical: '/wedding',
  },
  openGraph: {
    title: "Boston Wedding Photography | Andrew Kusakin Photography",
    description:
      "Andrew Kusakin is a Boston based wedding photographer specializing in capturing the beauty of your special day. Available for travel worldwide.",
  },
};

export default function Wedding() {
  return (
    <PortfolioGallery name="Wedding" galleries={weddings} highlights={weddingHighlights} />
  );
}
