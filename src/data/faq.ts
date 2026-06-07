export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Ist die Nutzung kostenlos?",
    answer:
      "Die Anmeldung zur Warteliste ist kostenlos. Über den geplanten Preis informieren wir dich transparent, bevor du etwas zahlst. Wartelisten-Mitglieder erhalten Frühzugang.",
  },
  {
    question: "Was kostet die App später?",
    answer:
      "Das Modell ist noch in Planung. Wir testen gerade, was fair ist – z. B. ein günstiges Monatsabo statt hoher Einmalpreise. Deine Angabe zur Zahlungsbereitschaft hilft uns dabei (freiwillig).",
  },
  {
    question: "Werden meine Dokumente gespeichert?",
    answer:
      "In der geplanten App soll dein Dokument nur so lange verarbeitet werden, wie nötig. Langfristige Speicherung ist nicht das Ziel. Details werden vor dem Start in der Datenschutzerklärung beschrieben.",
  },
  {
    question: "Ersetzt DokumentenLotse einen Anwalt?",
    answer:
      "Nein. DokumentenLotse ist eine Verständnishilfe – keine Rechts-, Steuer- oder Rentenberatung. Bei wichtigen Entscheidungen solltest du professionelle Beratung in Anspruch nehmen.",
  },
  {
    question: "Welche Dokumente werden unterstützt?",
    answer:
      "Unser Fokus: Krankenkasse, Krankengeld, Rentenversicherung, Reha, Erwerbsminderung und Arbeitsagentur. Nicht Finanzamt, Mietrecht oder allgemeine Verträge.",
  },
  {
    question: "Warum nicht einfach ChatGPT?",
    answer:
      "ChatGPT und andere KI-Systeme können Bescheide oft erklären – das ist hilfreich. DokumentenLotse soll diese Art von Brief gezielt aufbereiten: typische Fristen, Abläufe und Dokumenttypen aus Krankenkasse, Reha, Rentenversicherung und Arbeitsagentur – strukturiert und ohne jedes Mal den Kontext neu zu setzen.",
  },
  {
    question: "Wie funktioniert DokumentenLotse?",
    answer:
      "Im Demo-Modus auf der Startseite lädst du ein PDF hoch. DokumentenLotse erklärt den Inhalt in einfacher Sprache und hebt Fristen sowie Aufgaben hervor. Die vollständige App ist noch in Entwicklung – der Demo-Modus zeigt das Kernversprechen.",
  },
  {
    question: "Ist meine E-Mail-Adresse sicher?",
    answer:
      "Wir verwenden deine E-Mail nur für die Warteliste und Informationen zum Start. Du kannst deine Einwilligung jederzeit widerrufen. Details findest du in der Datenschutzerklärung.",
  },
  {
    question: "Werden Daten in den USA gespeichert?",
    answer:
      "Wir planen EU-Hosting (z. B. Supabase Frankfurt) und minimale Datenspeicherung. Konkrete Details werden vor dem Start veröffentlicht.",
  },
  {
    question: "Wann startet DokumentenLotse?",
    answer:
      "Wir sind in der Testphase. Wartelisten-Mitglieder erfahren als Erste vom Start. Je mehr Feedback wir sammeln, desto gezielter bauen wir.",
  },
  {
    question: "Brauche ich technische Vorkenntnisse?",
    answer:
      "Nein. DokumentenLotse ist für Smartphone konzipiert – große Schrift, klare Sprache, wenige Schritte.",
  },
  {
    question: "Können Angehörige mithelfen?",
    answer:
      "Ja – ein wichtiger Anwendungsfall. Ein geplanter Familienmodus soll gemeinsames Verstehen und Vorbereiten ermöglichen.",
  },
  {
    question: "Was passiert nach der Wartelisten-Anmeldung?",
    answer:
      "Du erhältst eine Bestätigung. Wir informieren dich per E-Mail über Fortschritt und Start. Optional kannst du uns sagen, welche Briefe dir am wichtigsten sind.",
  },
  {
    question: "Kann ich meine Anmeldung widerrufen?",
    answer:
      "Ja, jederzeit per E-Mail an uns (siehe Kontaktseite). Wir löschen deine Wartelisten-Daten auf Anfrage.",
  },
  {
    question: "Funktioniert es mit handschriftlichen Briefen?",
    answer:
      "Geplant ist die Verarbeitung von gedruckten Briefen und PDFs. Handschrift ist schwieriger – das prüfen wir später.",
  },
  {
    question: "Warum soll ich mich jetzt vormerken?",
    answer:
      "Je früher du dabei bist, desto eher erhältst du Frühzugang. Dein Feedback zu Dokumenten, Häufigkeit und Zahlungsbereitschaft hilft uns, das Richtige zuerst zu bauen.",
  },
];
