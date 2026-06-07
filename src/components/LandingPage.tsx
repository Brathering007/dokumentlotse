import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { DemoAnalyze } from "@/components/sections/DemoAnalyze";
import { WhyNotChatGPT } from "@/components/sections/WhyNotChatGPT";
import { FamiliarSituations } from "@/components/sections/FamiliarSituations";
import { TypicalSituations } from "@/components/sections/TypicalSituations";
import { Problem } from "@/components/sections/Problem";
import { CommonChallenges } from "@/components/sections/CommonChallenges";
import { Solution } from "@/components/sections/Solution";
import { ExampleAnalyses } from "@/components/sections/ExampleAnalyses";
import { Comparison } from "@/components/sections/Comparison";
import { Roadmap } from "@/components/sections/Roadmap";
import { FAQ } from "@/components/sections/FAQ";
import { Trust } from "@/components/sections/Trust";
import { Waitlist } from "@/components/sections/Waitlist";
import { AudienceLinks } from "@/components/sections/AudienceLinks";
import type { AudienceConfig } from "@/types";

interface LandingPageProps {
  audience?: AudienceConfig;
  showAudienceLinks?: boolean;
}

export function LandingPage({ audience, showAudienceLinks = true }: LandingPageProps) {
  return (
    <>
      <Header />
      <main>
        <Hero audience={audience} />
        <DemoAnalyze />
        <WhyNotChatGPT />
        <FamiliarSituations />
        <TypicalSituations />
        <Problem highlight={audience?.problemHighlight} />
        <CommonChallenges />
        <Solution />
        <ExampleAnalyses />
        <Comparison />
        {showAudienceLinks && !audience && <AudienceLinks />}
        <Roadmap />
        <FAQ />
        <Trust />
        <Waitlist
          defaultDocumentInterest={audience?.documentInterest}
          source={audience?.slug ?? "general"}
        />
      </main>
      <Footer />
    </>
  );
}
