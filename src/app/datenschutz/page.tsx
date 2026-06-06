import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Datenschutz – ${SITE_NAME}`,
  description: `Datenschutzerklärung für ${SITE_NAME}.`,
};

export default function DatenschutzPage() {
  return (
    <LegalPageLayout title="Datenschutzerklärung">
      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900">
        Diese Datenschutzerklärung ist ein Entwurf und muss vor Veröffentlichung rechtlich geprüft
        werden.
      </p>

      <section>
        <h2 className="text-xl font-bold text-navy-900">1. Verantwortlicher</h2>
        <p className="mt-3">
          [Vor- und Nachname oder Firmenname]
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ und Ort]
          <br />
          E-Mail: [datenschutz@beispiel.de]
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">2. Zweck dieser Website</h2>
        <p className="mt-3">
          {SITE_NAME} ist ein MVP zur Validierung einer Geschäftsidee. Die Website informiert über
          das geplante Angebot und ermöglicht die Anmeldung zu einer Warteliste für den
          Frühzugang.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">3. Welche Daten wir verarbeiten</h2>
        <h3 className="mt-4 font-semibold text-navy-800">Warteliste</h3>
        <p className="mt-2">
          Wenn du dich für die Warteliste anmeldest, speichern wir:
        </p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>deine E-Mail-Adresse (Pflichtangabe)</li>
          <li>optional: dein Interesse an bestimmten Dokumentenarten</li>
          <li>Zeitpunkt der Anmeldung</li>
        </ul>
        <h3 className="mt-4 font-semibold text-navy-800">Technische Daten</h3>
        <p className="mt-2">
          Beim Besuch der Website können technische Daten (z. B. IP-Adresse, Browsertyp, Zugriffszeit)
          durch den Hosting-Anbieter verarbeitet werden. Details dazu findest du in den
          Datenschutzhinweisen des Hosters.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">4. Rechtsgrundlage</h2>
        <p className="mt-3">
          Die Verarbeitung deiner E-Mail-Adresse für die Warteliste erfolgt auf Grundlage deiner
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die du durch Absenden des Formulars erteilst.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">5. Speicherung & Hosting</h2>
        <p className="mt-3">
          Die Wartelisten-Daten werden in einer Datenbank gespeichert (z. B. Supabase, Server in
          der EU). Die Website wird über Vercel gehostet. Es gelten die Datenschutzbestimmungen der
          jeweiligen Anbieter.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">6. Speicherdauer</h2>
        <p className="mt-3">
          Wir speichern deine Daten, bis du der Speicherung widersprichst oder die Warteliste
          aufgelöst wird. Du kannst jederzeit die Löschung deiner Daten verlangen.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">7. Deine Rechte</h2>
        <p className="mt-3">Du hast folgende Rechte nach der DSGVO:</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>Auskunft über deine gespeicherten Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung deiner Daten</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Widerspruch gegen die Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
          <li>Beschwerde bei einer Aufsichtsbehörde</li>
        </ul>
        <p className="mt-3">
          Wende dich dazu an: [datenschutz@beispiel.de] oder nutze unser{" "}
          <Link href="/kontakt" className="font-medium text-navy-700 underline hover:text-navy-900">
            Kontaktformular
          </Link>
          .
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">8. Cookies</h2>
        <p className="mt-3">
          Diese Landingpage verwendet derzeit keine Tracking-Cookies. Sollte sich das ändern, wird
          diese Erklärung entsprechend aktualisiert.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-navy-900">9. Änderungen</h2>
        <p className="mt-3">
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich Rechtslage oder
          Funktionen der Website ändern.
        </p>
        <p className="mt-2 text-sm text-navy-500">Stand: Juni 2026 (Entwurf)</p>
      </section>
    </LegalPageLayout>
  );
}
