"use client";

import { useEffect } from "react";

// Catches errors thrown in the root layout itself. It replaces the entire
// document, so it can't use the app's fonts/CSS — keep it self-contained.
export default function GlobalError({
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
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
          backgroundColor: "#2c2c2c",
          color: "#f5f0eb",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <h1 style={{ fontWeight: 400, fontSize: "2rem", margin: 0 }}>
          A momentary blur
        </h1>
        <p style={{ maxWidth: "30em", lineHeight: 1.7, opacity: 0.8 }}>
          Something went wrong. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "1rem",
            padding: "0.9rem 1.8rem",
            background: "none",
            border: "1px solid rgba(245, 240, 235, 0.6)",
            color: "#f5f0eb",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            fontSize: "0.8rem",
            cursor: "pointer",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
