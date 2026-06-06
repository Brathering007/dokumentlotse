import { problemItems } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Problem() {
  return (
    <Section id="problem" background="white">
      <SectionHeader
        title="Kennst du das?"
        subtitle="Behördenpost kann überfordern – besonders wenn es um Gesundheit, Rente oder Arbeit geht."
      />
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
