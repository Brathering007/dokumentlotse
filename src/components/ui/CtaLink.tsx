"use client";

import Link from "next/link";
import { trackCtaClick } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";

interface CtaLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "md" | "lg";
  location: string;
  className?: string;
}

export function CtaLink({
  href,
  children,
  variant = "primary",
  size = "lg",
  location,
  className,
}: CtaLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => trackCtaClick(location, typeof children === "string" ? children : undefined)}
      className={className}
    >
      <Button variant={variant} size={size} className="pointer-events-none">
        {children}
      </Button>
    </Link>
  );
}
