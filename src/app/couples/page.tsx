
import React from "react";

import { portraits, portraitHighlights } from "@/lib/data";
import styles from "./page.module.css";

import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery";

export default function page() {
  return (
    <PortfolioGallery name="Couples" galleries={portraits} highlights={portraitHighlights} />
  );
}
