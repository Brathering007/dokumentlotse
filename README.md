# DokumentenLotse AI

Landingpage zur Validierung der Geschäftsidee: Eine KI, die komplizierte Behörden-, Renten-, Krankenkassen-, Reha- und Versicherungsdokumente in einfache Sprache übersetzt.

**Hinweis:** Dies ist ein MVP zur Ideenvalidierung – keine Rechtsberatung. DokumentenLotse AI dient ausschließlich als Verständnishilfe.

## Tech-Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Supabase** (Warteliste in Produktion)
- **Mobile First** – optimiert für Smartphone-Nutzung

## Schnellstart (lokal)

```bash
# Abhängigkeiten installieren
npm install

# Optionale lokale Env-Datei (kopieren und anpassen)
cp .env.example .env.local

# Entwicklungsserver starten
npm run dev
```

Die App läuft unter [http://localhost:3000](http://localhost:3000).

**Lokal ohne Supabase:** Wartelisten-Einträge werden in `data/waitlist.json` gespeichert (automatischer Fallback).

## Environment Variables

| Variable | Pflicht (Prod) | Beschreibung |
|----------|----------------|--------------|
| `WAITLIST_PROVIDER` | Empfohlen | `supabase` oder `json` |
| `NEXT_PUBLIC_SUPABASE_URL` | Ja (Prod) | Supabase-Projekt-URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Ja (Prod) | Service Role Key (nur serverseitig!) |

Kopiere `.env.example` nach `.env.local` für lokale Entwicklung.

> **Wichtig:** Den `SUPABASE_SERVICE_ROLE_KEY` niemals im Client-Code oder im Git-Repository speichern. Nur in Vercel Environment Variables setzen.

## Warteliste einrichten (Supabase – empfohlen für Produktion)

1. Kostenloses Konto auf [supabase.com](https://supabase.com) erstellen
2. Neues Projekt anlegen (Region: EU, z. B. Frankfurt)
3. Im **SQL Editor** die Datei `supabase/schema.sql` ausführen
4. Unter **Settings → API** URL und **service_role** Key kopieren
5. In Vercel (oder `.env.local`) die Env-Variablen setzen:
   ```
   WAITLIST_PROVIDER=supabase
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=eyJ...
   ```

Einträge einsehen: Supabase → **Table Editor** → `waitlist`

### Alternative Speicher-Optionen (Überblick)

| Option | Vorteil | Nachteil |
|--------|---------|----------|
| **Supabase** ✅ | Robust, EU-Hosting, skaliert, einfache API | Einmalige Einrichtung |
| **Airtable** | Tabellen-UI ohne Code | API-Limits, weniger „production-ready“ |
| **Google Sheets** | Bekannte Oberfläche | OAuth/Service-Account umständlich |
| **Mailchimp/Resend** | Gut für E-Mail-Versand | Kein vollwertiger Datenspeicher |

**Empfehlung für MVP:** Supabase – kostenlos, in 15 Minuten eingerichtet, funktioniert zuverlässig mit Vercel.

## Deployment auf Vercel

### Voraussetzungen

- GitHub/GitLab/Bitbucket-Repository mit dem Projekt
- Supabase-Projekt mit Wartelisten-Tabelle (siehe oben)
- Impressum-Platzhalter ausgefüllt (Pflicht vor öffentlichem Start in DE)

### Schritte

1. **Build lokal prüfen**
   ```bash
   npm run build
   ```

2. **Bei [vercel.com](https://vercel.com) anmelden** und „Add New Project“ wählen

3. **Repository importieren** – Vercel erkennt Next.js automatisch

4. **Environment Variables** setzen (Settings → Environment Variables):
   - `WAITLIST_PROVIDER` = `supabase`
   - `NEXT_PUBLIC_SUPABASE_URL` = deine Supabase-URL
   - `SUPABASE_SERVICE_ROLE_KEY` = dein Service Role Key

5. **Deploy** – nach dem ersten Deploy ist die Seite unter `*.vercel.app` erreichbar

6. **Custom Domain** (optional): Vercel → Project → Domains

### Nach dem Deployment prüfen

- [ ] Startseite lädt korrekt
- [ ] `/impressum`, `/datenschutz`, `/kontakt` erreichbar
- [ ] Wartelisten-Formular speichert Eintrag in Supabase
- [ ] Footer-Links funktionieren

## Projektstruktur

```
src/
├── app/
│   ├── api/waitlist/       # Wartelisten-API (POST)
│   ├── impressum/          # Impressum
│   ├── datenschutz/        # Datenschutzerklärung (Entwurf)
│   ├── kontakt/            # Kontakt
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx            # Landingpage
├── components/
│   ├── layout/             # Header, Footer, LegalPageLayout
│   ├── sections/           # Hero, Problem, Lösung, Beispiele, etc.
│   └── ui/                 # Button, Card, Section, Disclaimer
├── data/                   # Demo-Texte & Beispielanalysen
├── lib/
│   ├── constants.ts
│   └── waitlist/           # JSON (lokal) + Supabase (Prod)
└── types/
supabase/
└── schema.sql              # Datenbank-Schema für Warteliste
```

## API

**Endpunkt:** `POST /api/waitlist`

```json
{
  "email": "beispiel@email.de",
  "documentInterest": "Krankenkasse"
}
```

Mögliche Werte für `documentInterest` (optional): Krankenkasse, Arbeitsagentur, Rentenversicherung, Reha, Versicherung, Sonstiges.

## Rechtlicher Hinweis

> Keine Rechtsberatung. DokumentenLotse AI dient ausschließlich als Verständnishilfe und ersetzt keine professionelle Beratung.

**Vor der öffentlichen Testphase:**
- Impressum-Platzhalter mit echten Daten ersetzen
- Datenschutzerklärung rechtlich prüfen lassen
- Kontakt-E-Mail anpassen

## Nächste Schritte (nach Validierung)

- Willkommens-E-Mail via Resend bei Wartelisten-Anmeldung
- Analytics (datenschutzkonform, z. B. Plausible)
- Echte Dokumenten-Upload-Funktion entwickeln

## Lizenz

Privates Projekt – MVP in Entwicklung.
