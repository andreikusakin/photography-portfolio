"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./GalleryList.module.css";
import Photo from "../Photo/Photo";
import Link from "next/link";
import { Gallery } from "@/lib/data";

export default function GalleryList({ gallery }: { gallery: Gallery[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {gallery.map((gallery, index) => (
          <motion.div
            className={styles.item}
            key={gallery.id}
            initial={{ opacity: 0, y: "3em" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              // Stagger within a row; items in later rows trigger on their own.
              delay: (index % 3) * 0.12,
            }}
            viewport={{ once: true }}
          >
            <Link href={`/${gallery.type}/${gallery.id}`} className={styles.link}>
              <div className={styles.image}>
                <Photo
                  src={gallery.cover?.src || ""}
                  alt={`${gallery.name} ${
                    gallery.type === "couple" ? "couple session" : "wedding"
                  }${gallery.venue ? ` at ${gallery.venue}` : ""}${
                    gallery.location ? `, ${gallery.location}` : ""
                  }`}
                  className={styles.coverImage}
                  width={gallery.cover?.width || 600}
                  height={gallery.cover?.height || 900}
                  sizes="(max-width: 768px) 100vw, (max-width: 991px) 50vw, 33vw"
                  priority={index < 3}
                />
                {gallery.coverHover && (
                  <Photo
                    src={gallery.coverHover.src}
                    alt=""
                    aria-hidden
                    className={styles.coverHover}
                    width={gallery.coverHover.width}
                    height={gallery.coverHover.height}
                    sizes="(max-width: 768px) 100vw, (max-width: 991px) 50vw, 33vw"
                    style={{
                      position: "absolute",
                      inset: 0,
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
              <div className={styles.description}>
                <span>{gallery.name}</span>
                <span>{gallery.venue}</span>
                <span>{gallery.location}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
