"use client";

import React from "react";
import Image from "next/image";
import { Masonry } from "react-plock";
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

const MasonryComponent: React.FC<MasonryComponentProps> = ({ imagesData }) => {
  if (!imagesData || imagesData.length === 0) {
    return <div>No images found for this gallery.</div>;
  }

  return (
    <Masonry
      items={imagesData}
      config={{
        columns: [1, 2, 3],
        gap: [10, 15, 20],
        media: [768, 991, 992],
      }}
      render={(item: ImageData, index: number) => (
        <div key={item.src || index}>
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
      )}
    />
  );
};

export default MasonryComponent;
