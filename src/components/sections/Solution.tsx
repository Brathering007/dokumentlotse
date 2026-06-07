import { solutionSteps } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Solution() {
  return (
    <Section id="loesung" background="light">
      <SectionHeader
        title="So funktioniert DokumentenLotse"
        subtitle="Ein einfacher Ablauf – im Demo-Modus oben direkt testbar."
      />
      <ol className="space-y-6">
        {solutionSteps.map((step) => (
          <li key={step.step} className="flex gap-4">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-700 text-lg font-bold text-white"
              aria-hidden="true"
            >
              {step.step}
            </span>
            <div className="pt-1">
              <h3 className="text-lg font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-1 leading-relaxed text-navy-600">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-900">
        <strong>Demo verfügbar:</strong> Lade oben ein PDF hoch und teste die Analyse kostenlos (1×
        pro Tag). Für den vollen Start kannst du dich in die Warteliste eintragen.
      </p>
    </Section>
  );
}
