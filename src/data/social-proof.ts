export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
  placeholder: boolean;
}

export const placeholderTestimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Endlich verstehe ich, was in dem Reha-Brief stand. Meine Tochter musste früher immer alles erklären.",
    author: "Testnutzerin, 58",
    context: "Reha-Bescheid",
    placeholder: true,
  },
  {
    id: "2",
    quote:
      "Die Frist hätte ich sonst übersehen. Das hätte mich Nerven und Zeit gekostet.",
    author: "Testnutzer, 42",
    context: "Krankenkassen-Schreiben",
    placeholder: true,
  },
  {
    id: "3",
    quote:
      "Behördendeutsch ist für mich wie eine Fremdsprache. Einfache Erklärung wäre ein echter Gewinn.",
    author: "Testnutzerin, 63",
    context: "Arbeitsagentur",
    placeholder: true,
  },
];
