
import React from "react";

import { couples, couplesHighlights } from "@/lib/data";
import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boston Couples Photography | Boston Wedding Photographer",
  alternates: {
    canonical: '/couples',
  },
};

export default function page() {
  return (
    <PortfolioGallery name="Couples" galleries={couples} highlights={couplesHighlights} />
  );
}
