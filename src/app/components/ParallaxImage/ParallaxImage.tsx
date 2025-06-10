"use client";

import React, { useRef } from "react";
import Image from "next/image";
import styles from "./ParallaxImage.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxImage({
  src,
  alt,
  width,
  height,
}: {
  src: any;
  alt: string;
  width: string;
  height: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallax = useTransform(scrollYProgress, [0, 1], [-3, 2]);
  const y1 = useTransform(parallax, (value) => `${value}em`);

  const containerStyle: any = {
    "--parallax-width": width,
    "--parallax-height": height,
  };

  return (
    <div
      ref={containerRef}
      className={styles.imageContainer}
      style={containerStyle}
    >
      <motion.div className={styles.imageWrapper} style={{ y: y1 }}>
        <Image src={src} alt={alt} height={900} width={600} quality={90} />
      </motion.div>
    </div>
  );
}
