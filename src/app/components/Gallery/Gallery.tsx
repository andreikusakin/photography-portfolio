"use client";

import React from "react";
import type { Gallery } from "@/lib/data";
import Image from "next/image";
import styles from "./Gallery.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Gallery({ gallery }: { gallery: Gallery }) {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1>{gallery.name}</h1>
        <h2>{gallery.venue}</h2>
        <h2>{gallery.location}</h2>
      </motion.div>
      <div className={styles.images_wrapper}>
        {Array.from({ length: gallery.count }, (_, i) => i + 1).map((item) => (
          <motion.div
            key={item}
            className={styles.image_container}
            variants={{
              offscreen: {
                opacity: 0,
                y: 50,
              },
              onscreen: {
                opacity: 1,
                y: 0,

                transition: {
                  duration: 1,
                },
              },
            }}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            {/* <Image
              src={`/${gallery.type}/${gallery.id}/${item}.jpg`}
              objectFit="contain"
              alt={`${gallery.name} image-${item}`}
              fill
              quality={95}
            /> */}
            <img
              src={`/${gallery.type}/${gallery.id}/${item}.jpg`}
              alt={`${gallery.name} image-${item}`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
