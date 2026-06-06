import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { problemItems } from "@/data/content";

interface ProblemProps {
  highlight?: string;
}

export function Problem({ highlight }: ProblemProps) {
  return (
    <Section id="problem" background="white">
      <SectionHeader
        title="Kennst du das?"
        subtitle="Behördenpost kann überfordern – besonders wenn es um Gesundheit, Rente oder Arbeit geht."
      />
      {highlight && (
        <p className="mb-6 rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-center text-sm font-medium text-accent-900">
          {highlight}
        </p>
      )}
      <ul className="grid gap-4">
        {problemItems.map((item) => (
          <li key={item.title}>
            <Card>
              <h3 className="text-lg font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-navy-600">{item.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
