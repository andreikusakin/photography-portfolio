import React from 'react'
import PortfolioSection from '../components/PortfolioSection/PortfolioSection'
import type { Metadata } from "next";
import styles from "./page.module.css";
export const metadata: Metadata = {
  title: "Portfolio Andrew Kusakin | Boston Wedding Photographer",
  alternates: {
    canonical: '/portfolio',
  }
};

export default function page() {
  return (
    <><div className={styles.wrapper}>
    <div className={styles.container}>

     
    </div>
    </div>
    <PortfolioSection /></>
  )
}
