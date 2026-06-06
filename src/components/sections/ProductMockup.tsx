import { mockupContent } from "@/data/hero";

export function ProductMockup() {
  const { original, explanation } = mockupContent;

  return (
    <div
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
      aria-label="Produktvorschau: Bescheid links, Erklärung rechts"
    >
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent-200/40 to-navy-200/30 blur-sm" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-xl shadow-navy-900/10">
        {/* Fenster-Leiste */}
        <div className="flex items-center gap-2 border-b border-navy-100 bg-navy-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-400" aria-hidden="true" />
          <span className="ml-2 text-xs font-medium text-navy-500">DokumentenLotse · Vorschau</span>
        </div>

        <div className="grid divide-y divide-navy-100 md:grid-cols-2 md:divide-x md:divide-y-0">
          {/* Links: Original */}
          <div className="bg-navy-50/80 p-4 sm:p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-navy-500">
              {original.label}
            </p>
            <div className="space-y-2 rounded-xl border border-navy-200 bg-white p-3 sm:p-4">
              {original.lines.map((line) => (
                <p key={line} className="text-xs leading-relaxed text-navy-600 italic sm:text-sm">
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-800">
              <span aria-hidden="true">⏰</span> Frist: 14 Tage
            </p>
          </div>

          {/* Rechts: Erklärung */}
          <div className="bg-white p-4 sm:p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide text-accent-700">
              {explanation.label}
            </p>
            <div className="space-y-3">
              <p className="text-sm font-semibold leading-snug text-navy-900 sm:text-base">
                {explanation.summary}
              </p>
              <p className="rounded-lg bg-accent-50 px-3 py-2 text-sm font-medium text-accent-900">
                {explanation.deadline}
              </p>
              <div>
                <p className="mb-2 text-sm font-semibold text-navy-800">Benötigt werden:</p>
                <ul className="space-y-1.5">
                  {explanation.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-center gap-2 text-sm text-navy-700"
                    >
                      <span
                        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-100 text-xs text-accent-700"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-navy-500">
        So könnte DokumentenLotse deinen Bescheid erklären – Demo-Vorschau
      </p>
    </div>
  );
}
