import { Cloud, ShieldCheck, Headphones, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const items = [
  {
    icon: Cloud,
    title: "Infraestrutura Cloudflare",
    text: "Rodamos 100% sobre a Cloudflare — a mesma rede global que protege Shopify, Discord e IBM. Mais de 330 cidades, 99,99% de uptime garantido e estabilidade corporativa.",
  },
  {
    icon: ShieldCheck,
    title: "LGPD Compliant",
    text: "Seus dados e dos seus visitantes estão protegidos com criptografia ponta a ponta. Atuamos em total conformidade com a Lei Geral de Proteção de Dados.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    text: "Acompanhamento próximo com suporte humanizado em português. Nossa equipe está sempre disponível para ajudar você a escalar suas campanhas com segurança.",
  },
  {
    icon: MapPin,
    title: "100% Brasileiro",
    text: "Empresa brasileira, com atendimento em português e dados hospedados em infraestrutura global Cloudflare — o melhor dos dois mundos.",
  },
];

export function Diferenciais() {
  return (
    <Section id="diferenciais">
      <SectionHeading
        label="Diferenciais"
        title={
          <>
            Por que escolher a <span className="gradient-text">CloakerAds</span>
          </>
        }
        subtitle="Tecnologia de ponta, suporte de verdade e um preço justo. Tudo em um só lugar."
      />

      <div className="grid gap-6 md:grid-cols-2 max-w-[1000px] mx-auto">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-5 rounded-[16px] border border-[var(--color-border-light)] bg-white p-7 transition-all hover:border-[var(--color-border)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-[18px] font-bold tracking-tight text-[var(--color-text)]">
                {item.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.7] text-[var(--color-text-muted)]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
