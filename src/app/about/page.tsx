import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import PageContainer from "../components/PageContainer/PageContainer";
import { MotionDiv } from "../components/MotionDiv/MotionDiv";

export default function About() {
  return (
    <PageContainer>
      <MotionDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>About Me</h1>
      </MotionDiv>

      <MotionDiv
        className={styles.description}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className={styles.imageContainer}>
          <Image
            src="/me.jpg"
            alt="andrew kusakin photo"
            height={900}
            width={600}
            quality={90}
          />
        </div>
        <div className={styles.text}>
          <div>
            Hi, I’m Andrew Kusakin, a Boston-based photographer with a passion
            for capturing authentic moments that tell a story. Whether it’s a
            wedding, an intimate portrait session, or a lively event, my goal is
            to create timeless images that reflect your unique personality and
            the emotions of the day. I take a documentary approach, blending
            candid shots with thoughtfully composed portraits to deliver a
            gallery that feels true to you. When I’m not behind the camera, I
            enjoy exploring New England and beyond, discovering new places, and finding
            inspiration in everyday life. I’d love the chance to collaborate and
            help turn your moments into lasting memories.
          </div>
          <div><strong>Let’s connect and make something beautiful together!</strong></div>
        </div>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <GetInTouch />
      </MotionDiv>
    </PageContainer>
  );
}
