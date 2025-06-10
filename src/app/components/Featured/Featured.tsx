"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./Featured.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";

interface Gallery {
  title: string;
  heroImage: string;
  smallImage: string;
  link: string;
  location: string;
}

const galleries: Gallery[] = [
  {
    title: "Alexandra + Adam",
    heroImage: "/weddings/alex-adam/000046.jpg",
    smallImage: "/weddings/alex-adam/000045.jpg",
    link: "/wedding/alex-adam",
    location: "Glen Island Harbour Club, New York",
  },
  {
    title: "Maddy + Alex",
    heroImage: "/weddings/maddy-alex/000130.jpg",
    smallImage: "/weddings/maddy-alex/000050.jpg",
    link: "/wedding/maddy-alex",
    location: "Smith Farm Gardens, Connecticut",
  },
  {
    title: "Amy + Charlie",
    heroImage: "/weddings/amy-charlie/000079.jpg",
    smallImage: "/weddings/amy-charlie/000099.jpg",
    link: "/wedding/amy-charlie",
    location: "he Evermore at Peirce Farm Estate, Massachusetts",
  },
  // {
  //   title: "Veronica + Joseph",
  //   heroImage: VeronicaJoseph1,
  //   smallImage: VeronicaJoseph2,
  //   link: "/wedding/veronicajoseph",
  //   location: "Harborside Hotel, Maine",
  // },
  // {
  //   title: "Valerie + Joseph",
  //   heroImage: ValerieJoseph1,
  //   smallImage: ValerieJoseph2,
  //   link: "/wedding/valeriejoseph",
  //   location: "The Barn At Gibbet Hill, Massachusetts",
  // },
  // {
  //   title: "Orbrey + Brett",
  //   heroImage: OrbreyBrett1,
  //   smallImage: OrbreyBrett2,
  //   link: "/wedding/orbreybrett",
  //   location: "Shepherd's Run, Rhode Island",
  // },

];

const container = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

const title = {
  initial: { x: 50, opacity: 0 }, // starts right, invisible
  animate: { x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } },
  exit: { x: -50, opacity: 0, transition: { duration: 1 } }, // exits left
};

function GalleryItem({ gallery }: { gallery: Gallery }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.div
      className={styles.gallery}
      variants={container}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={ref}
    >
      <Link href={gallery.link} className={styles.link}>
        {/* IMAGE (parallax y already defined) */}
        <div className={styles.overlay}>
          <motion.div className={styles.imageWrapper} style={{ y }}>
            <Image
              src={gallery.heroImage}
              alt={gallery.title}
              className={styles.image}
              width={1500}
              height={900}
    
              quality={80}
             
            />
          </motion.div>
          <motion.div className={styles.title} variants={title}>
            <h2>{gallery.title}</h2>
            <div className={styles.location}>{gallery.location}</div>
          </motion.div>
        </div>

        {/* TITLE & LOCATION */}

        {/* SMALL IMAGE – unchanged */}
        <div className={styles.smallImageWrapper}>
          <Image
            src={gallery.smallImage}
            alt={gallery.title}
            className={styles.smallImage}
            width={600}
            height={900}
          />
        </div>
      </Link>
    </motion.div>
  );
}

export default function Featured() {
  const [index, setIndex] = useState(0);

  // ⏱ cycle every 5 s
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % galleries.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  const activeGallery = galleries[index];

  return (
    <div className={styles.wrapper}>
        
      <h4 className={styles.heading}>Featured Galleries</h4>

      {/* only one gallery in the DOM at a time */}
      <AnimatePresence mode="sync">
        <GalleryItem key={activeGallery.title} gallery={activeGallery} />
      </AnimatePresence>
    </div>
  );
}
