import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Featured from "./components/Featured/Featured";
import Experience from "./components/Experience/Experience";
import GetInTouch from "./components/GetInTouch/GetInTouch";

export default async function Home() {

  
  return (
    <>
      <Hero />
      <Intro />
      <Featured />
      <AboutMe />
      <Experience />
      <GetInTouch />
    </>
  );
}
