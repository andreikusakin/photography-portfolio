"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./status.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.wrapper}>
      <p className={styles.eyebrow}>Something went wrong</p>
      <h1 className={styles.heading}>
        A momentary <em>blur</em>
      </h1>
      <p className={styles.message}>
        Something went wrong on our end. Please try again, and if it keeps
        happening, reach out and I&apos;ll take a look.
      </p>
      <div className={styles.actions}>
        <button type="button" onClick={reset} className={styles.button}>
          Try Again
        </button>
        <Link href="/" className={styles.textLink}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
