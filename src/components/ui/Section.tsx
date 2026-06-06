interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light" | "dark";
}

const backgroundClasses = {
  white: "bg-white",
  light: "bg-navy-50",
  dark: "bg-navy-900 text-white",
};

export function Section({
  id,
  children,
  className = "",
  background = "white",
}: SectionProps) {
  return (
    <section id={id} className={`py-14 sm:py-20 ${backgroundClasses[background]} ${className}`}>
      <div className="mx-auto max-w-3xl px-5 sm:px-6">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-2xl font-bold leading-tight sm:text-3xl ${light ? "text-white" : "text-navy-900"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-lg leading-relaxed ${light ? "text-navy-200" : "text-navy-600"} ${centered ? "mx-auto max-w-2xl" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
