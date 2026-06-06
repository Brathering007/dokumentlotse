import Link from "next/link";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-50">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold text-navy-900">{SITE_NAME}</p>
            <p className="mt-1 text-sm text-navy-600">MVP – Projekt in Entwicklung</p>
          </div>
          <nav aria-label="Rechtliches und Kontakt" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/impressum" className="text-sm font-medium text-navy-700 hover:text-navy-900">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-sm font-medium text-navy-700 hover:text-navy-900">
              Datenschutz
            </Link>
            <Link href="/kontakt" className="text-sm font-medium text-navy-700 hover:text-navy-900">
              Kontakt
            </Link>
          </nav>
        </div>
        <Disclaimer className="border-t border-navy-200 pt-6" />
        <p className="mt-4 text-xs leading-relaxed text-navy-500">
          © {new Date().getFullYear()} {SITE_NAME}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
