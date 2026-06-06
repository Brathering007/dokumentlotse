import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { CtaLink } from "@/components/ui/CtaLink";
import type { AudienceConfig } from "@/types";

interface HeroProps {
  audience?: AudienceConfig;
}

const defaultHeadline = "Behördenbrief erhalten – und nicht verstanden?";
const defaultSubheadline =
  "DokumentenLotse erklärt komplizierte Post von Krankenkasse, Rentenversicherung, Reha und Arbeitsagentur in klare, einfache Sprache – mit Fristen und nächsten Schritten.";

export function Hero({ audience }: HeroProps) {
  const headline = audience?.headline ?? defaultHeadline;
  const subheadline = audience?.subheadline ?? defaultSubheadline;
  const badge = audience?.badge ?? "Verständnishilfe für Behördenpost";
  const ctaText = audience?.ctaText ?? "Kostenlos vormerken";

  return (
    <section className="bg-gradient-to-b from-navy-50 to-white px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-block rounded-full bg-accent-100 px-4 py-1.5 text-sm font-semibold text-accent-800">
          {badge}
        </p>
        <h1 className="text-3xl font-bold leading-tight text-navy-900 sm:text-4xl md:text-5xl">
          {headline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-600 sm:text-xl">
          {subheadline}
        </p>

        <ul className="mx-auto mt-6 flex max-w-md flex-col gap-2 text-left text-sm text-navy-700 sm:max-w-lg">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-accent-600" aria-hidden="true">✓</span>
            Fristen und wichtige Punkte verständlich erklärt
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-accent-600" aria-hidden="true">✓</span>
            Kein Behördendeutsch – einfache Sprache
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-accent-600" aria-hidden="true">✓</span>
            Kostenlos vormerken · Start demnächst
          </li>
        </ul>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CtaLink href="#warteliste" location="hero_primary">
            {ctaText}
          </CtaLink>
          <Link href="#beispiele">
            <Button variant="outline" size="lg">
              Beispiele ansehen
            </Button>
          </Link>
        </div>

        <p className="mt-4 text-sm text-navy-500">
          Dauert 30 Sekunden · Keine Kreditkarte · Jederzeit abmeldbar
        </p>

        {audience && (
          <p className="mt-4 text-sm">
            <Link href="/" className="font-medium text-navy-700 underline hover:text-navy-900">
              ← Zur allgemeinen Startseite
            </Link>
          </p>
        )}

        <Disclaimer className="mx-auto mt-8 max-w-xl" variant="banner" />
      </div>
    </section>
  );
}
