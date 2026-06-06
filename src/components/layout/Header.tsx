"use client";

import Link from "next/link";
import { trackCtaClick } from "@/lib/analytics";
import { SITE_NAME } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-700 text-sm font-bold text-white"
            aria-hidden="true"
          >
            DL
          </span>
          <span className="text-lg font-bold text-navy-900">{SITE_NAME}</span>
        </Link>
        <Link
          href="/#warteliste"
          onClick={() => trackCtaClick("header", "Frühzugang")}
          className="rounded-lg bg-navy-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
        >
          Frühzugang
        </Link>
      </div>
    </header>
  );
}
