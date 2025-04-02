"use client";

import React from "react";
import { Masonry } from "masonic";
import Image from "next/image";

interface ImageData {
  width: number;
  height: number;
  alt: string;
  src: string;
}

interface MasonryComponentProps {
  imagesData: ImageData[];
}

const MasonryComponent: React.FC<MasonryComponentProps> = ({ imagesData }) => {
  return (
    <Masonry
      items={imagesData}
      render={MasonryItem}
      columnGutter={20}
      columnWidth={350}
      maxColumnCount={3}
    />
  );
};

interface MasonryItemProps {
  data: ImageData;
}

const MasonryItem: React.FC<MasonryItemProps> = ({
  data: { src, alt, width, height },
}) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width / 2}
        height={height / 2}
        quality={85}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
};

export default MasonryComponent;
