import OpenAI from "openai";
import { ANALYSIS_SYSTEM_PROMPT } from "./prompt";
import { OPENAI_TIMEOUT_MS } from "./constants";
import { isDocumentAnalysis, type DocumentAnalysis } from "./types";

export class OpenAIAnalysisError extends Error {
  constructor(
    message: string,
    public readonly code: "config" | "timeout" | "api" | "invalid_response"
  ) {
    super(message);
    this.name = "OpenAIAnalysisError";
  }
}

function getOpenAIClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new OpenAIAnalysisError(
      "Analyse ist derzeit nicht verfügbar. OPENAI_API_KEY fehlt.",
      "config"
    );
  }
  return new OpenAI({ apiKey, timeout: OPENAI_TIMEOUT_MS });
}

function normalizeAnalysis(raw: DocumentAnalysis): DocumentAnalysis {
  return {
    summary: raw.summary.trim(),
    sender: raw.sender.trim() || "Nicht eindeutig erkennbar",
    requirements: raw.requirements.map((r) => r.trim()).filter(Boolean).slice(0, 10),
    deadlines: raw.deadlines.map((d) => d.trim()).filter(Boolean).slice(0, 10),
    next_steps: raw.next_steps.map((s) => s.trim()).filter(Boolean).slice(0, 5),
    confidence: raw.confidence.trim() || "mittel",
  };
}

export async function analyzeDocumentText(text: string): Promise<DocumentAnalysis> {
  const client = getOpenAIClient();
  const model = process.env.OPENAI_MODEL ?? "gpt-4o-mini";

  const truncated =
    text.length > 12_000 ? `${text.slice(0, 12_000)}\n\n[Text gekürzt …]` : text;

  let completion: OpenAI.Chat.Completions.ChatCompletion;

  try {
    completion = await client.chat.completions.create({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: ANALYSIS_SYSTEM_PROMPT },
        {
          role: "user",
          content: `Analysiere folgendes Dokument:\n\n---\n${truncated}\n---`,
        },
      ],
    });
  } catch (error) {
    if (error instanceof OpenAI.APIError && error.status === 408) {
      throw new OpenAIAnalysisError(
        "Die Analyse hat zu lange gedauert. Bitte versuche es mit einer kürzeren PDF erneut.",
        "timeout"
      );
    }
    if (
      error instanceof Error &&
      (error.name === "AbortError" || error.message.includes("timeout"))
    ) {
      throw new OpenAIAnalysisError(
        "Die Analyse hat zu lange gedauert. Bitte versuche es erneut.",
        "timeout"
      );
    }
    console.error("OpenAI API error:", error);
    throw new OpenAIAnalysisError(
      "Die Analyse ist fehlgeschlagen. Bitte versuche es später erneut.",
      "api"
    );
  }

  const content = completion.choices[0]?.message?.content;
  if (!content) {
    throw new OpenAIAnalysisError(
      "Die Analyse lieferte keine Ergebnisse.",
      "invalid_response"
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new OpenAIAnalysisError(
      "Die Analyse lieferte ein ungültiges Ergebnis.",
      "invalid_response"
    );
  }

  if (!isDocumentAnalysis(parsed)) {
    throw new OpenAIAnalysisError(
      "Die Analyse lieferte ein unvollständiges Ergebnis.",
      "invalid_response"
    );
  }

  return normalizeAnalysis(parsed);
}
