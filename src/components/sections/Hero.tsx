import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { ProductMockup } from "@/components/sections/ProductMockup";
import { HeroWaitlistForm } from "@/components/sections/HeroWaitlistForm";
import { defaultHeroCopy, heroTrustItems } from "@/data/hero";
import type { AudienceConfig } from "@/types";

interface HeroProps {
  audience?: AudienceConfig;
}

export function Hero({ audience }: HeroProps) {
  const headline = audience?.headline ?? defaultHeroCopy.headline;
  const subheadline = audience?.subheadline ?? defaultHeroCopy.subheadline;
  const badge = audience?.badge ?? "Für Krankengeld, Rente, Reha & Arbeitsagentur";
  const source = audience?.slug ?? "general";

  return (
    <section className="overflow-hidden bg-gradient-to-b from-navy-50 via-white to-white px-5 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Text + Warteliste */}
          <div className="text-center lg:text-left">
            <p className="mb-4 inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-semibold text-accent-800">
              {badge}
            </p>
            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-4xl lg:text-[2.65rem]">
              {headline}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-600 lg:mx-0 sm:text-xl">
              {subheadline}
            </p>

            {/* Vertrauen */}
            <ul className="mx-auto mt-6 grid max-w-md gap-2 text-left sm:grid-cols-2 lg:mx-0 lg:max-w-none">
              {heroTrustItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy-700">
                  <span className="mt-0.5 shrink-0 font-bold text-accent-600" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Inline-Warteliste */}
            <div className="mt-8">
              <HeroWaitlistForm
                source={source}
                defaultDocumentInterest={audience?.documentInterest}
              />
            </div>

            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link href="#beispiele">
                <Button variant="outline" size="md">
                  Beispiele ansehen
                </Button>
              </Link>
              {audience && (
                <Link
                  href="/"
                  className="text-sm font-medium text-navy-600 underline hover:text-navy-900"
                >
                  ← Zur Startseite
                </Link>
              )}
            </div>

            <Disclaimer className="mt-6 lg:text-left" variant="banner" />
          </div>

          {/* Produkt-Mockup – auf Mobile unter Text & Warteliste */}
          <div>
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
