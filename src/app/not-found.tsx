import Link from "next/link";
import styles from "./status.module.css";

export const metadata = {
  title: "Page Not Found | Andrew Kusakin Photography",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className={styles.wrapper}>
      <p className={styles.eyebrow}>Error 404</p>
      <h1 className={styles.heading}>
        This page slipped <em>out of frame</em>
      </h1>
      <p className={styles.message}>
        The page you&apos;re looking for may have moved or no longer exists.
        Let&apos;s get you back to something beautiful.
      </p>
      <div className={styles.actions}>
        <Link href="/" className={styles.button}>
          Back to Home
        </Link>
        <Link href="/portfolio" className={styles.textLink}>
          Browse the portfolio
        </Link>
      </div>
    </main>
  );
}
