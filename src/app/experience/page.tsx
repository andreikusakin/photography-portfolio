"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";

// import {
//   ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE,
//   HOUR_RATE,
//   STARTER_WEDDING_PACKAGE_PRICE,
// } from "@/lib/data";

import SmallHero from "./../components/SmallHero/SmallHero";
import HeroImage from "./../../../public/weddings/alex-adam/000033.jpg";
import ParallaxImage from "../components/ParallaxImage/ParallaxImage";
import GetInTouch from "../components/GetInTouch/GetInTouch";

const faqData = [
  {
    question: "Where are you located?",
    answer:
      "I'm based in Boston, Massachusetts and serve all of New England. However, I'm happy to travel anywhere in North America and beyond—just note that travel fees may apply for events outside of New England.",
  },
  {
    question: "What is your style?",
    answer:
      "My photography approach is primarily documentary and candid, capturing genuine moments as they unfold. However, I'm flexible and can adapt to a variety of styles, ensuring that your photos reflect your vision and personal taste.",
  },
  // {
  //   question: "What is your pricing?",
  //   answer: (
  //     <>
  //       I offer a Starter Wedding Package starting at $
  //       {STARTER_WEDDING_PACKAGE_PRICE}, which includes 6+ hours of coverage, a
  //       second photographer, an engagement session, and an online gallery. For
  //       comprehensive coverage, my All-Inclusive Wedding Package is available
  //       for ${ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE}, with no hourly limits and
  //       added features. For other types of sessions—such as portraits,
  //       engagements, or events—rates begin at ${HOUR_RATE} per hour. To learn
  //       more about what's included or to discuss your specific needs, please
  //       visit my <Link href="/pricing">pricing page</Link> or{" "}
  //       <a href="mailto:kusakinphoto@gmail.com">contact</a> me directly.
  //     </>
  //   ),
  // },
  {
    question: "How do we reserve our wedding date?",
    answer:
      "I require a signed contract and a retainer to secure your date. Once both are received, your wedding is officially booked, and I'll be there to capture every moment. The remaining balance is due two weeks before your event.",
  },
  {
    question: "How many photos will we receive, and when can we expect them?",
    answer:
      "For weddings, you can generally expect 40–80 edited photos per hour of coverage, with a typical turnaround time of 4–8 weeks. I'll also provide a sneak peek within 48 hours so you can share highlights right away. For other types of sessions (engagements, portraits, events), the number of images and delivery times are discussed individually based on the scope of the project.",
  },
  {
    question: "How do you deliver the final images?",
    answer:
      "I deliver your high-resolution, edited images via a private online gallery. From there, you can download, share, and print them at your convenience. If you've chosen an album or prints, we'll work together to select your favorite images and design those products.",
  },
  {
    question: "How do you keep our photos safe?",
    answer:
      "I record each image on two memory cards simultaneously for instant redundancy. Once I return from your event, I create three separate backups—one on my main editing machine, one on a secure external drive, and one in cloud storage. I also keep the original files on the memory cards until your final gallery has been delivered, giving you maximum protection and peace of mind.",
  },
  {
    question: "Do you have backup equipment?",
    answer:
      "Absolutely. I always travel with backup gear, including an extra camera body, multiple lenses, and spare memory cards. This ensures that even if there's an unexpected issue, your coverage will continue uninterrupted.",
  },
];

const containerVariants = {
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
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function page() {
  return (
    <div>
      <SmallHero image={HeroImage} title="The Experience" subtitle="" />
      <motion.div className={styles.container}
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

      {/* <div
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
              Imagine a wedding day free from the stress of a ticking clock.
              When you work with me, you get just that. I offer full-day
              coverage exclusively, so you never have to worry about fitting
              your celebration into a tight photography schedule. There's no
              need to rush moments or stage things for the camera.
            </p>
            <br />
            <p>
              While the heart of my work is capturing candid, unscripted
              moments, we will absolutely make time for the important formal and
              family portraits you cherish. We'll plan this part of the day to
              be relaxed and efficient, capturing beautiful group photos without
              pulling you away from your celebration for too long.
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
      </div> */}
                
      <section className={styles.journeySection}>
        <div className={styles.journeyHeader}>
          <h2>It All Starts with a Connection</h2>
          <p>
            Building a real connection with you is the most crucial part of my
            process!<br/> Here's what our journey together looks like:
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

      <div className={styles.faq}>
        <h4
        >
          Frequently Asked Questions
        </h4>

        <motion.ul
          className={styles.faqList}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={item.question}
              index={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

const FAQItem = ({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <motion.li className={styles.itemContainer} variants={itemVariants}>
      <div className={styles.question}>
        <motion.span
          onClick={toggleFAQ}
          whileHover={{ x: 10 }}
          whileTap={{ x: 15 }}
        >
          {`0${index + 1}. `}
          {question}
        </motion.span>
        <div className={styles.underline}></div>
      </div>

      <motion.div
        className={styles.answer}
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div style={{ paddingTop: "1em", paddingBottom: "1em" }}>{answer}</div>
      </motion.div>
    </motion.li>
  );
};
