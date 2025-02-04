import Hero from "./components/Hero/Hero";

export default async function Home() {
  return (
    <main>
      <Hero />
      <div style={{ backgroundColor: "blue", height: "100vh" }}></div>
    </main>
  );
}
