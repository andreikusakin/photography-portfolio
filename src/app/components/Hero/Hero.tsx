"use client";

import { motion } from "motion/react";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { s } from "motion/react-client";

interface ImageProps {
    src: string;
    width: number;
    height: number;
  }
  
  interface ColumnProps {
    images: ImageProps[];
    animation: any;
  }

const colOneImages: ImageProps[] = [
  { src: "/wedding/veronicajoseph/17.jpg", width: 1000, height: 1500 },
  { src: "/wedding/valeriejoseph/17.jpg", width: 1000, height: 1500 },
  { src: "/wedding/marissamichael/9.jpg", width: 1500, height: 1000 },
  { src: "/wedding/marissamichael/10.jpg", width: 1000, height: 1500 },
  { src: "/couples/alinabrandon/23.jpg", width: 1000, height: 1500 },
  { src: "/wedding/christiadam/19.jpg", width: 1500, height: 1000 },
  { src: "/wedding/christiadam/46.jpg", width: 1000, height: 1500 },
  { src: "/couples/roxanakonstantin/13.jpg", width: 1500, height: 1000 },
];

const colTwoImages: ImageProps[] = [
  { src: "/couples/alinabrandon/20.jpg", width: 1500, height: 1000 },
  { src: "/wedding/christiadam/22.jpg", width: 1000, height: 1500 },
  { src: "/wedding/veronicajoseph/24.jpg", width: 1500, height: 1000 },
  { src: "/couples/roxanakonstantin/8.jpg", width: 1000, height: 1500 },
  { src: "/wedding/veronicajoseph/15.jpg", width: 1500, height: 1000 },
  { src: "/couples/roxanakonstantin/18.jpg", width: 1500, height: 1000 },
  { src: "/wedding/jessicageorge/18.jpg", width: 1000, height: 1500 },
  { src: "/wedding/christiadam/33.jpg", width: 1500, height: 1000 },
  { src: "/couples/alinabrandon/16.jpg", width: 1000, height: 1500 },
];

const colOneVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};
const colTwoVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
        delay: 0.5,
      },
    },
  };
const itemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};



export default function Hero() {
  return (
    <div>
      <div className={styles.container}>
        <Column images={colOneImages} animation={colOneVariants} />
        <Column images={colTwoImages} animation={colTwoVariants} />
      </div>
    </div>
  );
}



function Column({ images, animation }: ColumnProps) {
  return (
    <motion.div
      className={styles.column}
      variants={animation}
      initial="hidden"
      animate="show"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={styles.imageContainer}
          variants={itemVariants}
        >
          <Image
            src={image.src}
            alt="wedding"
            width={image.width}
            height={image.height}
            quality={90}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
