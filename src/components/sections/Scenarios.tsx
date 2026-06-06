import { CtaLink } from "@/components/ui/CtaLink";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { userScenarios } from "@/data/scenarios";

export function Scenarios() {
  return (
    <Section id="situationen" background="light">
      <SectionHeader
        title="Kommt dir das bekannt vor?"
        subtitle="DokumentenLotse richtet sich an genau diese Alltagssituationen – nicht an „alle Dokumente der Welt“."
      />
      <ul className="grid gap-3 sm:grid-cols-2">
        {userScenarios.map((scenario) => (
          <li key={scenario.id}>
            <Card className="h-full">
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {scenario.emoji}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-700">
                    {scenario.category}
                  </p>
                  <h3 className="mt-0.5 font-semibold text-navy-900">{scenario.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600">
                    {scenario.description}
                  </p>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <CtaLink href="#warteliste" location="scenarios">
          Das kenne ich – kostenlos vormerken
        </CtaLink>
      </div>
    </Section>
  );
}
