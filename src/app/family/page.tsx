
import React from "react";
import { family, familyHighlights } from "@/lib/data";
import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery";

export default function Wedding() {
  return (
    <PortfolioGallery name="Family" galleries={family} highlights={familyHighlights} />
  );
}
