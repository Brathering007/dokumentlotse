import Link from "next/link";
import { audiences } from "@/data/audiences";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function AudienceLinks() {
  return (
    <Section id="zielgruppen" background="white">
      <SectionHeader
        title="Für deine Art von Brief"
        subtitle="Spezialisierte Einstiegsseiten – gleiche App, aber mit Fokus auf dein Thema."
      />
      <ul className="grid gap-3 sm:grid-cols-2">
        {Object.values(audiences).map((audience) => (
          <li key={audience.slug}>
            <Link href={`/fuer/${audience.slug}`}>
              <Card className="transition-shadow hover:shadow-md">
                <p className="text-sm font-semibold text-accent-700">{audience.badge}</p>
                <h3 className="mt-1 text-lg font-bold text-navy-900">{audience.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">
                  {audience.problemHighlight}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-navy-700">
                  Mehr erfahren →
                </span>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
