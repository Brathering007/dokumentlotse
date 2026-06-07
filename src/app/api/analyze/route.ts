import { NextResponse } from "next/server";
import { extractTextFromPdf, PdfExtractionError } from "@/lib/analysis/extract-pdf";
import { analyzeDocumentText, OpenAIAnalysisError } from "@/lib/analysis/openai";
import {
  ALLOWED_PDF_MIME_TYPES,
  DEMO_MAX_FILE_BYTES,
  DEMO_RATE_LIMIT_COOKIE,
} from "@/lib/analysis/constants";
import {
  checkDemoRateLimit,
  getDemoRateLimitCookieValue,
} from "@/lib/analysis/rate-limit";

export const runtime = "nodejs";
export const maxDuration = 60;

function errorResponse(message: string, status: number, code?: string) {
  return NextResponse.json({ error: message, code }, { status });
}

export async function POST(request: Request) {
  try {
    return await handleAnalyze(request);
  } catch (error) {
    console.error("Unhandled analyze error:", error);
    return errorResponse(
      "Die Analyse ist fehlgeschlagen. Bitte versuche es später erneut.",
      500,
      "internal_error"
    );
  }
}

async function handleAnalyze(request: Request) {
  const rateLimit = await checkDemoRateLimit();
  if (!rateLimit.allowed) {
    return errorResponse(
      `Demo-Limit erreicht: maximal 1 Analyse pro Tag. Bitte versuche es in ca. ${rateLimit.retryAfterHours} Stunde(n) erneut – oder trage dich in die Warteliste ein.`,
      429,
      "rate_limit"
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return errorResponse("Ungültige Anfrage.", 400, "invalid_request");
  }

  const file = formData.get("file");
  if (!file || !(file instanceof File)) {
    return errorResponse("Bitte lade eine PDF-Datei hoch.", 400, "missing_file");
  }

  if (!file.name.toLowerCase().endsWith(".pdf")) {
    return errorResponse("Nur PDF-Dateien werden unterstützt.", 400, "invalid_type");
  }

  if (file.type && !ALLOWED_PDF_MIME_TYPES.includes(file.type)) {
    return errorResponse("Nur PDF-Dateien werden unterstützt.", 400, "invalid_type");
  }

  if (file.size > DEMO_MAX_FILE_BYTES) {
    return errorResponse(
      `Die PDF ist zu groß. Im Demo-Modus sind maximal ${DEMO_MAX_FILE_BYTES / (1024 * 1024)} MB erlaubt.`,
      400,
      "file_too_large"
    );
  }

  if (file.size === 0) {
    return errorResponse("Die PDF-Datei ist leer.", 400, "empty_file");
  }

  let buffer: Buffer;
  try {
    const arrayBuffer = await file.arrayBuffer();
    buffer = Buffer.from(arrayBuffer);
  } catch {
    return errorResponse("Die Datei konnte nicht gelesen werden.", 400, "read_error");
  }

  let text: string;
  try {
    text = await extractTextFromPdf(buffer);
  } catch (error) {
    if (error instanceof PdfExtractionError) {
      return errorResponse(error.message, 400, error.code);
    }
    console.error("PDF extraction error:", error);
    return errorResponse(
      "Die PDF konnte nicht verarbeitet werden.",
      400,
      "extraction_failed"
    );
  }

  let analysis;
  try {
    analysis = await analyzeDocumentText(text);
  } catch (error) {
    if (error instanceof OpenAIAnalysisError) {
      const status = error.code === "config" ? 503 : error.code === "timeout" ? 504 : 502;
      return errorResponse(error.message, status, error.code);
    }
    console.error("Analysis error:", error);
    return errorResponse(
      "Die Analyse ist fehlgeschlagen. Bitte versuche es später erneut.",
      500,
      "analysis_failed"
    );
  }

  const response = NextResponse.json({
    analysis,
    meta: { textLength: text.length, demo: true },
  });

  response.cookies.set(DEMO_RATE_LIMIT_COOKIE, getDemoRateLimitCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60,
    path: "/",
  });

  return response;
}
