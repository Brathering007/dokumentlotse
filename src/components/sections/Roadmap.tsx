import { roadmapVersions } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Roadmap() {
  return (
    <Section id="roadmap" background="light">
      <SectionHeader
        title="Geplante Funktionen"
        subtitle="Schritt für Schritt – von der einfachen Erklärung bis zum Familienmodus."
      />
      <div className="space-y-4">
        {roadmapVersions.map((version, index) => (
          <Card key={version.version}>
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-sm font-bold text-accent-800">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-accent-700">{version.version}</p>
                <h3 className="text-lg font-bold text-navy-900">{version.title}</h3>
                <ul className="mt-3 space-y-2">
                  {version.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-navy-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
