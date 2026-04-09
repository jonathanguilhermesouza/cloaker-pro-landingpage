import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant?: "default" | "surface";
}

export function Section({ className, children, variant = "default", ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "py-24 md:py-28",
        variant === "surface" ? "bg-white" : "bg-[var(--color-bg)]",
        className
      )}
      {...props}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

interface HeadingProps {
  label?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

export function SectionHeading({ label, title, subtitle, className }: HeadingProps) {
  return (
    <div className={cn("text-center mb-14 md:mb-16 mx-auto max-w-3xl", className)}>
      {label ? (
        <div className="inline-block mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
          {label}
        </div>
      ) : null}
      <h2 className="text-balance text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-text)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-[17px] leading-relaxed text-[var(--color-text-muted)] max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
