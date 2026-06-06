"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import { trackEvent } from "@/lib/analytics";
import { Section, SectionHeader } from "@/components/ui/Section";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    const next = openIndex === index ? null : index;
    setOpenIndex(next);
    if (next !== null) {
      trackEvent({
        name: "faq_open",
        properties: { question: faqItems[index].question },
      });
    }
  }

  return (
    <Section id="faq" background="white">
      <SectionHeader
        title="Häufige Fragen"
        subtitle="Alles Wichtige zur Warteliste, zum Datenschutz und zu den geplanten Funktionen."
      />
      <div className="space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-xl border border-navy-100 bg-white"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-900 hover:bg-navy-50"
              >
                {item.question}
                <span className="shrink-0 text-xl text-navy-500" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-navy-100 px-5 py-4 leading-relaxed text-navy-600">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
