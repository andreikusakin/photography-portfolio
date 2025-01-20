import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { MotionDiv } from "../MotionDiv/MotionDiv";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  priority?: boolean;
}


const gridImages: ImageProps[] = [
  {
    src: "/wedding/veronicajoseph/17.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  
  {
    src: "/wedding/valeriejoseph/17.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  { src: "/wedding/marissamichael/9.jpg", width: 900, height: 600 },
  { src: "/wedding/marissamichael/10.jpg", width: 600, height: 900 },
  { src: "/couples/alinabrandon/23.jpg", width: 600, height: 900 },
  { src: "/wedding/christiadam/19.jpg", width: 900, height: 600 },
  { src: "/wedding/christiadam/46.jpg", width: 600, height: 900 },
  { src: "/couples/roxanakonstantin/13.jpg", width: 900, height: 600 },
  {
    src: "/couples/alinabrandon/20.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/christiadam/22.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  { src: "/wedding/veronicajoseph/24.jpg", width: 900, height: 600 },
  { src: "/couples/roxanakonstantin/8.jpg", width: 600, height: 900 },
  { src: "/wedding/veronicajoseph/15.jpg", width: 900, height: 600 },
  { src: "/couples/roxanakonstantin/18.jpg", width: 900, height: 600 },
  { src: "/wedding/jessicageorge/18.jpg", width: 600, height: 900 },
  { src: "/wedding/christiadam/33.jpg", width: 900, height: 600 },
  { src: "/couples/alinabrandon/16.jpg", width: 600, height: 900 },
];
export default function Hero() {
  return (
    <MotionDiv className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
    >
      <div className={styles.image_grid}>
        {gridImages.map((image, index) => (
          <div
            key={index}
            className={styles.imageContainer}
            
          >
            <Image
              src={image.src}
              alt="wedding"
              width={image.width}
              height={image.height}
              quality={65}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </MotionDiv>
  );
}
