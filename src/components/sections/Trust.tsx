import { trustPoints } from "@/data/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Disclaimer } from "@/components/ui/Disclaimer";

export function Trust() {
  return (
    <Section id="vertrauen" background="dark">
      <SectionHeader
        title="Vertrauen & Transparenz"
        subtitle="Ehrlichkeit ist uns wichtig – besonders bei sensiblen Themen wie Behördenpost."
        light
      />
      <ul className="space-y-5">
        {trustPoints.map((point) => (
          <li key={point.title} className="rounded-xl bg-navy-800 p-5">
            <h3 className="text-lg font-semibold text-white">{point.title}</h3>
            <p className="mt-2 leading-relaxed text-navy-200">{point.description}</p>
          </li>
        ))}
      </ul>
      <Disclaimer className="mt-8" variant="banner-dark" />
    </Section>
  );
}
