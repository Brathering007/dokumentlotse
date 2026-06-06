import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { ExampleAnalyses } from "@/components/sections/ExampleAnalyses";
import { Roadmap } from "@/components/sections/Roadmap";
import { Trust } from "@/components/sections/Trust";
import { Waitlist } from "@/components/sections/Waitlist";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ExampleAnalyses />
        <Roadmap />
        <Trust />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
