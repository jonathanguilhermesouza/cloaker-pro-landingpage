import { Target, Eye, Heart } from "lucide-react";
import { Section } from "@/components/ui/section";

const pillars = [
  {
    icon: Target,
    title: "Missão",
    text: "Oferecer proteção profissional e acessível para anunciantes e gestores de tráfego, garantindo métricas limpas e ofertas blindadas contra bots e plagiadores.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência nacional em proteção de campanhas de tráfego pago, conectando anunciantes sérios à tecnologia global da Cloudflare de forma simples e poderosa.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Transparência com nossos clientes, conformidade com a LGPD, suporte humanizado em português e compromisso com resultados reais — sem letra miúda.",
  },
];

export function Sobre() {
  return (
    <Section id="sobre" variant="surface">
      <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
        <div className="inline-block mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
          Sobre Nós
        </div>
        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-text)]">
          Quem é a <span className="gradient-text">CloakerAds</span>
        </h2>
        <p className="mt-5 text-[17px] leading-relaxed text-[var(--color-text-muted)]">
          Uma plataforma brasileira focada em proteger e otimizar campanhas de tráfego pago,
          combinando inteligência de filtragem com a infraestrutura global da Cloudflare.
        </p>
      </div>

      <div className="max-w-[860px] mx-auto mb-16">
        <div className="rounded-[16px] border border-[var(--color-border-light)] bg-[var(--color-bg)] p-8 md:p-10">
          <p className="text-[16px] leading-[1.75] text-[var(--color-text-muted)]">
            A <span className="font-semibold text-[var(--color-text)]">CloakerAds</span> nasceu da
            necessidade real de afiliados, gestores de tráfego e agências que estavam cansados de
            pagar caro por soluções instáveis, com limites baixos e que contavam bots como
            requisições válidas. Desenvolvemos uma plataforma que filtra tráfego malicioso antes de
            impactar suas métricas, esconde sua oferta real de concorrentes e moderadores, e roda
            100% sobre a rede global da Cloudflare — a mesma infraestrutura usada por empresas como
            Shopify, Discord e IBM.
          </p>
          <p className="mt-4 text-[16px] leading-[1.75] text-[var(--color-text-muted)]">
            Nossa proposta é simples: entregar a melhor proteção do mercado com{" "}
            <span className="font-semibold text-[var(--color-text)]">
              100 mil requisições por dia
            </span>
            , domínios e campanhas ilimitados, por um preço justo e transparente.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-[16px] border border-[var(--color-border-light)] bg-[var(--color-bg)] p-8 transition-all hover:border-[var(--color-border)] hover:shadow-[var(--shadow-sm)] hover:-translate-y-0.5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
              <pillar.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-[20px] font-bold tracking-tight text-[var(--color-text)]">
              {pillar.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-[var(--color-text-muted)]">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
