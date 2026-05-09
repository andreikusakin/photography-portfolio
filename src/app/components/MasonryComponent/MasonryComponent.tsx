"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import cloudinaryLoader from "@/lib/cloudinaryLoader";

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
const GAPS = [10, 15, 20];
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
  const [config, setConfig] = useState<{ columns: number; gap: number } | null>(
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

  if (!imagesData || imagesData.length === 0) {
    return <div>No images found for this gallery.</div>;
  }

  if (!config) return null;

  const columns = distributeColumns(imagesData, config.columns);

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
            <div key={item.src || i}>
              <Image
                loader={cloudinaryLoader}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 768px) 100vw, (max-width: 991px) 50vw, 33vw"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryComponent;
