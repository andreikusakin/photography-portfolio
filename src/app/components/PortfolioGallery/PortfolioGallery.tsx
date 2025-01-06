"use client";

import React from "react";
import GalleryList from "../GalleryList/GalleryList";
import styles from "./PortfolioGallery.module.css";
import EmblaCarousel from "../Carousel/EmblaCarousel";
import { AnimatePresence, motion } from "framer-motion";

export default function PortfolioGallery({ name, galleries, highlights }) {
  return (
    <AnimatePresence>
      <motion.div className={styles.container}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {name} Highlights
        </motion.h1>
        <EmblaCarousel slides={highlights} />
        <motion.h1
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        >
          Explore More
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
        >
          <GalleryList gallery={galleries} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
