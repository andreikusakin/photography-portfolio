import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import LenisScroll from "./components/LenisScroll/LenisScroll";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import Image1 from "./../../public/wedding/valeriejoseph/7.jpg";
import ImageSection from "./components/ImageSection/ImageSection";

export default async function Home() {
  return (
    <LenisScroll>
      {/* <Loading /> */}
      <Hero />
      <Intro />
      <AboutMe />
      <ImageSection image={Image1}/>
      <PortfolioSection />
    </LenisScroll>
  );
}
