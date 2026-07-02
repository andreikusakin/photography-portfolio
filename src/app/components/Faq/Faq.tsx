'use client'

import React, { useState } from "react";
import styles from "./Faq.module.css";
import { motion } from "motion/react";
import JsonLd from "../JsonLd/JsonLd";

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
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const customEase = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.06 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: "1em" },
  show: { opacity: 1, y: "0em", transition: { duration: 0.6, ease: customEase } },
};

export default function Faq() {
  return (
    <section className={styles.faq}>
      <JsonLd data={faqSchema} />

      <div className={styles.header}>
        <p className={styles.eyebrow}>Good to Know</p>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
      </div>

      <motion.ul
        className={styles.list}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
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
    </section>
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
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.li className={styles.item} variants={itemVariants}>
      <h3 className={styles.questionHeading}>
        <button
          id={buttonId}
          type="button"
          className={`${styles.question} ${isOpen ? styles.questionOpen : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className={styles.index}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={styles.questionText}>{question}</span>
          <span className={styles.indicator} aria-hidden="true"></span>
        </button>
      </h3>

      <motion.div
        id={panelId}
        aria-labelledby={buttonId}
        className={styles.answer}
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.45, ease: customEase }}
      >
        <p className={styles.answerText}>{answer}</p>
      </motion.div>
    </motion.li>
  );
};
