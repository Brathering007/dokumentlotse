import { CanvasFactory, getData } from "pdf-parse/worker";
import { PDFParse } from "pdf-parse";

PDFParse.setWorker(getData());

const MIN_TEXT_LENGTH = 50;

export class PdfExtractionError extends Error {
  constructor(
    message: string,
    public readonly code: "empty" | "unreadable" | "corrupt" | "too_short"
  ) {
    super(message);
    this.name = "PdfExtractionError";
  }
}

export async function extractTextFromPdf(buffer: Buffer): Promise<string> {
  if (!buffer.length) {
    throw new PdfExtractionError("Die PDF-Datei ist leer.", "empty");
  }

  let parser: PDFParse | null = null;

  try {
    parser = new PDFParse({ data: new Uint8Array(buffer), CanvasFactory });
    const result = await parser.getText();
    const text = result.text?.replace(/\s+/g, " ").trim() ?? "";

    if (!text) {
      throw new PdfExtractionError(
        "Die PDF enthält keinen lesbaren Text. Gescannte Dokumente ohne Texterkennung werden im Demo-Modus nicht unterstützt.",
        "unreadable"
      );
    }

    if (text.length < MIN_TEXT_LENGTH) {
      throw new PdfExtractionError(
        "Die PDF enthält zu wenig Text für eine sinnvolle Analyse.",
        "too_short"
      );
    }

    return text;
  } catch (error) {
    if (error instanceof PdfExtractionError) {
      throw error;
    }
    console.error("PDF extraction failed:", error);
    throw new PdfExtractionError(
      "Die PDF-Datei konnte nicht gelesen werden. Möglicherweise ist sie beschädigt.",
      "corrupt"
    );
  } finally {
    if (parser) {
      await parser.destroy().catch(() => undefined);
    }
  }
}
