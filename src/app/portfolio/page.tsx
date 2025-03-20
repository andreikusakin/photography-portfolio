import React from 'react'
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Andrew Kusakin | Boston Wedding Photographer",
  alternates: {
    canonical: '/portfolio',
  }
};

export default function page() {
  return (
    <PortfolioSection />
  )
}
