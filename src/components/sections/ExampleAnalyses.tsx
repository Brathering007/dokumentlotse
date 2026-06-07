"use client";

import { useState } from "react";
import { exampleAnalyses } from "@/data/examples";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Disclaimer } from "@/components/ui/Disclaimer";

export function ExampleAnalyses() {
  const [activeId, setActiveId] = useState(exampleAnalyses[0].id);
  const active = exampleAnalyses.find((e) => e.id === activeId) ?? exampleAnalyses[0];

  return (
    <Section id="beispiele" background="white">
      <SectionHeader
        title="Beispielanalysen"
        subtitle="So könnte DokumentenLotse komplizierte Briefe erklären – mit fiktiven Demo-Texten."
      />

      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Beispielauswahl">
        {exampleAnalyses.map((example) => {
          const tabId = `example-tab-${example.id}`;
          const panelId = `example-panel-${example.id}`;
          return (
          <button
            key={example.id}
            id={tabId}
            role="tab"
            aria-selected={activeId === example.id}
            aria-controls={panelId}
            onClick={() => setActiveId(example.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              activeId === example.id
                ? "bg-navy-700 text-white"
                : "bg-navy-100 text-navy-700 hover:bg-navy-200"
            }`}
          >
            {example.category}
          </button>
          );
        })}
      </div>

      <div
        id={`example-panel-${active.id}`}
        role="tabpanel"
        aria-labelledby={`example-tab-${active.id}`}
      >
      <Card>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent-700">
          {active.category}
        </p>
        <h3 className="mt-1 text-xl font-bold text-navy-900">{active.title}</h3>

        <div className="mt-6 space-y-5">
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-navy-500">
              Originalauszug (kompliziert)
            </h4>
            <p className="rounded-xl bg-navy-50 p-4 text-sm leading-relaxed text-navy-700 italic">
              {active.originalExcerpt}
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-600">
              Einfache Erklärung
            </h4>
            <p className="leading-relaxed text-navy-800">{active.simpleExplanation}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-navy-100 bg-white p-4">
              <h4 className="text-sm font-semibold text-navy-500">Mögliche Frist</h4>
              <p className="mt-1 font-medium text-navy-900">{active.possibleDeadline}</p>
            </div>
            <div className="rounded-xl border border-navy-100 bg-white p-4">
              <h4 className="text-sm font-semibold text-navy-500">Mögliche Aufgabe</h4>
              <p className="mt-1 font-medium text-navy-900">{active.possibleTask}</p>
            </div>
          </div>
        </div>
      </Card>
      </div>

      <Disclaimer className="mt-6" variant="banner" />
    </Section>
  );
}
