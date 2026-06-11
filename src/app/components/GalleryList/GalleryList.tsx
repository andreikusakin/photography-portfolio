"use client";

import React from "react";
import styles from "./GalleryList.module.css";
import Photo from "../Photo/Photo";
import Link from "next/link";
import { Gallery } from "@/lib/data";

export default function GalleryList({ gallery }: { gallery: Gallery[] }) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {gallery.map((gallery, index) => (
          <Link
            href={`/${gallery.type}/${gallery.id}`}
            className={styles.item}
            key={gallery.id}
          >
            <div className={styles.image}>
              <Photo
                src={gallery.cover?.src || ""}
                alt={gallery.name}
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
        ))}
      </div>
    </div>
  );
}
