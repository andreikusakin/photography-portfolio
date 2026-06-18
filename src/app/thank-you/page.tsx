import React from "react";
import Link from "next/link";
import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./hero.jpg";
import styles from "./page.module.css";
import SubmissionSummary from "./SubmissionSummary";

export const metadata = {
  title: "Thank You | Andrew Kusakin Photography",
  robots: {
    index: false,
    follow: false,
  },
};

const steps = [
  {
    index: "01",
    text: "I'll personally review your details and check my availability for your date.",
  },
  {
    index: "02",
    text: "You'll hear back from me within 48 hours to set up a relaxed, no-pressure chat about your day.",
  },
];

export default function ThankYouPage() {
  return (
    <div>
      <SmallHero
        title="Message Sent!"
        image={HeroImage}
        subtitle="Thank you for reaching out"
        alt="A joyful wedding celebration by Andrew Kusakin"
      />

      <section className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>What Happens Next</p>
          <h2 className={styles.heading}>
            While you <em>wait</em>
          </h2>

          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step.index} className={styles.step}>
                <span className={styles.stepIndex} aria-hidden="true">
                  {step.index}
                </span>
                <span className={styles.stepText}>{step.text}</span>
              </li>
            ))}
          </ol>

          <Link href="/portfolio" className={styles.exploreLink}>
            <span className={styles.exploreLabel}>Explore the portfolio</span>
            <span className={styles.exploreArrow} aria-hidden="true">
              &rarr;
            </span>
          </Link>
        </div>

        <SubmissionSummary />
      </section>
    </div>
  );
}
