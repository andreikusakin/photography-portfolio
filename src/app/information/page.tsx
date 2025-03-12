"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import PageContainer from "../components/PageContainer/PageContainer";
import {
  ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE,
  HOUR_RATE,
  STARTER_WEDDING_PACKAGE_PRICE,
} from "@/lib/data";
import Image from "next/image";
import informationImage from "./../../../public/couples/alinabrandon/4.jpg"

const faqData = [
  {
    question: "Where are you located?",
    answer:
      "I’m based in Boston, Massachusetts and serve all of New England. However, I’m happy to travel anywhere in North America and beyond—just note that travel fees may apply for events outside of New England.",
  },
  {
    question: "What is your style?",
    answer:
      "My photography approach is primarily documentary and candid, capturing genuine moments as they unfold. However, I’m flexible and can adapt to a variety of styles, ensuring that your photos reflect your vision and personal taste.",
  },
  {
    question: "What is your pricing?",
    answer: (
      <>
        I offer a Starter Wedding Package starting at $
        {STARTER_WEDDING_PACKAGE_PRICE}, which includes 6+ hours of coverage, a
        second photographer, an engagement session, and an online gallery. For
        comprehensive coverage, my All-Inclusive Wedding Package is available
        for ${ALL_INCLUSIVE_WEDDING_PACKAGE_PRICE}, with no hourly limits and
        added features. For other types of sessions—such as portraits,
        engagements, or events—rates begin at ${HOUR_RATE} per hour. To learn
        more about what’s included or to discuss your specific needs, please
        visit my <Link href="/pricing">pricing page</Link> or{" "}
        <a href="mailto:kusakinphoto@gmail.com">contact</a> me directly.
      </>
    ),
  },
  {
    question: "How do we reserve our wedding date?",
    answer:
      "I require a signed contract and a retainer to secure your date. Once both are received, your wedding is officially booked, and I’ll be there to capture every moment. The remaining balance is due two weeks before your event.",
  },
  {
    question: "How many photos will we receive, and when can we expect them?",
    answer:
      "For weddings, you can generally expect 40–80 edited photos per hour of coverage, with a typical turnaround time of 4–8 weeks. I’ll also provide a sneak peek within 48 hours so you can share highlights right away. For other types of sessions (engagements, portraits, events), the number of images and delivery times are discussed individually based on the scope of the project.",
  },
  {
    question: "How do you deliver the final images?",
    answer:
      "I deliver your high-resolution, edited images via a private online gallery. From there, you can download, share, and print them at your convenience. If you’ve chosen an album or prints, we’ll work together to select your favorite images and design those products.",
  },
  {
    question: "How do you keep our photos safe?",
    answer:
      "I record each image on two memory cards simultaneously for instant redundancy. Once I return from your event, I create three separate backups—one on my main editing machine, one on a secure external drive, and one in cloud storage. I also keep the original files on the memory cards until your final gallery has been delivered, giving you maximum protection and peace of mind.",
  },
  {
    question: "Do you have backup equipment?",
    answer:
      "Absolutely. I always travel with backup gear, including an extra camera body, multiple lenses, and spare memory cards. This ensures that even if there’s an unexpected issue, your coverage will continue uninterrupted.",
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
    <PageContainer>
      <div style={{ fontSize: "1.2em", fontWeight: 400}}>
      <h2 className={styles.page_title}>Information</h2>
      <span className={styles.line}></span>
      <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            src={informationImage}
            alt="faq image"
           
            quality={95}
            fill
            placeholder="blur"
          />
        </motion.div>
      <div className={styles.grid}>
        <motion.h5
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Frequently Asked Questions
        </motion.h5>
        
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
      </div></div>
    </PageContainer>
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
        <motion.div
          onClick={toggleFAQ}
          whileHover={{ x: 10 }}
          whileTap={{ x: 15 }}
        >
          {`0${index + 1}. `}
          {question}
        </motion.div>
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
