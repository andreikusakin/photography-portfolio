"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./Highlights.module.css";


// Render the set this many times. The middle copy is the one the user "lives"
// in; the identical copies on either side give the strip somewhere to loop into.
const COPIES = 5;
// Index of the copy we keep the user parked in (the middle one).
const MIDDLE = Math.floor(COPIES / 2);

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Props = {
  images: StaticImageData[];
  /** Base alt text; the slide number is appended automatically. */
  alt?: string;
};

export default function Highlights({ images, alt = "Highlight" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const loopWidth = useRef(0);
  const stopTimer = useRef<number | null>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });
  const activeSlide = useRef<HTMLElement | null>(null);

  const count = images.length;
  const loopImages = Array.from({ length: COPIES }, () => images).flat();

  // Distance between a slide and its twin one copy over = exactly one loop. Using
  // the gap between equivalent slides keeps the math exact regardless of gaps.
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.children[0] as HTMLElement | undefined;
    const firstNext = track.children[count] as HTMLElement | undefined;
    if (first && firstNext) {
      loopWidth.current = firstNext.offsetLeft - first.offsetLeft;
    }
  }, [count]);

  const markActive = (slide: HTMLElement) => {
    if (activeSlide.current === slide) return;
    activeSlide.current?.classList.remove(styles.active);
    slide.classList.add(styles.active);
    activeSlide.current = slide;
  };

  const detectActive = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    const slides = Array.from(track.children) as HTMLElement[];
    let nearest = slides[0];
    let best = Infinity;
    for (const slide of slides) {
      const d = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      if (d < best) { best = d; nearest = slide; }
    }
    markActive(nearest);
  };

  const centerSlide = (slide: HTMLElement, smooth: boolean) => {
    const track = trackRef.current;
    if (!track) return;
    const left = slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2;
    if (smooth) track.scrollTo({ left, behavior: "smooth" });
    else track.scrollLeft = left;
    markActive(slide);
  };

  // Park the scroll position inside the middle copy [loop, 2*loop). Because every
  // copy is identical, shifting by a whole loop width is visually invisible — the
  // same image stays centered. Called only once motion has stopped, so we never
  // interrupt native momentum mid-flick.
  const normalize = () => {
    const track = trackRef.current;
    const loop = loopWidth.current;
    if (!track || !loop) return;
    // Shift by whole copies to keep the user near the middle copy. Rounding
    // creates a deadzone, so small drifts — like centering a narrow portrait,
    // which dips scrollLeft a little — never wrap; only a full-copy drift does.
    const home = loop * MIDDLE;
    const k = Math.round((track.scrollLeft - home) / loop);
    if (k !== 0) track.scrollLeft -= k * loop;
  };

  // Start centered on the first image of the middle copy.
  useIsoLayoutEffect(() => {
    measure();
    const firstMiddle = trackRef.current?.children[MIDDLE * count] as HTMLElement | undefined;
    if (firstMiddle) centerSlide(firstMiddle, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (stopTimer.current) window.clearTimeout(stopTimer.current);
    };
  }, [measure]);

  const onScroll = () => {
    detectActive();
    if (stopTimer.current) window.clearTimeout(stopTimer.current);
    stopTimer.current = window.setTimeout(normalize, 140);
  };

  // Arrow buttons: center the image immediately next to the one currently centered.
  const step = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    const slides = Array.from(track.children) as HTMLElement[];
    let nearest = 0;
    let best = Infinity;
    slides.forEach((slide, i) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    const target = slides[nearest + direction];
    if (target) centerSlide(target, true);
  };

  // Click-and-drag scrolling for mouse / pen. Touch is left to native scrolling.
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    const track = trackRef.current;
    if (!track) return;
    drag.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft, moved: false };
    track.setPointerCapture(e.pointerId);
    track.classList.add(styles.dragging); // suspend snap + show grabbing cursor
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const track = trackRef.current;
    if (!track) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    track.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    trackRef.current?.releasePointerCapture(e.pointerId);
    trackRef.current?.classList.remove(styles.dragging); // restore snap → settles to nearest
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div className={styles.highlights}>
      <div
        className={styles.track}
        ref={trackRef}
        // Let native touch scrolling run inside the strip instead of Lenis
        // hijacking the gesture for the page.
        data-lenis-prevent-touch=""
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        role="region"
        aria-label={`${alt}s carousel`}
      >
        {loopImages.map((image, i) => (
          <div
            className={styles.slide}
            key={i}
            aria-hidden={Math.floor(i / count) !== MIDDLE}
          >
            <Image
              src={image}
              alt={`${alt} ${(i % count) + 1}`}
              className={styles.image}
              placeholder="blur"
              sizes="(max-width: 767px) 88vw, 38vw"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Previous highlight"
          onClick={() => step(-1)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Next highlight"
          onClick={() => step(1)}
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
