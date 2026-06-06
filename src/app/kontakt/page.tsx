import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Kontakt – ${SITE_NAME}`,
  description: `Kontakt zu ${SITE_NAME}.`,
};

export default function KontaktPage() {
  return (
    <LegalPageLayout title="Kontakt">
      <p>
        Du hast Fragen zu {SITE_NAME}, möchtest Feedback geben oder deine Wartelisten-Anmeldung
        widerrufen? Schreib uns – wir melden uns so schnell wie möglich.
      </p>

      <section className="rounded-2xl border border-navy-100 bg-navy-50 p-6">
        <h2 className="text-lg font-bold text-navy-900">E-Mail</h2>
        <p className="mt-2">
          <a
            href="mailto:kontakt@beispiel.de"
            className="font-medium text-navy-700 underline hover:text-navy-900"
          >
            kontakt@beispiel.de
          </a>
        </p>
        <p className="mt-3 text-sm text-navy-600">
          Bitte ersetze diese Adresse durch deine echte Kontakt-E-Mail vor der Veröffentlichung.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">Warteliste widerrufen</h2>
        <p className="mt-3">
          Wenn du deine Einwilligung zur Speicherung deiner E-Mail-Adresse widerrufen möchtest,
          sende uns eine kurze Nachricht mit der E-Mail-Adresse, die du von der Warteliste
          entfernen möchtest.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">Hinweis</h2>
        <p className="mt-3">
          {SITE_NAME} bietet keine Rechts-, Steuer- oder Rentenberatung. Bei inhaltlichen Fragen
          zu Behördenbriefen wende dich bitte an die zuständige Stelle oder eine qualifizierte
          Beratungsstelle.
        </p>
      </section>

      <p>
        Weitere Informationen findest du in unserem{" "}
        <Link href="/impressum" className="font-medium text-navy-700 underline hover:text-navy-900">
          Impressum
        </Link>{" "}
        und in der{" "}
        <Link
          href="/datenschutz"
          className="font-medium text-navy-700 underline hover:text-navy-900"
        >
          Datenschutzerklärung
        </Link>
        .
      </p>
    </LegalPageLayout>
  );
}
