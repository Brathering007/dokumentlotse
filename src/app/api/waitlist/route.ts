import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/waitlist";
import type { DocumentCategory } from "@/types";

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
    };

    const email = body.email ?? "";
    const documentInterest = VALID_CATEGORIES.includes(body.documentInterest as DocumentCategory)
      ? (body.documentInterest as DocumentCategory)
      : undefined;

    const result = await addToWaitlist(email, documentInterest);

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
