import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <Image
        src="/logo.png"
        alt="CloakerAds"
        width={64}
        height={64}
        className="h-16 w-16"
        priority
      />
      <span className="text-[20px] tracking-tight text-[var(--color-text)]">
        <span className="font-bold">Cloaker</span><span className="font-normal">Ads</span>
      </span>
    </div>
  );
}
