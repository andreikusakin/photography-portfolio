import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { TbPoint } from "react-icons/tb";
import type { Metadata } from "next";
import SmallHero from "../components/SmallHero/SmallHero";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Image2 from "./../../../public/about/ak2.jpg";
import Image3 from "./../../../public/about/ak3.jpg";
import Image5 from "./../../../public/about/ak5.jpg";

export const metadata: Metadata = {
  title: "About Andrew Kusakin | Boston Wedding Photographer",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <div>
      <SmallHero
        title="About Me"
        subtitle="Boston Wedding Photographer"
        image={Image2}
      />
      <div className={styles.container}>
        <div className={styles.intro}>
          <Image
            src={Image3}
            alt="Andrew Kusakin"
            className={styles.meImage}
          />
          <h2>
            Hey, I'm Andrew. <br /> Your Storyteller in Boston.
          </h2>
          <p>
            I'm a wedding photographer based in Boston—a city I'm proud to call
            home and explore every day. More importantly, I'm a storyteller who
            believes your wedding day should be felt, not just seen. My passion
            is capturing the real, unscripted moments that tell the unique story
            of who you are as a couple. I'm here to be a calming presence, a
            helpful guide, and a friend who blends into the background, allowing
            you to be fully present with the people you love most.
          </p>
        </div>
        <div
          style={{
            backgroundColor: "var(--color-button)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
        <div className={styles.philosophy}>
          <ParallaxImage
            src={Image5}
            alt="Andrew Kusakin"
            width={"30em"}
            height={"40em"}
          />
          <div className={styles.col}>
            <h2>So, Why All the Focus on Connection?</h2>
            <p>
              Simple. When you're comfortable with me, you forget the camera is
              there. That's when the magic happens. That's when your guard comes
              down and your true personalities shine through. Building a genuine
              connection is the key to creating authentic photographs.</p> <p>I want to
              hear about how you met, what you love doing on a lazy Sunday, and
              what you're most excited about for your wedding day. The more I
              know you, the better I can tell your story.</p><p> So, in the spirit of
              getting to know each other, here are a few things that make me,
              me:
            </p>
            <ul>
              <li>
                <TbPoint color="rgb(223, 204, 179)" size="1.2em" />
                When I'm not behind the camera, you can usually find me
                exploring the trails and towns of New England with my partner
                and our dog.
              </li>
              <li>
                <TbPoint color="rgb(223, 204, 179)" size="1.2em" />
                In the winter, my happy place is on a snowboard, chasing fresh
                powder anywhere I can find it.
              </li>
              <li>
                <TbPoint color="rgb(223, 204, 179)" size="1.2em" />
                I'm constantly planning the next road trip to a national park.
                The grander the landscape, the better.
              </li>
              <li>
                <TbPoint color="rgb(223, 204, 179)" size="1.2em" />
                My go-to playlist for editing or a long drive is usually filled
                with artists from Iceland (think Ólafur Arnalds or Sigur Rós).
              </li>
              <li>
                <TbPoint color="rgb(223, 204, 179)" size="1.2em" />
                My day usually starts with a perfectly whisked matcha latte.
              </li>
              <li>
                <TbPoint color="rgb(223, 204, 179)" size="1.2em" />
                Nothing beats a quiet evening with a good documentary or
                re-watching a favorite comfort show.
              </li>
            </ul>
          </div>
        </div></div>

      </div>
      <GetInTouch />
    </div>
  );
}
