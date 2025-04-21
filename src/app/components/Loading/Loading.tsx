import React from "react";
import * as motion from "motion/react-client"
import styles from "./Loading.module.css";

export default function Loading() {  

  return (
    <motion.div className={styles.container}
      initial={{ display: 'flex', opacity: 1 }}
      animate={{ display: 'none', opacity: 0 }}
      transition={{ duration: 0.1, delay: 1 }}
    >
      <div className={styles.overlay}>
        <motion.div
          className={styles.text}
        >
          Andrew Kusakin Photography
        </motion.div>
      </div>
    </motion.div>
  );
}
