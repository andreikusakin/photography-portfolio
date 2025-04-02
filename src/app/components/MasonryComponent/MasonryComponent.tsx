"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Masonry = dynamic(() => import('masonic').then((mod) => mod.Masonry), { ssr: false })

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
      // @ts-expect-error - Masonic's render prop type might not perfectly match MasonryItem
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
    <div 
      style={{
        backgroundColor: "#424242",
      }}
    >
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
