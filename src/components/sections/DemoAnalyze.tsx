"use client";

import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { AnalysisResult } from "@/components/sections/AnalysisResult";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { sampleDocuments } from "@/data/sample-documents";
import { trackEvent } from "@/lib/analytics";
import type { DocumentAnalysis } from "@/lib/analysis/types";

type Status = "idle" | "loading" | "success" | "error";

const MAX_MB = 2;

export function DemoAnalyze() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const [analysis, setAnalysis] = useState<DocumentAnalysis | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  async function analyzeFile(file: File, source: string) {
    setStatus("loading");
    setError("");
    setAnalysis(null);
    setFileName(file.name);

    trackEvent({ name: "demo_analyze_start", properties: { source, fileName: file.name } });

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as {
        analysis?: DocumentAnalysis;
        error?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setError(data.error ?? "Die Analyse ist fehlgeschlagen.");
        trackEvent({
          name: "demo_analyze_error",
          properties: { source, status: String(response.status) },
        });
        return;
      }

      if (!data.analysis) {
        setStatus("error");
        setError("Die Analyse lieferte keine Ergebnisse.");
        return;
      }

      setAnalysis(data.analysis);
      setStatus("success");
      trackEvent({ name: "demo_analyze_success", properties: { source } });
    } catch {
      setStatus("error");
      setError("Verbindungsfehler. Bitte versuche es erneut.");
      trackEvent({ name: "demo_analyze_error", properties: { source, status: "network" } });
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      void analyzeFile(file, "upload");
    }
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      void analyzeFile(file, "drop");
    }
  }

  async function loadSample(filename: string, label: string) {
    try {
      const response = await fetch(`/samples/${filename}`);
      if (!response.ok) {
        setStatus("error");
        setError("Beispiel-PDF konnte nicht geladen werden.");
        return;
      }
      const blob = await response.blob();
      const file = new File([blob], filename, { type: "application/pdf" });
      await analyzeFile(file, `sample:${label}`);
    } catch {
      setStatus("error");
      setError("Beispiel-PDF konnte nicht geladen werden.");
    }
  }

  function reset() {
    setStatus("idle");
    setError("");
    setAnalysis(null);
    setFileName("");
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <Section id="demo" background="white">
      <SectionHeader
        title="Jetzt testen – Demo-Analyse"
        subtitle="Lade ein PDF hoch und erhalte in wenigen Sekunden eine verständliche Auswertung. Kostenlos im Demo-Modus: 1 Analyse pro Tag, max. 2 MB."
      />

      {status !== "success" && (
        <Card className="mx-auto max-w-2xl">
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`rounded-xl border-2 border-dashed px-5 py-10 text-center transition-colors ${
              isDragging
                ? "border-accent-400 bg-accent-50"
                : "border-navy-200 bg-navy-50/40 hover:border-navy-300"
            }`}
          >
            <p className="text-4xl" aria-hidden="true">
              📄
            </p>
            <p className="mt-3 text-lg font-semibold text-navy-900">PDF hier ablegen</p>
            <p className="mt-1 text-sm text-navy-600">oder Datei auswählen (max. {MAX_MB} MB)</p>

            <input
              ref={inputRef}
              id="demo-pdf-upload"
              type="file"
              accept="application/pdf,.pdf"
              onChange={handleFileChange}
              className="sr-only"
              disabled={status === "loading"}
            />
            <div className="mt-5">
              <Button
                type="button"
                size="lg"
                disabled={status === "loading"}
                onClick={() => inputRef.current?.click()}
              >
                {status === "loading" ? "Wird analysiert …" : "PDF auswählen"}
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-center text-sm font-semibold text-navy-700">
              Oder Beispiel-Brief testen:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {sampleDocuments.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  disabled={status === "loading"}
                  onClick={() => void loadSample(sample.filename, sample.label)}
                  className="rounded-full border-2 border-navy-200 px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:border-navy-400 hover:bg-navy-50 disabled:opacity-50"
                >
                  {sample.label}
                </button>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-navy-500">
              Fiktive Demo-Briefe von Krankenkasse, Rentenversicherung und Arbeitsagentur
            </p>
          </div>

          {status === "loading" && fileName && (
            <p className="mt-4 text-center text-sm text-navy-600" role="status">
              Analysiere <span className="font-medium">{fileName}</span> … Das kann 15–30 Sekunden
              dauern.
            </p>
          )}

          {status === "error" && error && (
            <p className="mt-4 text-center text-sm font-medium text-red-600" role="alert">
              {error}
            </p>
          )}
        </Card>
      )}

      {status === "success" && analysis && (
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-navy-600">
              Analysiert: <span className="font-medium text-navy-900">{fileName}</span>
            </p>
            <Button variant="outline" size="md" onClick={reset}>
              Neue Analyse
            </Button>
          </div>
          <AnalysisResult analysis={analysis} />
        </div>
      )}
    </Section>
  );
}
