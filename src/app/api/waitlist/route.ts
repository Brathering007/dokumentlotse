import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/waitlist";
import { documentCategories } from "@/data/examples";
import {
  letterFrequencyOptions,
  paymentWillingnessOptions,
} from "@/data/waitlist-options";
import type { DocumentCategory, LetterFrequency, PaymentWillingness } from "@/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      documentInterest?: string;
      letterFrequency?: string;
      paymentWillingness?: string;
      source?: string;
    };

    const email = body.email ?? "";
    const documentInterest = documentCategories.includes(body.documentInterest as DocumentCategory)
      ? (body.documentInterest as DocumentCategory)
      : undefined;
    const letterFrequency = letterFrequencyOptions.includes(
      body.letterFrequency as LetterFrequency
    )
      ? (body.letterFrequency as LetterFrequency)
      : undefined;
    const paymentWillingness = paymentWillingnessOptions.includes(
      body.paymentWillingness as PaymentWillingness
    )
      ? (body.paymentWillingness as PaymentWillingness)
      : undefined;
    const source = body.source?.trim().slice(0, 50) || undefined;

    const result = await addToWaitlist({
      email,
      documentInterest,
      letterFrequency,
      paymentWillingness,
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
