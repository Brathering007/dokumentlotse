export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Ist die Nutzung kostenlos?",
    answer:
      "Die Anmeldung zur Warteliste ist kostenlos. Über den geplanten Preis informieren wir dich transparent, bevor du etwas zahlst. Für die Testphase gibt es Frühzugang für Wartelisten-Mitglieder.",
  },
  {
    question: "Werden meine Dokumente gespeichert?",
    answer:
      "In der geplanten App soll dein Dokument nur so lange verarbeitet werden, wie nötig. Langfristige Speicherung ist nicht das Ziel. Details werden vor dem Start klar in der Datenschutzerklärung beschrieben.",
  },
  {
    question: "Ersetzt DokumentenLotse einen Anwalt?",
    answer:
      "Nein. DokumentenLotse ist eine Verständnishilfe – keine Rechts-, Steuer- oder Rentenberatung. Bei wichtigen Entscheidungen solltest du professionelle Beratung in Anspruch nehmen.",
  },
  {
    question: "Welche Dokumente werden unterstützt?",
    answer:
      "Der Fokus liegt auf Behörden- und Sozialversicherungspost: Krankenkasse, Arbeitsagentur, Rentenversicherung, Reha, Versicherungen und ähnliche Schreiben. Weitere Bereiche folgen schrittweise.",
  },
  {
    question: "Wie funktioniert DokumentenLotse?",
    answer:
      "Du lädst ein Foto oder PDF deines Briefes hoch. DokumentenLotse erklärt den Inhalt in einfacher Sprache und hebt Fristen sowie wichtige Aufgaben hervor. Aktuell ist das eine Vorschau – die App ist in Entwicklung.",
  },
  {
    question: "Ist meine E-Mail-Adresse sicher?",
    answer:
      "Ja. Deine E-Mail wird nur für die Warteliste und Informationen zum Start verwendet. Du kannst deine Einwilligung jederzeit widerrufen. Details findest du in unserer Datenschutzerklärung.",
  },
  {
    question: "Wann startet DokumentenLotse?",
    answer:
      "Wir befinden uns in der Testphase. Wartelisten-Mitglieder erfahren als Erste vom Start und erhalten Frühzugang. Je mehr Feedback wir sammeln, desto schneller können wir starten.",
  },
  {
    question: "Brauche ich technische Vorkenntnisse?",
    answer:
      "Nein. DokumentenLotse ist für Smartphone und einfache Bedienung konzipiert – große Schrift, klare Sprache, wenige Schritte.",
  },
  {
    question: "Können Angehörige mithelfen?",
    answer:
      "Ja, das ist ein wichtiger Anwendungsfall. Ein geplanter Familienmodus soll es ermöglichen, Briefe gemeinsam zu verstehen und vorzubereiten.",
  },
  {
    question: "Was passiert nach der Wartelisten-Anmeldung?",
    answer:
      "Du erhältst eine Bestätigung. Wir informieren dich per E-Mail über den Fortschritt und den Start. Optional kannst du uns sagen, welche Dokumente dir am wichtigsten sind – das hilft uns bei der Entwicklung.",
  },
  {
    question: "Funktioniert DokumentenLotse auch mit handschriftlichen Briefen?",
    answer:
      "Geplant ist die Verarbeitung von gedruckten Briefen und PDFs. Handschriftliche Dokumente sind schwieriger – das prüfen wir in späteren Versionen.",
  },
  {
    question: "Warum soll ich mich jetzt vormerken?",
    answer:
      "Je früher du dich einträgst, desto eher bist du beim Start dabei. Dein Feedback zu Dokumentenarten und Häufigkeit hilft uns, die richtigen Funktionen zuerst zu bauen.",
  },
];
