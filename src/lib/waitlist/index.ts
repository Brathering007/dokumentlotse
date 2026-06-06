import type { DocumentCategory } from "@/types";
import { addToWaitlistJson, getWaitlistCountJson } from "./json-provider";
import { addToWaitlistSupabase, getWaitlistCountSupabase } from "./supabase-provider";
import type { AddToWaitlistResult, WaitlistProvider } from "./types";
import { getWaitlistProvider } from "./types";

export type { AddToWaitlistResult, WaitlistProvider };
export { getWaitlistProvider };

export async function addToWaitlist(
  email: string,
  documentInterest?: DocumentCategory
): Promise<AddToWaitlistResult> {
  const provider = getWaitlistProvider();

  if (provider === "supabase") {
    return addToWaitlistSupabase(email, documentInterest);
  }

  return addToWaitlistJson(email, documentInterest);
}

export async function getWaitlistCount(): Promise<number> {
  const provider = getWaitlistProvider();

  if (provider === "supabase") {
    return getWaitlistCountSupabase();
  }

  return getWaitlistCountJson();
}
