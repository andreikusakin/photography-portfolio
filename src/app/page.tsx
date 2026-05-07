import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Featured from "./components/Featured/Featured";
import Experience from "./components/Experience/Experience";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Philosophy from "./components/Philosophy/Philosophy";
import AboutPreview from "./components/AboutPreview/AboutPreview";

export default async function Home() {

  
  return (
    <>
      <Hero />
      {/* <Philosophy /> */}
      <Intro />
      <Featured />
      <AboutMe />
      {/* <AboutPreview /> */}
      <Experience />
      <GetInTouch />
    </>
  );
}
