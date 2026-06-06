import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Impressum – ${SITE_NAME}`,
  description: `Impressum und Anbieterkennzeichnung für ${SITE_NAME}.`,
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout title="Impressum">
      <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        
      </p>

      <section>
        <h2 className="text-xl font-bold text-navy-900">Angaben gemäß § 5 TMG</h2>
        <p className="mt-3">
          [Vor- und Nachname oder Firmenname]
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ und Ort]
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">Kontakt</h2>
        <p className="mt-3">
          Telefon: [Telefonnummer]
          <br />
          E-Mail: [kontakt@beispiel.de]
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p className="mt-3">
          [Vor- und Nachname]
          <br />
          [Anschrift wie oben]
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">Haftungsausschluss</h2>
        <h3 className="mt-4 font-semibold text-navy-800">Haftung für Inhalte</h3>
        <p className="mt-2">
          Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
        </p>
        <h3 className="mt-4 font-semibold text-navy-800">Keine Rechtsberatung</h3>
        <p className="mt-2">
          {SITE_NAME} bietet ausschließlich Verständnishilfe für Behörden- und Versicherungsdokumente
          an. Es handelt sich nicht um Rechts-, Steuer- oder Rentenberatung.
        </p>
        <h3 className="mt-4 font-semibold text-navy-800">Haftung für Links</h3>
        <p className="mt-2">
          Diese Website enthält ggf. Links zu externen Websites Dritter. Auf deren Inhalte haben wir
          keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
          verantwortlich.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">EU-Streitschlichtung</h2>
        <p className="mt-3">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-navy-700 underline hover:text-navy-900"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p className="mt-2">
          Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </LegalPageLayout>
  );
}
