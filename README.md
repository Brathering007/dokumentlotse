# DokumentenLotse

Landingpage und **MVP-Demo** zur Validierung der Geschäftsidee: Eine spezialisierte Verständnishilfe, die komplizierte Behörden-, Renten-, Krankenkassen-, Reha- und Versicherungsdokumente in einfache Sprache übersetzt.

**Hinweis:** Keine Rechtsberatung. DokumentenLotse dient ausschließlich als Verständnishilfe.

## Kernfunktion (Demo-Modus)

Besucher können auf der Startseite (`#demo`) ein **PDF hochladen** und erhalten eine strukturierte Analyse:

- Worum geht es?
- Wer hat das Schreiben verschickt?
- Was wird verlangt?
- Fristen
- Nächste Schritte

**Demo-Limits:** 1 Analyse pro Tag, max. 2 MB PDF.

→ Ausführliche Dokumentation: [`docs/MVP-DEMO.md`](docs/MVP-DEMO.md)

## Tech-Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **OpenAI API** (Demo-Analyse)
- **pdf-parse** (PDF-Textextraktion)
- **Supabase** (Warteliste in Produktion)
- **Mobile First**

## Schnellstart (lokal)

```bash
npm install
cp .env.example .env.local
# OPENAI_API_KEY und optional Supabase-Keys eintragen
npm run dev
```

Die App läuft unter [http://localhost:3000](http://localhost:3000).

**Demo testen:** [http://localhost:3000/#demo](http://localhost:3000/#demo)

**Lokal ohne Supabase:** Wartelisten-Einträge werden in `data/waitlist.json` gespeichert.

## Environment Variables

| Variable | Pflicht (Demo) | Beschreibung |
|----------|----------------|--------------|
| `OPENAI_API_KEY` | **Ja** | OpenAI API Key (nur serverseitig!) |
| `OPENAI_MODEL` | Nein | Standard: `gpt-4o-mini` |
| `WAITLIST_PROVIDER` | Empfohlen | `supabase` oder `json` |
| `NEXT_PUBLIC_SUPABASE_URL` | Prod | Supabase-Projekt-URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Prod | Service Role Key (nur serverseitig!) |

> **Wichtig:** `OPENAI_API_KEY` und `SUPABASE_SERVICE_ROLE_KEY` niemals im Client-Code oder Git speichern.

## Beispiel-PDFs erzeugen

```bash
npm run generate-samples
```

Erzeugt 3 Test-Briefe unter `public/samples/` (Krankenkasse, Rentenversicherung, Arbeitsagentur).

## Warteliste einrichten (Supabase)

1. Konto auf [supabase.com](https://supabase.com) erstellen
2. Projekt anlegen (Region: EU)
3. `supabase/schema.sql` im SQL Editor ausführen
4. Env-Variablen setzen (siehe `.env.example`)

## Deployment auf Vercel

1. `npm run build` lokal prüfen
2. Repository bei [vercel.com](https://vercel.com) importieren
3. Environment Variables setzen:
   - `OPENAI_API_KEY`
   - `WAITLIST_PROVIDER`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
4. Deploy

## Projektstruktur

```
src/
├── app/
│   ├── api/
│   │   ├── analyze/        # Demo-Analyse (POST, PDF)
│   │   └── waitlist/       # Wartelisten-API
│   ├── impressum/
│   ├── datenschutz/
│   ├── kontakt/
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── DemoAnalyze.tsx      # Upload & Demo-UI
│   │   ├── AnalysisResult.tsx   # Analyse-Ergebnis
│   │   └── ...
│   └── ui/
├── lib/
│   ├── analysis/           # PDF, OpenAI, Rate-Limit
│   └── waitlist/
├── data/
public/
└── samples/                # Beispiel-PDFs
docs/
└── MVP-DEMO.md
```

## API

### `POST /api/analyze`

Multipart-Upload mit Feld `file` (PDF).

```bash
curl -X POST http://localhost:3000/api/analyze -F "file=@public/samples/krankenkasse.pdf"
```

### `POST /api/waitlist`

```json
{ "email": "beispiel@email.de", "documentInterest": "Krankenkasse" }
```

## Rechtlicher Hinweis

> Keine Rechtsberatung. DokumentenLotse dient ausschließlich als Verständnishilfe.

**Vor öffentlichem Start:**
- Impressum mit echten Daten ausfüllen
- Datenschutzerklärung prüfen (Hinweis auf Dokumenten-Upload/OpenAI)
- Kontakt-E-Mail anpassen

## Lizenz

Privates Projekt – MVP in Entwicklung.
