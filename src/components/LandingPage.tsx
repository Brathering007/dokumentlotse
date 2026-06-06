import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Problem } from "@/components/sections/Problem";
import { Scenarios } from "@/components/sections/Scenarios";
import { SocialProof } from "@/components/sections/SocialProof";
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
        <TrustBar />
        <Problem highlight={audience?.problemHighlight} />
        <Scenarios />
        <SocialProof />
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
