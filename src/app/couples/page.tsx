
import React from "react";

import { couples, portraitHighlights } from "@/lib/data";
import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery";

export default function page() {
  return (
    <PortfolioGallery name="Couples" galleries={couples} highlights={portraitHighlights} />
  );
}
