"use client";

import { useEffect, useState } from "react";
import { commonChallenges } from "@/data/positioning";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function CommonChallenges() {
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((res) => res.json())
      .then((data: { count?: number }) => setWaitlistCount(data.count ?? 0))
      .catch(() => setWaitlistCount(null));
  }, []);

  return (
    <Section id="herausforderungen" background="light">
      <SectionHeader
        title="Häufige Herausforderungen"
        subtitle="Das sind Probleme, die uns in Gesprächen und Rückmeldungen immer wieder geschildert werden – keine erfundenen Kundenbewertungen."
      />

      {waitlistCount !== null && waitlistCount > 0 && (
        <p className="mb-6 text-center text-base font-semibold text-navy-800">
          Bereits <span className="text-accent-700">{waitlistCount}+</span> Personen warten auf den
          Start
        </p>
      )}

      <ul className="grid gap-4 sm:grid-cols-2">
        {commonChallenges.map((item) => (
          <li key={item.id}>
            <Card>
              <p className="font-medium leading-relaxed text-navy-800">
                &ldquo;{item.challenge}&rdquo;
              </p>
              <p className="mt-3 border-t border-navy-100 pt-3 text-xs font-medium text-navy-500">
                {item.context}
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
