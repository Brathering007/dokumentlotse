import { chatGptDifferences, positioningStatement } from "@/data/positioning";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function WhyNotChatGPT() {
  return (
    <Section id="warum-nicht-chatgpt" background="white">
      <SectionHeader
        title="Spezialisiert statt Allrounder"
        subtitle="ChatGPT ist vielseitig und kann viele Texte erklären. DokumentenLotse konzentriert sich bewusst auf deutsche Sozialversicherungs-Briefe – mit Struktur, Fristen und typischen Abläufen im Mittelpunkt."
      />

      <p className="mb-8 rounded-xl border border-navy-200 bg-navy-50 px-4 py-3 text-center text-sm font-medium text-navy-800 sm:text-base">
        {positioningStatement}
      </p>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {chatGptDifferences.map((item) => (
          <li key={item.title}>
            <Card className="h-full">
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="mt-3 font-semibold text-navy-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{item.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
