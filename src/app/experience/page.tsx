'use client'

import React from "react";
import styles from "./page.module.css";
import { motion } from "motion/react";

// import {
//   ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE,
//   HOUR_RATE,
//   STARTER_WEDDING_PACKAGE_PRICE,
// } from "@/lib/data";

import SmallHero from "./../components/SmallHero/SmallHero";
import HeroImage from "./../../../public/weddings/alex-adam/000033.jpg";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Link from "next/link";
import Faq from "../components/Faq/Faq";


export default function page() {
  return (
    <div>
      <SmallHero image={HeroImage} title="The Experience" subtitle="" />
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className={styles.intro}>
          <h1>
            Be Present. <br /> I'll Capture <br /> Everything.
          </h1>
          <p>
            Your wedding day is a celebration, not a photoshoot. You've spent
            months planning this incredible day, and my role is to ensure you
            can experience it to the fullest. My entire approach is built on a
            documentary philosophy that prioritizes your experience above all
            else. By observing the day as it naturally unfolds, I allow you to
            live in the moment, celebrate without interruption, and trust that
            your story is being told with care and artistry. The result is a
            collection of beautiful, honest images filled with the real
            laughter, happy tears, and quiet glances that made your day unique—a
            gallery that lets you remember exactly how it felt.
          </p>
        </div>
        <div className={styles.imagesContainer}>
          <ParallaxImage
            src="/weddings/valerie-joseph/000035.jpg"
            alt="wedding"
            width={"30em"}
            height={"40em"}
          />
          <ParallaxImage
            src="/weddings/alyssa-jonathan/000065.jpg"
            alt="wedding"
            width={"30em"}
            height={"40em"}
          />
          <ParallaxImage
            src="/weddings/amy-charlie/000032.jpg"
            alt="wedding"
            width={"30em"}
            height={"40em"}
          />
        </div>
      </motion.div>

      <div
        className={styles.section}
        style={{
          backgroundColor: "var(--color-button)",
        }}
      >
        <div className={styles.section_content}>
          <div className={styles.col}>
            <h5>Your Story, Without a Clock</h5>
            <h2>Full-Day Coverage for a Stress-Free Celebration</h2>
            <br />
            <p>
              While I offer packages for celebrations of all sizes, my signature
              approach is built on <strong>full-day coverage</strong>. I believe that to truly
              tell your story, I need to be there for all of it.
            </p>
            <br />
            <p>
              This means no clock-watching. No stress about fitting everything
              into a tight schedule or building your timeline around
              photography. You can relax, enjoy every moment of your special
              day, and trust that everything will be captured. By focusing on
              real moments and candids throughout the whole day, I'll capture
              the full range of emotion — from the teary-eyed first look in the
              afternoon until that last epic dance at 1am. It's all part of your
              story, and it all deserves to be remembered.
            </p>
            <br />
            <Link href="/pricing">
              <button
                style={{
                  background: "rgb(223, 204, 179)",
                }}
              >
                View Pricing
              </button>
            </Link>
          </div>
          <ParallaxImage
            src="/weddings/maddy-alex/000019.jpg"
            alt="wedding"
            width={"30em"}
            height={"40em"}
          />
        </div>
      </div>

      <section className={styles.journeySection}>
        <div className={styles.journeyHeader}>
          <h2>It All Starts with a Connection</h2>
          <p>
            Building a real connection with you is the most crucial part of my
            process!
            <br /> Here's what our journey together looks like:
          </p>
        </div>

        <ol className={styles.journeySteps}>
          {/* Step 1: The Chat */}
          <li className={styles.journeyStep}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepContent}>
              <h3>Our First Chat</h3>
              <p>
                After your inquiry gets me overly excited to meet you, we'll hop
                on the phone. This is where I get to hear all about you and you
                get to see if I'm the right fit. We'll nerd out over your love
                story, your vision for the day, and what truly matters to you.
              </p>
            </div>
          </li>

          {/* Step 2: The Engagement Session */}
          <li className={styles.journeyStep}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepContent}>
              <h3>Your Engagement Session</h3>
              <p>
                Think of this as our practice run! It's the perfect,
                low-pressure way for us to get comfortable with each other and
                for you to see how I guide you into natural, candid moments. It
                helps break the ice so that on your wedding day, having me there
                with a camera feels completely normal and relaxed.
              </p>
            </div>
          </li>

          {/* Step 3: The Planning Help */}
          <li className={styles.journeyStep}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepContent}>
              <h3>Your Personal Guide & Planner</h3>
              <p>
                Consider me your resource for anything wedding-related. With
                unlimited consultation, I'm here to help you plan a day that's
                not only beautiful but also flows effortlessly. I'll happily
                share my knowledge and tips on everything from lighting to
                timelines.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <GetInTouch />
      <Faq/>
      
    </div>
  );
}

