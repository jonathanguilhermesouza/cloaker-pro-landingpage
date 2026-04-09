import type { SVGProps } from "react";

export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="CloakerAds"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="ca-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="ca-shine" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#ca-grad)" />
      <circle cx="20" cy="20" r="20" fill="url(#ca-shine)" />
      <path
        d="M20 9.5 L28.5 12.8 V20.2 C28.5 25.3 24.9 29.6 20 31 C15.1 29.6 11.5 25.3 11.5 20.2 V12.8 L20 9.5 Z"
        fill="#FFFFFF"
      />
      <path
        d="M16.4 20.3 L18.9 22.8 L23.9 17.6"
        stroke="url(#ca-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-8 w-8" />
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        CloakerAds
      </span>
    </div>
  );
}
