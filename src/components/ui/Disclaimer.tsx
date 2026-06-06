import { DISCLAIMER } from "@/lib/constants";

interface DisclaimerProps {
  className?: string;
  variant?: "inline" | "banner" | "banner-dark";
}

export function Disclaimer({ className = "", variant = "inline" }: DisclaimerProps) {
  if (variant === "banner") {
    return (
      <div
        className={`rounded-xl border border-navy-200 bg-navy-50 px-4 py-3 text-sm leading-relaxed text-navy-700 ${className}`}
        role="note"
      >
        <strong className="font-semibold text-navy-800">Hinweis: </strong>
        {DISCLAIMER}
      </div>
    );
  }

  if (variant === "banner-dark") {
    return (
      <div
        className={`rounded-xl border border-navy-700 bg-navy-800 px-4 py-3 text-sm leading-relaxed text-navy-200 ${className}`}
        role="note"
      >
        <strong className="font-semibold text-white">Hinweis: </strong>
        {DISCLAIMER}
      </div>
    );
  }

  return (
    <p className={`text-sm leading-relaxed text-navy-600 ${className}`} role="note">
      {DISCLAIMER}
    </p>
  );
}
