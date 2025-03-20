import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { MotionDiv } from "../components/MotionDiv/MotionDiv";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
import meImage from "./me.jpg";
import PageContainer from "../components/PageContainer/PageContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Andrew Kusakin | Boston Wedding Photographer",
  alternates: {
    canonical: '/about',
  }
};

export default function About() {
  return (
    <PageContainer>
      <MotionDiv
        className={styles.grid}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <MotionDiv className={styles.title}>
          <h2>About Me</h2>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          className={styles.imageContainer}
        >
          <Image
            src={meImage}
            alt="andrew kusakin photo"
            width={400}
            height={500}
            quality={85}
            style={{
              objectFit: "cover",
            }}
            placeholder="blur"
          />
        </MotionDiv>
        <MotionDiv className={styles.description}>
          <div className={styles.text}>
            <div>
              Hey there! I&apos;m Andrew Kusakin, a photographer who discovered
              a passion for capturing life&apos;s most genuine moments from an
              early age. My journey started when I first picked up a camera and
              quickly fell in love with the art of photography and
              cinematography. I&apos;m especially drawn to candid moments—the
              laughter, the tears, and everything authentic in between. When
              I&apos;m not behind the lens, you&apos;ll find me exploring New
              England and beyond, visiting stunning national parks across the
              USA, always seeking inspiration from nature&apos;s beauty. In my
              downtime, I enjoy making music, hitting the hiking trails with my
              Shiba Inu, or chasing fresh powder on my snowboard during winter.
            </div>
            <div>
              <strong>
                I can&apos;t wait to connect with you and capture your story!
              </strong>
            </div>
          </div>
        </MotionDiv>
        <div className={styles.getInTouch}>
          <div>
            <Link href="/contact">
              Get In Touch{" "}
              <LuArrowUpRight style={{ display: "inline-block" }} />
            </Link>
          </div>
        </div>
      </MotionDiv>
    </PageContainer>
  );
}
