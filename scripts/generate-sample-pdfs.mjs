/**
 * Erzeugt realistische Beispiel-PDFs für den Demo-Modus.
 * Ausführen: node scripts/generate-sample-pdfs.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import PDFDocument from "pdfkit";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "samples");

const samples = [
  {
    filename: "krankenkasse.pdf",
    title: "AOK Nordost – Krankenkasse",
    body: `AOK Nordost
Krankenkasse

Ihr Zeichen: KK-2026-44821
Datum: 15.03.2026

Betreff: Nachforderung von Unterlagen zum Krankengeld

Sehr geehrte Frau Müller,

wir haben festgestellt, dass die von Ihnen vorgelegten Arbeitsunfähigkeitsbescheinigungen für den Zeitraum vom 01.02.2026 bis 15.02.2026 nicht vollständig sind.

Die Leistungsgewährung kann erst nach Vorlage der vollständigen Nachweise erfolgen.

Bitte übermitteln Sie uns die fehlenden Unterlagen innerhalb von vier Wochen nach Zugang dieses Schreibens.

Fehlende Unterlagen:
- Arbeitsunfähigkeitsbescheinigung vom 08.02.2026
- Bestätigung der Arbeitsunfähigkeit für den Zeitraum 10.02.–15.02.2026

Mit freundlichen Grüßen
Ihre AOK Nordost`,
  },
  {
    filename: "rentenversicherung.pdf",
    title: "Deutsche Rentenversicherung",
    body: `Deutsche Rentenversicherung Bund
10963 Berlin

Aktenzeichen: 12 3456789 R 012 3
Datum: 12.03.2026

Bescheid zur medizinischen Rehabilitation

Sehr geehrter Herr Schmidt,

aufgrund Ihrer Antragstellung vom 12.03.2026 teilen wir Ihnen mit, dass die medizinische Rehabilitation voraussichtlich erforderlich ist.

Der Leistungsträger wird über die Kostenübernahme entscheiden.

Bitte reichen Sie bis zum 28.04.2026 die angeforderten Unterlagen vollständig ein. Andernfalls kann der Antrag als zurückgenommen gelten.

Angeforderte Unterlagen:
- Aktueller Arztbericht mit Diagnose und Therapieverlauf
- Befundberichte der letzten 12 Monate
- Medikationsplan

Mit freundlichen Grüßen
Deutsche Rentenversicherung Bund`,
  },
  {
    filename: "arbeitsagentur.pdf",
    title: "Agentur für Arbeit",
    body: `Agentur für Arbeit Berlin-Mitte
10178 Berlin

Kundennummer: 123 456789 01
Datum: 05.04.2026

Aufforderung zur Mitwirkung

Sehr geehrter Herr Weber,

Sie sind verpflichtet, Ihre Mitwirkungspflichten nach § 60 SGB I zu erfüllen.

Uns liegen keine Nachweise über Ihre Bewerbungsaktivitäten im Berichtszeitraum vom 01.03.2026 bis 31.03.2026 vor.

Bitte reichen Sie bis zum 20.05.2026 eine schriftliche Darlegung Ihrer Bemühungen ein. Andernfalls kann ein Leistungsanspruch entfallen.

Erforderlich:
- Liste Ihrer Bewerbungen (Datum, Unternehmen, Stelle)
- Nachweise über Bewerbungsaktivitäten (z. B. E-Mails, Bestätigungen)

Mit freundlichen Grüßen
Agentur für Arbeit Berlin-Mitte`,
  },
];

fs.mkdirSync(outDir, { recursive: true });

for (const sample of samples) {
  const filePath = path.join(outDir, sample.filename);
  await new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);
    doc.fontSize(14).text(sample.title, { underline: true });
    doc.moveDown();
    doc.fontSize(11).text(sample.body, { lineGap: 4 });
    doc.end();
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
  console.log(`Erstellt: ${filePath}`);
}

console.log("Alle Beispiel-PDFs wurden erzeugt.");
