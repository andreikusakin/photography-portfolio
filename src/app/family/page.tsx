
import React from "react";
import { families, familyHighlights } from "@/lib/data";
import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boston Family Photography | Candid Family Photographer",
  alternates: {
    canonical: '/family',
  }
};

export default function Wedding() {
  return (
    <PortfolioGallery name="Family" galleries={families} highlights={familyHighlights} />
  );
}
