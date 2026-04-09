import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[12px] border-2 transition-all duration-200 select-none whitespace-nowrap focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] border-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:border-[var(--color-primary-dark)] hover:-translate-y-[1px] hover:shadow-[var(--shadow-md)]",
  secondary:
    "bg-white border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:-translate-y-[1px] hover:shadow-[var(--shadow-sm)]",
  ghost:
    "bg-transparent border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-primary)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6 text-[14px]",
  lg: "h-13 px-7 text-[15px] py-3.5",
};

interface LinkButtonProps extends BaseProps {
  href: string;
  external?: boolean;
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  children,
}: LinkButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
