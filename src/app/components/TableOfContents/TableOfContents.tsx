"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/extractHeadings";
import styles from "./TableOfContents.module.css";

interface Props {
  headings: Heading[];
}

export default function TableOfContents({ headings }: Props) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className={styles.toc} aria-label="Table of contents">
      <p className={styles.label}>Contents</p>
      <ul className={styles.list} data-lenis-prevent>
        {headings.map((heading) => {
          const classes = [
            styles.item,
            heading.level === 3 ? styles.nested : "",
            activeId === heading.id ? styles.active : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <li key={heading.id} className={classes}>
              <a href={`#${heading.id}`} className={styles.link}>
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
