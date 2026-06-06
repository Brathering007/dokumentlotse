import { createClient } from "@supabase/supabase-js";
import type { DocumentCategory } from "@/types";
import type { AddToWaitlistResult } from "./types";
import { validateWaitlistInput } from "./types";

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase ist nicht konfiguriert. Setze NEXT_PUBLIC_SUPABASE_URL und SUPABASE_SERVICE_ROLE_KEY."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function addToWaitlistSupabase(
  email: string,
  documentInterest?: DocumentCategory
): Promise<AddToWaitlistResult> {
  const validation = validateWaitlistInput(email);
  if (!validation.ok) {
    return { success: false, error: validation.error };
  }

  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("waitlist")
    .insert({
      email: validation.normalizedEmail,
      document_interest: documentInterest ?? null,
    })
    .select("id, email, created_at")
    .single();

  if (error) {
    if (error.code === "23505") {
      return { success: false, error: "Diese E-Mail-Adresse ist bereits vorgemerkt." };
    }
    console.error("Supabase waitlist error:", error.message);
    return { success: false, error: "Speichern fehlgeschlagen. Bitte versuche es später erneut." };
  }

  return {
    success: true,
    entry: {
      id: data.id,
      email: data.email,
      createdAt: data.created_at,
    },
  };
}

export async function getWaitlistCountSupabase(): Promise<number> {
  const supabase = getSupabaseAdmin();
  const { count, error } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("Supabase count error:", error.message);
    return 0;
  }

  return count ?? 0;
}
