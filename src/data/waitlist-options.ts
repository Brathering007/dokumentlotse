import type { PaymentWillingness } from "@/types";

export const letterFrequencyOptions = [
  "Selten (1–2× pro Jahr)",
  "Monatlich",
  "Mehrmals pro Monat",
  "Wöchentlich oder öfter",
] as const;

export const paymentWillingnessOptions: PaymentWillingness[] = [
  "Ja, wenn es mein Problem löst",
  "Ja, bis 5 € pro Monat",
  "Ja, bis 10 € pro Monat",
  "Nur wenn kostenlos",
  "Nein / noch unsicher",
];
