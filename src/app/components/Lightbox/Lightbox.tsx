"use client";

import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Photo from "../Photo/Photo";
import styles from "./Lightbox.module.css";

interface ImageData {
  alt: string;
  src: string;
  width: number;
  height: number;
}

export default function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: ImageData[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const count = images.length;

  const showPrev = useCallback(
    () => onNavigate((index - 1 + count) % count),
    [onNavigate, index, count]
  );
  const showNext = useCallback(
    () => onNavigate((index + 1) % count),
    [onNavigate, index, count]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, showPrev, showNext]);

  useEffect(() => {
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = previousOverflow;
    };
  }, []);

  const image = images[index];

  return createPortal(
    <motion.div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      data-lenis-prevent
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      <button
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="Close fullscreen view"
      >
        <FiX />
      </button>
      <button
        type="button"
        className={`${styles.nav} ${styles.prev}`}
        onClick={(e) => {
          e.stopPropagation();
          showPrev();
        }}
        aria-label="Previous image"
      >
        <FiChevronLeft />
      </button>
      <Photo
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="100vw"
        priority
        className={styles.image}
        style={{ width: "auto", height: "auto" }}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        className={`${styles.nav} ${styles.next}`}
        onClick={(e) => {
          e.stopPropagation();
          showNext();
        }}
        aria-label="Next image"
      >
        <FiChevronRight />
      </button>
    </motion.div>,
    document.body
  );
}
