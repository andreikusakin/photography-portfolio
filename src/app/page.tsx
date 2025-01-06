import Image from "next/image";
import styles from "./page.module.css";
import { s } from "motion/react-client";

const images = [
  {
    src: "/wedding/highlights/1.jpg",
    alt: "wedding",
    width: 1500,
    height: 1000,
  },
];

export default async function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.imageContainer}>
            <Image
              src="/wedding/highlights/1.jpg"
              alt="wedding"
              height={1500}
              width={1500}
              quality={90}
            />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/wedding/orbreybrett/10.jpg"
              alt="wedding"
              height={1500}
              width={1500}
              quality={90}
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.imageContainer}>
            <Image src="/wedding/highlights/1.jpg" alt="wedding" fill />
          </div>
        </div>
      </div>
    </main>
  );
}
