"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./PageContainer.module.css";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={styles.container}
    >
      {children}
    </motion.div>
  );
}
