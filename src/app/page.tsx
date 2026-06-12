import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Marquee from "./components/Marquee/Marquee";
import Philosophy from "./components/Philosophy/Philosophy";
import Featured from "./components/Featured/Featured";
import Experience from "./components/Experience/Experience";
import GetInTouch from "./components/GetInTouch/GetInTouch";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Featured />
      <Philosophy />
      <AboutMe />
      <Experience />
      <GetInTouch />
    </>
  );
}
