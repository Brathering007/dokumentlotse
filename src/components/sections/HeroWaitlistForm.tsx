"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import type { DocumentCategory } from "@/types";

interface HeroWaitlistFormProps {
  source?: string;
  defaultDocumentInterest?: DocumentCategory;
}

export function HeroWaitlistForm({
  source = "hero",
  defaultDocumentInterest,
}: HeroWaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    trackEvent({ name: "waitlist_submit", properties: { source, location: "hero" } });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          documentInterest: defaultDocumentInterest,
          source,
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Ein Fehler ist aufgetreten.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Du bist vorgemerkt!");
      setEmail("");
      trackEvent({ name: "waitlist_success", properties: { source, location: "hero" } });
    } catch {
      setStatus("error");
      setMessage("Verbindungsfehler. Bitte versuche es erneut.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-accent-200 bg-accent-50 px-4 py-4 text-center sm:px-5 sm:py-5"
        role="status"
      >
        <p className="text-lg font-bold text-navy-900">✓ Du bist dabei!</p>
        <p className="mt-1 text-sm text-navy-600">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md lg:mx-0"
      onFocus={() => trackEvent({ name: "waitlist_start", properties: { source, location: "hero" } })}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="hero-email" className="sr-only">
          E-Mail-Adresse
        </label>
        <input
          id="hero-email"
          type="email"
          required
          autoComplete="email"
          placeholder="deine@email.de"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-h-[52px] flex-1 rounded-xl border-2 border-navy-200 bg-white px-4 text-base text-navy-900 placeholder:text-navy-400 focus:border-navy-600 focus:outline-none"
        />
        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="min-h-[52px] shrink-0 px-6 sm:px-8"
        >
          {status === "loading" ? "…" : "Kostenlos vormerken"}
        </Button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-sm font-medium text-red-600" role="alert">
          {message}
        </p>
      )}
      <p className="mt-2 text-xs text-navy-500">
        Kostenlos · Keine Kreditkarte · Jederzeit abmeldbar
      </p>
    </form>
  );
}
