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
    src: "/wedding/christiadam/22.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/christiadam/23.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/christiadam/46.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/jessicageorge/1.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/jessicageorge/2.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/jessicageorge/7.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/jessicageorge/18.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/jessicageorge/19.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/marissamichael/6.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/marissamichael/9.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/marissamichael/10.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/marissamichael/26.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/marissamichael/27.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/orbreybrett/1.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/orbreybrett/4.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/orbreybrett/8.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/orbreybrett/11.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/orbreybrett/18.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/2.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/5.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/6.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/7.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/13.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/15.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/17.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/18.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/23.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/36.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/valeriejoseph/39.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/8.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/11.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/13.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/14.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/15.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/24.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/32.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/47.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/53.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/59.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/wedding/veronicajoseph/66.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/couples/alinabrandon/16.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/couples/alinabrandon/4.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/couples/alinabrandon/7.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/couples/alinabrandon/14.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/couples/alinabrandon/19.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/couples/alinabrandon/20.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/couples/alinabrandon/21.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/couples/alinabrandon/24.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
  {
    src: "/couples/alinabrandon/30.jpg",
    width: 900,
    height: 600,
    priority: true,
  },
  {
    src: "/couples/roxanakonstantin/8.jpg",
    width: 600,
    height: 900,
    priority: true,
  },
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
