"use client";

import React from "react";
import Image from "next/image";
import { Masonry } from "react-plock"; // Direct import is fine

interface ImageData {
  alt: string;
  src: string;
}

interface MasonryComponentProps {
  imagesData: ImageData[];
}

const MasonryComponent: React.FC<MasonryComponentProps> = ({ imagesData }) => {
  // It's good practice to handle the case where imagesData might be empty or undefined
  if (!imagesData || imagesData.length === 0) {
    console.log("MasonryComponent: No imagesData to display.");
    return <div>No images found for this gallery.</div>; // Or some placeholder
  }
  console.log("MasonryComponent: Rendering with imagesData:", imagesData);

  return (
    <Masonry
      items={imagesData}
      
      config={{
        columns: [1, 2, 3],
        gap: [10, 15, 20], 
        media: [768, 991, 992], 
      }}
      render={(item: ImageData, index: number) => (
        <div
          key={item.src || index} 

        >
          <Image
            src={item.src}
            alt={item.alt}
            width={1500} 
            height={1500} 
            quality={85}
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