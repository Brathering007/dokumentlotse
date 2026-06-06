import Link from "next/link";
import { comparisonRows, comparisonIntro } from "@/data/comparison";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section, SectionHeader } from "@/components/ui/Section";

export function Comparison() {
  return (
    <Section id="vergleich" background="light">
      <SectionHeader
        title="DokumentenLotse vs. ChatGPT, Zettel & Co."
        subtitle={comparisonIntro}
      />

      <div className="overflow-x-auto rounded-2xl border border-navy-100 bg-white">
        <table className="w-full min-w-[540px] text-left text-sm">
          <thead>
            <tr className="border-b border-navy-100 bg-navy-50">
              <th scope="col" className="px-4 py-3 font-semibold text-navy-900">
                Merkmal
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-accent-800">
                DokumentenLotse
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-navy-600">
                Typische Anbieter
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr
                key={row.feature}
                className={`border-b border-navy-50 ${row.highlight ? "bg-accent-50/40" : ""}`}
              >
                <th scope="row" className="px-4 py-3 font-medium text-navy-900">
                  {row.feature}
                </th>
                <td className="px-4 py-3 text-navy-800">{row.dokumentenlotse}</td>
                <td className="px-4 py-3 text-navy-600">{row.typical}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <CtaLink href="#warteliste" location="comparison">
          Kostenlos vormerken
        </CtaLink>
        <p className="mt-3 text-sm text-navy-600">
          Spezielle Seiten:{" "}
          <Link href="/fuer/reha" className="font-medium underline hover:text-navy-900">
            Reha
          </Link>
          {" · "}
          <Link href="/fuer/krankengeld" className="font-medium underline hover:text-navy-900">
            Krankengeld
          </Link>
          {" · "}
          <Link href="/fuer/rentenversicherung" className="font-medium underline hover:text-navy-900">
            Rente
          </Link>
        </p>
      </div>
    </Section>
  );
}
