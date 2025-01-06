"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import PageContainer from "../components/PageContainer/PageContainer";

export default function page() {
  return (
    <PageContainer>
      <motion.h1
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        FAQ
      </motion.h1>
      <div className={styles.faq_item}>
        <h2>What is your pricing?</h2>
        <div>
          I offer one all-inclusive wedding package for $5,000, which covers
          full-day photography and provides a curated selection of edited
          images. For other types of sessions—such as portraits, engagements, or
          events—rates begin at $450 per hour. To learn more about what’s
          included or to discuss your specific needs, please visit my{" "}
          <Link href="/pricing">pricing page</Link> or{" "}
          <a href="mailto:kusakinphoto@gmail.com">contact</a> me directly.
        </div>
      </div>
      <div className={styles.faq_item}>
        <h2>Why do you offer only one wedding package?</h2>
        <div>
          I know weddings can be stressful, and I want you to have the peace of
          mind that every detail will be captured—without worrying about time
          limits. That’s why I include unlimited hours in my single
          all-inclusive package. I also bring along a second photographer so we
          don’t miss any of the special moments unfolding throughout your day.
          This approach helps me ensure comprehensive coverage and lets you
          focus on what matters most: celebrating your wedding.
        </div>
      </div>
      <div className={styles.faq_item}>
        <h2>How many photos will we receive, and when can we expect them?</h2>
        <div>
          While every wedding is different, you can generally expect about
          50–100 final images per hour of coverage. My usual turnaround time is
          4–8 weeks for weddings, depending on the season and workload. I’ll
          provide a sneak peek shortly after your event so you can share a few
          highlights right away.
        </div>
      </div>
      <div className={styles.faq_item}>
        <h2>How do you deliver the final images?</h2>
        <div>
          I deliver your high-resolution, edited images via a private online
          gallery. From there, you can download, share, and print them at your
          convenience. If you’ve chosen an album or prints, we’ll work together
          to select your favorite images and design those products.
        </div>
      </div>
      <div className={styles.faq_item}>
        <h2>Are you insured and do you have backup equipment?</h2>
        <div>
          Yes. I carry liability insurance, which many venues require. I also
          bring backup cameras, lenses, and memory cards to ensure I’m prepared
          for any equipment issues and that your wedding coverage is
          uninterrupted.
        </div>
      </div>
    </PageContainer>
  );
}
