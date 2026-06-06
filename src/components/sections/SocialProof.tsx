"use client";

import { useEffect, useState } from "react";
import { placeholderTestimonials } from "@/data/social-proof";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function SocialProof() {
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((res) => res.json())
      .then((data: { count?: number }) => setWaitlistCount(data.count ?? 0))
      .catch(() => setWaitlistCount(null));
  }, []);

  return (
    <Section id="stimmen" background="light">
      <SectionHeader
        title="Das sagen Testnutzer"
        subtitle="Echte Stimmen folgen – hier siehst du bereits, welches Feedback wir in der Testphase sammeln."
      />

      {waitlistCount !== null && waitlistCount > 0 && (
        <p className="mb-6 text-center text-lg font-semibold text-navy-800">
          Bereits{" "}
          <span className="text-accent-700">{waitlistCount}+</span> Personen auf der Warteliste
        </p>
      )}

      {waitlistCount === 0 && (
        <p className="mb-6 rounded-xl border border-dashed border-navy-200 bg-white px-4 py-3 text-center text-sm text-navy-600">
          Wartelisten-Zähler:{" "}
          <span className="font-semibold text-navy-800">Sei unter den Ersten</span> – trage dich
          jetzt ein.
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-3">
        {placeholderTestimonials.map((item) => (
          <Card key={item.id} className="relative">
            {item.placeholder && (
              <span className="absolute right-4 top-4 rounded-full bg-navy-100 px-2 py-0.5 text-xs font-medium text-navy-600">
                Vorschau
              </span>
            )}
            <blockquote className="mt-2 text-navy-700">&ldquo;{item.quote}&rdquo;</blockquote>
            <footer className="mt-4 border-t border-navy-100 pt-3">
              <p className="text-sm font-semibold text-navy-900">{item.author}</p>
              <p className="text-xs text-navy-500">{item.context}</p>
            </footer>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-dashed border-accent-300 bg-accent-50 px-4 py-4 text-center text-sm text-accent-900">
        <strong>Platzhalter für zukünftige Nutzerbewertungen.</strong> Nach der Testphase ersetzen
        wir diese durch echte Feedback-Zitate.
      </div>
    </Section>
  );
}
