"use client";

import { useState, type FormEvent } from "react";
import { documentCategories } from "@/data/examples";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { DocumentCategory } from "@/types";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [documentInterest, setDocumentInterest] = useState<DocumentCategory | "">("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          documentInterest: documentInterest || undefined,
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Ein Fehler ist aufgetreten.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Du bist vorgemerkt!");
      setEmail("");
      setDocumentInterest("");
    } catch {
      setStatus("error");
      setMessage("Verbindungsfehler. Bitte versuche es später erneut.");
    }
  }

  return (
    <Section id="warteliste" background="white">
      <SectionHeader
        title="Kostenlos vormerken"
        subtitle="Trag dich in die Warteliste ein und erfahre als Erste:r, wenn DokumentenLotse AI startet."
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
            <h3 className="text-xl font-bold text-navy-900">Danke für dein Interesse!</h3>
            <p className="mt-2 text-navy-600">{message}</p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setStatus("idle")}
            >
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
                className="w-full rounded-xl border-2 border-navy-200 px-4 py-3 text-base text-navy-900 placeholder:text-navy-400 focus:border-navy-500 focus:outline-none"
              />
            </div>

            <fieldset>
              <legend className="mb-3 text-base font-semibold text-navy-900">
                Welche Dokumente möchtest du besser verstehen?{" "}
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

            <Button type="submit" size="lg" fullWidth disabled={status === "loading"}>
              {status === "loading" ? "Wird gespeichert …" : "Kostenlos vormerken"}
            </Button>

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
