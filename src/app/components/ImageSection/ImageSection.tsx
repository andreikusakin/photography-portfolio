'use client'

import React, {useRef} from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./ImageSection.module.css";
import {
    motion,
    useScroll,
    useTransform,
  } from "framer-motion";

export default function ImageSection({ image }: { image: StaticImageData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className={styles.container} ref={containerRef}>
      <motion.div className={styles.imageContainer} style={{ scale }}>
        <Image
          src={image}
          alt=""
          className={styles.image}
          width={1500}
          height={1000}
        />
      </motion.div>
    </div>
  );
}
