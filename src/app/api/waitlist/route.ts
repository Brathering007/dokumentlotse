import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/waitlist";
import { letterFrequencyOptions } from "@/data/waitlist-options";
import type { DocumentCategory, LetterFrequency } from "@/types";

const VALID_CATEGORIES: DocumentCategory[] = [
  "Krankenkasse",
  "Arbeitsagentur",
  "Rentenversicherung",
  "Reha",
  "Versicherung",
  "Sonstiges",
];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      documentInterest?: string;
      letterFrequency?: string;
      source?: string;
    };

    const email = body.email ?? "";
    const documentInterest = VALID_CATEGORIES.includes(body.documentInterest as DocumentCategory)
      ? (body.documentInterest as DocumentCategory)
      : undefined;
    const letterFrequency = letterFrequencyOptions.includes(body.letterFrequency as LetterFrequency)
      ? (body.letterFrequency as LetterFrequency)
      : undefined;
    const source = body.source?.trim().slice(0, 50) || undefined;

    const result = await addToWaitlist({
      email,
      documentInterest,
      letterFrequency,
      source,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json({
      message: "Vielen Dank! Du bist auf der Warteliste vorgemerkt.",
      entry: { id: result.entry.id, createdAt: result.entry.createdAt },
    });
  } catch {
    return NextResponse.json(
      { error: "Interner Serverfehler. Bitte versuche es später erneut." },
      { status: 500 }
    );
  }
}
