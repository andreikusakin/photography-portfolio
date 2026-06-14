"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Photo from "../Photo/Photo";
import Lightbox from "../Lightbox/Lightbox";
import styles from "./MasonryComponent.module.css";

interface ImageData {
  alt: string;
  src: string;
  width: number;
  height: number;
}

interface MasonryComponentProps {
  imagesData: ImageData[];
}

const COLUMNS = [1, 2, 3];
const GAPS = ["var(--space-sm)", "var(--space-md)", "var(--space-2xl)"];
const BREAKPOINTS = [768, 991, 992];

function distributeColumns<T extends { width: number; height: number }>(
  items: T[],
  columnCount: number
): T[][] {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);
  for (const item of items) {
    let shortest = 0;
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push(item);
    heights[shortest] += item.height / item.width;
  }
  return columns;
}

function useResponsiveConfig() {
  const [config, setConfig] = useState<{ columns: number; gap: string } | null>(
    null
  );

  useEffect(() => {
    const queries = BREAKPOINTS.map((bp) =>
      window.matchMedia(`(min-width: ${bp}px)`)
    );
    const update = () => {
      let matches = 0;
      for (const q of queries) {
        if (q.matches) matches++;
      }
      const i = Math.min(BREAKPOINTS.length - 1, Math.max(0, matches));
      setConfig({ columns: COLUMNS[i], gap: GAPS[i] });
    };
    update();
    for (const q of queries) q.addEventListener("change", update);
    return () => {
      for (const q of queries) q.removeEventListener("change", update);
    };
  }, []);

  return config;
}

const MasonryComponent: React.FC<MasonryComponentProps> = ({ imagesData }) => {
  const config = useResponsiveConfig();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!imagesData || imagesData.length === 0) {
    return <div>No images found for this gallery.</div>;
  }

  if (!config) return null;

  // carry the original gallery order so lightbox prev/next follows it,
  // regardless of which masonry column an image lands in
  const columns = distributeColumns(
    imagesData.map((image, index) => ({ ...image, index })),
    config.columns
  );

  return (
    <div
      style={{
        display: "grid",
        alignItems: "start",
        gridColumnGap: config.gap,
        gridTemplateColumns: `repeat(${config.columns}, minmax(0, 1fr))`,
      }}
    >
      {columns.map((col, ci) => (
        <div
          key={ci}
          style={{
            display: "grid",
            rowGap: config.gap,
            gridTemplateColumns: "minmax(0, 1fr)",
          }}
        >
          {col.map((item, i) => (
            <button
              type="button"
              key={item.src || i}
              className={styles.tile}
              onClick={() => setLightboxIndex(item.index)}
            >
              <Photo
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 768px) 100vw, (max-width: 991px) 50vw, 33vw"
              />
            </button>
          ))}
        </div>
      ))}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={imagesData}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MasonryComponent;
