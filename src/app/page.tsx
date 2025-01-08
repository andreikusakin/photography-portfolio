import Image from "next/image";
import styles from "./page.module.css";
import { MotionDiv } from "./components/MotionDiv/MotionDiv";
import Hero from "./components/Hero/Hero";

export default async function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
