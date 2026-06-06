import type { DocumentCategory } from "@/types";

export type WaitlistProvider = "json" | "supabase";

export interface WaitlistResult {
  success: true;
  entry: { id: string; email: string; createdAt: string };
}

export interface WaitlistError {
  success: false;
  error: string;
}

export type AddToWaitlistResult = WaitlistResult | WaitlistError;

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateWaitlistInput(
  email: string
): { ok: true; normalizedEmail: string } | { ok: false; error: string } {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail) {
    return { ok: false, error: "Bitte gib deine E-Mail-Adresse ein." };
  }

  if (!isValidEmail(normalizedEmail)) {
    return { ok: false, error: "Bitte gib eine gültige E-Mail-Adresse ein." };
  }

  return { ok: true, normalizedEmail };
}

export function getWaitlistProvider(): WaitlistProvider {
  const configured = process.env.WAITLIST_PROVIDER;

  if (configured === "supabase") {
    return "supabase";
  }

  if (configured === "json") {
    return "json";
  }

  // Auto: Supabase wenn konfiguriert, sonst JSON (lokal)
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return "supabase";
  }

  return "json";
}

export type { DocumentCategory };
