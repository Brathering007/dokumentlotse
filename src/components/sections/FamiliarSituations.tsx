import { familiarSituations } from "@/data/hero";

export function FamiliarSituations() {
  return (
    <section
      aria-labelledby="familiar-heading"
      className="border-b border-navy-100 bg-white py-10 sm:py-12"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <h2
          id="familiar-heading"
          className="text-center text-2xl font-bold text-navy-900 sm:text-3xl"
        >
          Klingt das bekannt?
        </h2>
        <ul className="mt-8 space-y-4">
          {familiarSituations.map((situation) => (
            <li
              key={situation}
              className="flex items-start gap-3 rounded-xl border border-navy-100 bg-navy-50/60 px-4 py-4 sm:px-5"
            >
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-700 text-sm text-white"
                aria-hidden="true"
              >
                …
              </span>
              <p className="text-base leading-relaxed text-navy-800">{situation}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
