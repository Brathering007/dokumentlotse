# MVP Demo-Modus – DokumentenLotse

## Überblick

Der Demo-Modus ermöglicht es Besuchern, ein **PDF hochzuladen** und eine **strukturierte Analyse in einfacher Sprache** zu erhalten – direkt auf der bestehenden Landingpage (`#demo`).

**Kernversprechen:** Ein Nutzer kann einen Behördenbrief hochladen und innerhalb von Sekunden eine verständliche Auswertung erhalten.

## Ablauf

1. Nutzer lädt PDF hoch (oder wählt ein Beispiel-Dokument)
2. Server extrahiert Text aus der PDF (`pdf-parse`)
3. OpenAI API analysiert den Text im Hintergrund
4. Strukturiertes JSON-Ergebnis wird als Kartenlayout angezeigt

## Demo-Limits

| Limit | Wert |
|-------|------|
| Analysen pro Tag | 1 (Cookie-basiert, 24 h) |
| Maximale Dateigröße | 2 MB |
| Unterstütztes Format | PDF mit lesbarem Text (keine Scans ohne OCR) |

## Geänderte Dateien

| Datei | Änderung |
|-------|----------|
| `package.json` | Dependencies + Script `generate-samples` |
| `next.config.ts` | `serverExternalPackages: ["pdf-parse"]` |
| `.env.example` | `OPENAI_API_KEY`, `OPENAI_MODEL` |
| `src/app/api/analyze/route.ts` | **Neu** – Analyse-API |
| `src/lib/analysis/types.ts` | **Neu** – TypeScript-Typen |
| `src/lib/analysis/constants.ts` | **Neu** – Limits & Konstanten |
| `src/lib/analysis/extract-pdf.ts` | **Neu** – PDF-Textextraktion |
| `src/lib/analysis/openai.ts` | **Neu** – OpenAI-Integration |
| `src/lib/analysis/prompt.ts` | **Neu** – System-Prompt |
| `src/lib/analysis/rate-limit.ts` | **Neu** – Demo Rate-Limit |
| `src/components/sections/DemoAnalyze.tsx` | **Neu** – Upload-UI |
| `src/components/sections/AnalysisResult.tsx` | **Neu** – Ergebnis-Karten |
| `src/data/sample-documents.ts` | **Neu** – Beispiel-Metadaten |
| `src/components/LandingPage.tsx` | Demo-Sektion eingefügt |
| `src/components/sections/Hero.tsx` | CTA „Jetzt testen" |
| `src/components/sections/Solution.tsx` | Text auf Demo aktualisiert |
| `src/data/content.ts` | Schritt 1 aktualisiert |
| `src/lib/analytics.ts` | Demo-Events |
| `scripts/generate-sample-pdfs.mjs` | **Neu** – PDF-Generator |
| `public/samples/*.pdf` | **Neu** – 3 Beispiel-Briefe |

## Neue Komponenten

- **`DemoAnalyze`** – Upload-Bereich mit Drag & Drop, Beispiel-Buttons, Ladezustand
- **`AnalysisResult`** – Strukturierte Ausgabe:
  - Worum geht es?
  - Wer hat das Schreiben verschickt?
  - Was wird von mir verlangt?
  - Fristen (hervorgehoben)
  - Was sollte ich jetzt tun?
  - Wichtiger Hinweis (Disclaimer)

## Environment Variables

| Variable | Pflicht (Demo) | Beschreibung |
|----------|----------------|--------------|
| `OPENAI_API_KEY` | **Ja** | OpenAI API Key (nur serverseitig!) |
| `OPENAI_MODEL` | Nein | Standard: `gpt-4o-mini` |

Bestehende Variablen (Warteliste etc.) bleiben unverändert.

```bash
cp .env.example .env.local
# OPENAI_API_KEY eintragen
```

## Testen

### 1. Lokal starten

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000/#demo](http://localhost:3000/#demo)

### 2. Mit Beispiel-PDFs

Klicke auf **Krankenkasse**, **Rentenversicherung** oder **Arbeitsagentur** im Demo-Bereich.

Die PDFs liegen unter `public/samples/` und können mit neuem Inhalt erzeugt werden:

```bash
npm run generate-samples
```

### 3. Mit eigener PDF

- Max. 2 MB
- Muss extrahierbaren Text enthalten (kein reiner Scan)
- 1 Analyse pro 24 Stunden im Demo-Modus

### 4. API direkt testen

```bash
curl -X POST http://localhost:3000/api/analyze \
  -F "file=@public/samples/krankenkasse.pdf"
```

### 5. Fehlerszenarien

| Szenario | Erwartete Meldung |
|----------|-------------------|
| Leere PDF | „Die PDF-Datei ist leer." |
| Beschädigte PDF | „… konnte nicht gelesen werden" |
| Scan ohne Text | „… keinen lesbaren Text" |
| Zu groß (>2 MB) | „… zu groß" |
| 2. Analyse am selben Tag | „Demo-Limit erreicht" |
| Fehlender API-Key | „OPENAI_API_KEY fehlt" |

## Deployment (Vercel)

Zusätzlich zu den Wartelisten-Variablen:

```
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
```

In Vercel → Project → Settings → Environment Variables setzen.

## Rechtlicher Hinweis

Die Analyse ist **keine Rechtsberatung**. Jede Ausgabe enthält einen Disclaimer. Nutzer sollen wichtige Entscheidungen selbst prüfen.
