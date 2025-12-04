import React from "react";
import SmallHero from "../components/SmallHero/SmallHero";
import HeroImage from "./hero.jpg";
import styles from "./page.module.css";

export const metadata = {
  title: "Thank You | Andrew Kusakin Photography",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div>
      <SmallHero
        title="Message Sent!"
        image={HeroImage}
        subtitle="Thank you for reaching out. I'll be in touch within 48 hours."
      />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>What happens next?</h2>
          <p>
            I will review your details and check my availability. You can expect
            an email or text from me shortly to schedule a quick chat.
          </p>
        </div>
      </div>
    </div>
  );
}
