import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";

export default async function Home() {
  return (
    <>
      <Hero />
      <Welcome />
    </>
  );
}
