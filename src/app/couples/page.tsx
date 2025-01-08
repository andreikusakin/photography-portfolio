
import React from "react";

import { couples, couplesHighlights } from "@/lib/data";
import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery";

export default function page() {
  return (
    <PortfolioGallery name="Couples" galleries={couples} highlights={couplesHighlights} />
  );
}
