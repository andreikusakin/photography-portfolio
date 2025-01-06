"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface ImageSlide {
  src: string;
  alt: string;
  width: number;   // Natural width of the image
  height: number;  // Natural height of the image
}

interface ImageCarouselProps {
  slides: ImageSlide[];
  containerHeight?: number; // in px, e.g. 500
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  containerHeight = 500
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Measure container width for potential calculations
  useEffect(() => {
    if (carouselRef.current) {
      setContainerWidth(carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <div 
      ref={carouselRef}
      style={{
        overflow: "hidden",
        width: "100%",           // Takes full width of parent
        height: containerHeight, // Fixed height
        position: "relative"
      }}
    >
      <motion.div
        style={{
          display: "flex",
          height: "100%",    // Ensures all images scale to same height
          cursor: "grab"
        }}
        drag="x"
        dragConstraints={{ left: -5000, right: 0 }} 
        // Above dragConstraints is a rough value; adjust as needed or calculate from slides total width
      >
        {slides.map(({ src, alt, width, height }, index) => {
          // Calculate aspect ratio and fit image height to the container
          // The width of each slide will be (aspectRatio * containerHeight)
          const aspectRatio = width / height;
          const slideWidth = aspectRatio * containerHeight;

          return (
            <div
              key={index}
              style={{
                position: "relative",
                width: slideWidth,      // Auto-adjusted width
                height: "100%",         // Keep full height
                flexShrink: 0,          // Prevent shrinking so each slide keeps its width
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{
                  height: "100%",
                  width: "auto",
                  objectFit: "contain"
                }}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
