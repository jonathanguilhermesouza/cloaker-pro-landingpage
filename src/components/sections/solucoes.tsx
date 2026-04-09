import {
  Bot,
  Eye,
  Globe,
  BarChart3,
  Lock,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const features = [
  {
    icon: Bot,
    title: "Filtragem de Bots",
    text: "Bloqueia crawlers, scrapers e ferramentas automáticas antes que contaminem suas métricas. Seus dados de conversão passam a refletir apenas tráfego humano real.",
  },
  {
    icon: Eye,
    title: "Proteção Anti-Espionagem",
    text: "White Page inteligente mostra uma página neutra para concorrentes, moderadores e espiões, enquanto compradores reais são direcionados à sua oferta.",
  },
  {
    icon: Globe,
    title: "Filtros Geográficos",
    text: "Segmentação por país, dispositivo, idioma, VPN, referrer e parâmetros obrigatórios. Defina exatamente quem vê sua oferta em cliques.",
  },
  {
    icon: FlaskConical,
    title: "Teste A/B Inteligente",
    text: "Distribua o tráfego entre múltiplas variantes de oferta com divisão matematicamente exata. Descubra o que converte mais sem margem para erro.",
  },
  {
    icon: BarChart3,
    title: "Relatórios em Tempo Real",
    text: "Painel completo com gráficos, histórico de 90 dias, filtros avançados e motivos de bloqueio em português. Tudo o que acontece, na hora.",
  },
  {
    icon: Lock,
    title: "Links Assinados",
    text: "Suas URLs são protegidas com assinatura digital, impossíveis de copiar ou reutilizar. Nem seu concorrente, nem ferramenta de tracking consegue burlar.",
  },
];

export function Solucoes() {
  return (
    <Section id="solucoes">
      <SectionHeading
        label="Soluções"
        title={
          <>
            Tudo que você precisa para{" "}
            <span className="gradient-text">proteger suas campanhas</span>
          </>
        }
        subtitle="A CloakerAds oferece uma plataforma completa de proteção e otimização para anunciantes sérios que não podem perder tempo nem dinheiro."
      />

      {/* Main highlight card */}
      <div className="mb-12 rounded-[20px] border border-[var(--color-border-light)] bg-white p-8 md:p-12 shadow-[var(--shadow-sm)]">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <div className="flex h-[84px] w-[84px] items-center justify-center rounded-[20px] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white shadow-[var(--shadow-md)]">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <div>
            <div className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
              Produto Principal
            </div>
            <h3 className="mt-1.5 text-[28px] md:text-[32px] font-bold tracking-tight text-[var(--color-text)]">
              CloakerAds Proteção Total
            </h3>
            <p className="mt-3 text-[16px] leading-[1.7] text-[var(--color-text-muted)]">
              Uma solução completa de cloaking profissional que transforma a forma como suas
              campanhas de tráfego pago performam. Rodando sobre a Cloudflare para garantir
              velocidade, estabilidade e conformidade absoluta.
            </p>
          </div>
        </div>
      </div>

      {/* Feature grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-[16px] border border-[var(--color-border-light)] bg-white p-7 transition-all hover:border-[var(--color-border)] hover:shadow-[var(--shadow-md)] hover:-translate-y-0.5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
              <f.icon className="h-[18px] w-[18px]" />
            </div>
            <h3 className="mt-5 text-[18px] font-bold tracking-tight text-[var(--color-text)]">
              {f.title}
            </h3>
            <p className="mt-2.5 text-[14.5px] leading-[1.7] text-[var(--color-text-muted)]">
              {f.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
