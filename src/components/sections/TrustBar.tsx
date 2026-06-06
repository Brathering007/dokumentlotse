import Link from "next/link";
import { DISCLAIMER } from "@/lib/constants";

const trustItems = [
  {
    icon: "🔒",
    title: "Datenschutz",
    description: "DSGVO-konform, EU-Hosting geplant",
  },
  {
    icon: "⚖️",
    title: "Keine Rechtsberatung",
    description: "Nur Verständnishilfe – ehrlich kommuniziert",
  },
  {
    icon: "🛡️",
    title: "Sichere Verarbeitung",
    description: "Dokumente nur so lange wie nötig",
  },
  {
    icon: "👁️",
    title: "Transparent",
    description: "Klare Erklärung, wie es funktioniert",
  },
];

export function TrustBar() {
  return (
    <section aria-label="Vertrauensmerkmale" className="border-b border-navy-100 bg-white py-6">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {trustItems.map((item) => (
            <li key={item.title} className="text-center">
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <p className="mt-1 text-sm font-semibold text-navy-900">{item.title}</p>
              <p className="mt-0.5 text-xs leading-snug text-navy-600">{item.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-navy-500">
          {DISCLAIMER}{" "}
          <Link href="/datenschutz" className="underline hover:text-navy-700">
            Datenschutz
          </Link>
        </p>
      </div>
    </section>
  );
}
