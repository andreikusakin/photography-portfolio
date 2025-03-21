"use client";

import React, { useRef } from "react";
import styles from "./Welcome.module.css";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import image1 from "./../../../../public/wedding/christiadam/23.jpg";
import image2 from "./../../../../public/wedding/valeriejoseph/17.jpg";
import image3 from "./../../../../public/wedding/veronicajoseph/51.jpg";
import image4 from "./../../../../public/wedding/orbreybrett/8.jpg";
import image5 from "./../../../../public/couples/alinabrandon/24.jpg";
import image6 from "./../../../../public/wedding/marissamichael/10.jpg";


export default function Welcome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const welcomeOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.5],
    [0, 1, 1, 0]
  );
  // const welcomeY = useTransform(scrollYProgress, [0, 0.25], [-800, 0]);

  const captureOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.9, 1],
    [0, 1, 1, 0]
  );
  const captureScale = useTransform(scrollYProgress, [0.4, 1], [0.4, 1]);

  // const welcomeImagesParallax = [
  //   useTransform(scrollYProgress, [0, 0.6], [60, -60]),
  //   useTransform(scrollYProgress, [0, 0.8], [0, -100]),
  //   useTransform(scrollYProgress, [0, 1], [0, -100]),
  // ];

  const imageCarouselX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5],
    [0, -100, -1000]
  );

  const scale1 = useTransform(scrollYProgress, [0.4, 1], [1.5, 4.2]);
  const scale2 = useTransform(scrollYProgress, [0.4, 1], [1.5, 3.5]);
  const scale3 = useTransform(scrollYProgress, [0.4, 1], [1.5, 3.8]);
  const scale4 = useTransform(scrollYProgress, [0.4, 1], [1.5, 4.8]);
  const scale5 = useTransform(scrollYProgress, [0.4, 1], [1.5, 5.1]);
  const scale6 = useTransform(scrollYProgress, [0.4, 1], [1.5, 5.2]);

  const captureImages = [
    { src: "/wedding/jessicageorge/18.jpg", scale: scale1 },
    { src: "/wedding/veronicajoseph/13.jpg", scale: scale2 },
    { src: "/couples/alinabrandon/23.jpg", scale: scale3 },
    { src: "/wedding/veronicajoseph/15.jpg", scale: scale4 },
    { src: "/wedding/marissamichael/26.jpg", scale: scale5 },
    { src: "/wedding/valeriejoseph/18.jpg", scale: scale6 },
    { src: "/couples/alinabrandon/30.jpg", scale: scale6 },
  ];

  const carouselImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,

  ];

  return (
    <motion.section
      className={styles.container}
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      {/* Shared sticky container */}
      <div className={styles.sticky}>
        {/* Welcome Animation */}
        <motion.div
          style={{ opacity: welcomeOpacity }}
          className={styles.welcome}
        >
          <div className={styles.grid}>
            <div style={{ opacity: 0.8 }}>Welcome, I'm Andrew Kusakin</div>
            <div className={styles.text}>
              <h5 style={{ fontSize: "2em" }}>Photographer & Story Teller</h5>
              <div style={{ opacity: 0.8 }}>
                Based in the vibrant heart of Boston, MA, I'm a passionate
                photographer specializing in wedding, engagement, couples,
                portrait, and family photography. My approach blends candid,
                documentary-style imagery with flexibility to adapt seamlessly
                to any genre or creative vision. Whether you're celebrating your
                love, marking life's milestones, or cherishing everyday moments,
                I'm dedicated to crafting images that genuinely reflect who you
                are.
              </div>
            </div>
          </div>
          <motion.div
            className={styles.imageCarousel}
            style={{ x: imageCarouselX }}
          >
            {carouselImages.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image.src}
                  quality={78}
                  alt="Wedding Photography, Boston, Massachusetts"
                  width={600}
                  height={900}
                />
              );
            })}
          </motion.div>
          {/* <div className={styles.text}>
            
            <h5>Photographer & Story Teller</h5>
            <div style={{ opacity: 0.8, fontWeight: 400 }}>
              Based in the vibrant heart of Boston, MA, I'm a passionate
              photographer specializing in wedding, engagement, couples,
              portrait, and family photography. My approach blends candid,
              documentary-style imagery with flexibility to adapt seamlessly to
              any genre or creative vision. Whether you're celebrating your
              love, marking life's milestones, or cherishing everyday moments,
              I'm dedicated to crafting images that genuinely reflect who you
              are.
            </div>
          </div>
          <div className={styles.parallaxImages}>
            <motion.div
              className={styles.image1}
              style={{
                y: welcomeImagesParallax[0],
              }}
            >
              <Image
                src="/wedding/valeriejoseph/14.jpg"
                style={{ objectFit: "cover" }}
                quality={70}
                alt="Photograph of a wedding"
                fill
              />
            </motion.div>
            <motion.div
              className={styles.image2}
              style={{
                y: welcomeImagesParallax[1],
              }}
            >
              <Image
                src="/couples/roxanakonstantin/8.jpg"
                style={{ objectFit: "cover" }}
                quality={70}
                alt="Photograph of a couple"
                fill
              />
            </motion.div>
            <motion.div
              className={styles.image3}
              style={{
                y: welcomeImagesParallax[2],
              }}
            >
              <Image
                src="/couples/alinabrandon/19.jpg"
                style={{ objectFit: "cover" }}
                quality={70}
                alt="Photograph of a couple"
                fill
              />
            </motion.div>
          </div> */}
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            opacity: captureOpacity,
          }}
        >
          <div className={styles.capture_images}>
            {captureImages.map((image, index) => (
              <motion.div
                key={index}
                style={{ scale: image.scale }}
                className={styles.element}
              >
                <motion.div className={styles.image_container}>
                  <Image
                    src={image.src}
                    fill
                    quality={70}
                    style={{ objectFit: "cover" }}
                    alt="Wedding Photography, Boston, Massachusetts"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className={styles.capture}
            style={{ scale: captureScale }}
          >
            <div>I'm Here</div>
            <div>to Capture</div>
            <div>Your Most</div>
            <div>Precious</div>
            <div>Moments</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
