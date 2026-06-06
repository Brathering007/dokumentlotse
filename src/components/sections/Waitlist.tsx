"use client";

import { useRef, useState, type FormEvent } from "react";
import { documentCategories } from "@/data/examples";
import { letterFrequencyOptions } from "@/data/waitlist-options";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { Section, SectionHeader } from "@/components/ui/Section";
import { trackEvent } from "@/lib/analytics";
import type { DocumentCategory, LetterFrequency } from "@/types";

interface WaitlistProps {
  defaultDocumentInterest?: DocumentCategory;
  source?: string;
}

export function Waitlist({ defaultDocumentInterest, source }: WaitlistProps) {
  const [email, setEmail] = useState("");
  const [documentInterest, setDocumentInterest] = useState<DocumentCategory | "">(
    defaultDocumentInterest ?? ""
  );
  const [letterFrequency, setLetterFrequency] = useState<LetterFrequency | "">("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const hasTrackedStart = useRef(false);

  function handleFormStart() {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    trackEvent({ name: "waitlist_start", properties: { source } });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    trackEvent({
      name: "waitlist_submit",
      properties: {
        source,
        documentInterest: documentInterest || undefined,
        letterFrequency: letterFrequency || undefined,
      },
    });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          documentInterest: documentInterest || undefined,
          letterFrequency: letterFrequency || undefined,
          source,
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Ein Fehler ist aufgetreten.");
        trackEvent({ name: "waitlist_error", properties: { source, error: data.error } });
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Du bist vorgemerkt!");
      trackEvent({ name: "waitlist_success", properties: { source } });
      setEmail("");
      if (!defaultDocumentInterest) setDocumentInterest("");
      setLetterFrequency("");
    } catch {
      setStatus("error");
      setMessage("Verbindungsfehler. Bitte versuche es später erneut.");
      trackEvent({ name: "waitlist_error", properties: { source, error: "network" } });
    }
  }

  return (
    <Section id="warteliste" background="white">
      <SectionHeader
        title="Jetzt kostenlos vormerken"
        subtitle="Sei unter den Ersten, wenn DokumentenLotse startet – und hilf uns, die richtigen Funktionen zuerst zu bauen."
      />

      <Card className="mx-auto max-w-lg">
        {status === "success" ? (
          <div className="text-center" role="status">
            <div
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-100 text-2xl"
              aria-hidden="true"
            >
              ✓
            </div>
            <h3 className="text-xl font-bold text-navy-900">Danke – du bist dabei!</h3>
            <p className="mt-2 text-navy-600">{message}</p>
            <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
              Weitere E-Mail eintragen
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-base font-semibold text-navy-900">
                E-Mail-Adresse
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="deine@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={handleFormStart}
                className="w-full rounded-xl border-2 border-navy-200 px-4 py-3 text-base text-navy-900 placeholder:text-navy-400 focus:border-navy-500 focus:outline-none"
              />
            </div>

            <fieldset>
              <legend className="mb-3 text-base font-semibold text-navy-900">
                Welche Dokumente bereiten dir die meisten Schwierigkeiten?{" "}
                <span className="font-normal text-navy-500">(optional)</span>
              </legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {documentCategories.map((category) => (
                  <label
                    key={category}
                    className={`cursor-pointer rounded-xl border-2 px-3 py-2.5 text-center text-sm font-medium transition-colors ${
                      documentInterest === category
                        ? "border-navy-700 bg-navy-50 text-navy-900"
                        : "border-navy-200 text-navy-600 hover:border-navy-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="documentInterest"
                      value={category}
                      checked={documentInterest === category}
                      onChange={() => setDocumentInterest(category)}
                      className="sr-only"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-base font-semibold text-navy-900">
                Wie oft erhältst du solche Schreiben?{" "}
                <span className="font-normal text-navy-500">(optional)</span>
              </legend>
              <div className="grid gap-2">
                {letterFrequencyOptions.map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer rounded-xl border-2 px-4 py-3 text-sm font-medium transition-colors ${
                      letterFrequency === option
                        ? "border-navy-700 bg-navy-50 text-navy-900"
                        : "border-navy-200 text-navy-600 hover:border-navy-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="letterFrequency"
                      value={option}
                      checked={letterFrequency === option}
                      onChange={() => setLetterFrequency(option)}
                      className="sr-only"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <Button type="submit" size="lg" fullWidth disabled={status === "loading"}>
              {status === "loading" ? "Wird gespeichert …" : "Kostenlos vormerken – dauert 30 Sek."}
            </Button>

            <p className="text-center text-xs text-navy-500">
              Mit der Anmeldung stimmst du zu, per E-Mail über den Start informiert zu werden.{" "}
              <a href="/datenschutz" className="underline hover:text-navy-700">
                Datenschutz
              </a>
            </p>

            {status === "error" && (
              <p className="text-center text-sm font-medium text-red-600" role="alert">
                {message}
              </p>
            )}
          </form>
        )}
      </Card>

      <Disclaimer className="mx-auto mt-6 max-w-lg text-center" />
    </Section>
  );
}
