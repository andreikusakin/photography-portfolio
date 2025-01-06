
import React from "react";

import { weddings, weddingHighlights } from "@/lib/data";
import styles from "./page.module.css";

import PortfolioGallery from "../components/PortfolioGallery/PortfolioGallery";

export default function Wedding() {
  return (
    <PortfolioGallery name="Wedding" galleries={weddings} highlights={weddingHighlights} />
  );
}
