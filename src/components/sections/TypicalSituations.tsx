import { typicalSituations } from "@/data/positioning";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function TypicalSituations() {
  return (
    <Section id="typische-situationen" background="light">
      <SectionHeader
        title="Typische Situationen"
        subtitle="Genau für diese Fälle entwickeln wir DokumentenLotse – realistische Alltagsszenarien aus Krankenkasse, Rente, Reha und Arbeitsagentur."
      />

      <ul className="space-y-4">
        {typicalSituations.map((situation) => (
          <li key={situation.id}>
            <Card>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-accent-700">
                    {situation.area}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-navy-900">{situation.title}</h3>
                  <p className="mt-2 leading-relaxed text-navy-600">{situation.description}</p>
                </div>
                {situation.urgency && (
                  <span className="shrink-0 self-start rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-800">
                    {situation.urgency}
                  </span>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
