import { Card } from "@/components/ui/Card";
import { Disclaimer } from "@/components/ui/Disclaimer";
import type { DocumentAnalysis } from "@/lib/analysis/types";

interface AnalysisResultProps {
  analysis: DocumentAnalysis;
}

function SectionBlock({
  title,
  children,
  highlight,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <Card className={highlight ? "border-accent-200 bg-accent-50/50" : ""}>
      <h3 className="text-base font-bold text-navy-900 sm:text-lg">{title}</h3>
      <div className="mt-3">{children}</div>
    </Card>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (items.length === 0) {
    return <p className="text-navy-600">Keine Angaben erkannt.</p>;
  }
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-navy-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function AnalysisResult({ analysis }: AnalysisResultProps) {
  const deadlines =
    analysis.deadlines.length > 0
      ? analysis.deadlines
      : ["Keine eindeutige Frist erkannt."];

  return (
    <div className="space-y-4" role="region" aria-label="Analyseergebnis">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-navy-100 bg-navy-50 px-4 py-3">
        <p className="text-sm font-semibold text-navy-800">Analyse abgeschlossen</p>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-navy-600">
          Vertrauen: {analysis.confidence}
        </span>
      </div>

      <SectionBlock title="Worum geht es?">
        <p className="leading-relaxed text-navy-700">{analysis.summary}</p>
      </SectionBlock>

      <SectionBlock title="Wer hat das Schreiben verschickt?">
        <p className="font-medium text-navy-800">{analysis.sender}</p>
      </SectionBlock>

      <SectionBlock title="Was wird von mir verlangt?">
        <BulletList items={analysis.requirements} />
      </SectionBlock>

      <SectionBlock title="Fristen" highlight>
        <ul className="space-y-2">
          {deadlines.map((deadline) => (
            <li
              key={deadline}
              className="flex items-start gap-2 rounded-lg border border-accent-200 bg-white px-3 py-2.5 text-sm font-medium text-navy-900"
            >
              <span className="text-accent-600" aria-hidden="true">
                ⏰
              </span>
              {deadline}
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock title="Was sollte ich jetzt tun?">
        <ol className="space-y-2">
          {analysis.next_steps.map((step, index) => (
            <li key={step} className="flex items-start gap-3 text-navy-700">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-700 text-xs font-bold text-white">
                {index + 1}
              </span>
              <span className="pt-0.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </SectionBlock>

      <SectionBlock title="Wichtiger Hinweis">
        <Disclaimer variant="inline" />
        <p className="mt-3 text-sm leading-relaxed text-navy-600">
          Diese Analyse dient nur der Verständnishilfe. Es gibt keine Gewähr für Vollständigkeit
          oder Richtigkeit. Prüfe wichtige Entscheidungen immer selbst oder hole dir professionelle
          Beratung.
        </p>
      </SectionBlock>
    </div>
  );
}
