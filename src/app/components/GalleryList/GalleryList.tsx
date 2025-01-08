import React from "react";
import styles from "./GalleryList.module.css";
import Image from "next/image";
import Link from "next/link";
import { Gallery } from "@/lib/data";

export default function GalleryList({ gallery }: { gallery: Gallery[] }) {
  return (
    <div className={styles.grid}>
      {gallery.map((gallery) => (
        <Link
          href={`/${gallery.type}/${gallery.id}`}
          className={styles.item}
          key={gallery.id}
        >
          <div className={styles.image}>
            <Image
              src={`/${gallery.type}/${gallery.id}/${gallery.cover}.jpg`}
              alt={gallery.name}
              className={styles.coverImage}
              width={600}
              height={900}
            />
          </div>
          <div className={styles.description}>
            <span>{gallery.name}</span>
            <span>{gallery.venue}</span>
            <span>{gallery.location}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
