"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Scroll-reveal wrapper: fades content up as it enters the viewport.
 *  Matches the site-wide motion idiom (Intro, SmallHero, etc.). */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: "3em" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
