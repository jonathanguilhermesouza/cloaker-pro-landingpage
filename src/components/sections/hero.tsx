import { ArrowRight, ShieldCheck, Cloud, Zap } from "lucide-react";
import { LinkButton } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[180px] pb-[100px] bg-white">
      {/* Soft gradient background */}
      <div className="absolute inset-0 hero-bg pointer-events-none" aria-hidden />

      <div className="container-page relative">
        <div className="mx-auto max-w-[800px] text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-[13px] font-medium text-[var(--color-text-muted)] shadow-[var(--shadow-sm)] animate-fade-up">
            <Cloud className="h-3.5 w-3.5 text-[var(--color-primary)]" />
            <span>Powered by Cloudflare</span>
            <span className="text-[var(--color-border)]">·</span>
            <span>100 mil requisições/dia</span>
          </div>

          {/* Headline */}
          <h1
            className="mt-7 text-[44px] md:text-[56px] lg:text-[64px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--color-text)] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Proteja suas campanhas{" "}
            <span className="gradient-text">de forma inteligente</span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-6 text-[18px] md:text-[19px] leading-[1.65] text-[var(--color-text-muted)] max-w-[680px] mx-auto animate-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            A CloakerAds oferece proteção profissional para suas campanhas de tráfego pago,
            filtrando bots que poluem suas métricas e blindando sua oferta contra plagiadores.
            Tudo rodando 100% na infraestrutura global da Cloudflare.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <LinkButton href="https://app.cloakerads.com" external variant="accent" size="lg">
              Começar agora
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton href="#solucoes" variant="secondary" size="lg">
              Conhecer soluções
            </LinkButton>
          </div>

          {/* Trust badges */}
          <div
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            <TrustBadge icon={Cloud} label="Cloudflare Global" />
            <TrustBadge icon={ShieldCheck} label="LGPD Compliant" />
            <TrustBadge icon={Zap} label="99,99% Uptime" />
            <TrustBadge icon={ShieldCheck} label="Links Blindados" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBadge({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center justify-center gap-2.5 text-[13.5px] font-medium text-[var(--color-text-muted)]">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-surface-alt)] text-[var(--color-primary)]">
        <Icon className="h-4 w-4" />
      </div>
      {label}
    </div>
  );
}
