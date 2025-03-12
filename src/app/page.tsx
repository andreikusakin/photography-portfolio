import Hero from "./components/Hero/Hero";
import LenisScroll from "./components/LenisScroll/LenisScroll";
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import Welcome from "./components/Welcome/Welcome";

export default async function Home() {
  return (
    <LenisScroll>
      <Hero />
      <Welcome />
      <PortfolioSection />
    </LenisScroll>
  );
}
