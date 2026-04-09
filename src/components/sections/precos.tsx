import { Check, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";

const features = [
  "100.000 requisições por DIA",
  "Domínios ilimitados",
  "Campanhas ilimitadas",
  "Filtros avançados de proteção",
  "Infraestrutura Cloudflare inclusa",
  "White Page + Offer Page",
  "Teste A/B com múltiplas variantes",
  "Dashboard em tempo real",
  "Histórico completo de 90 dias",
  "Links blindados com assinatura digital",
  "Integração Meta Ads e TikTok Ads",
  "Suporte dedicado em português",
];

export function Precos() {
  return (
    <Section id="precos">
      <SectionHeading
        label="Planos"
        title={
          <>
            Um plano único.{" "}
            <span className="gradient-text">Simples e transparente</span>
          </>
        }
        subtitle="Sem pegadinhas, sem letra miúda, sem cobrança adicional por requisição. Tudo incluído em um único plano para qualquer tamanho de operação."
      />

      <div className="mx-auto max-w-[560px]">
        <div className="relative overflow-hidden rounded-[20px] border border-[var(--color-border-light)] bg-white shadow-[var(--shadow-xl)]">
          {/* Top ribbon */}
          <div className="bg-gradient-to-r from-[#5BC4D4] to-[#9B4DCA] py-3 text-center text-[12px] font-bold uppercase tracking-[0.15em] text-white">
            Plano Único · Mais Completo do Mercado
          </div>

          <div className="p-8 md:p-10">
            <div className="text-center">
              <div className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
                CloakerAds Professional
              </div>

              <div className="mt-5 flex items-baseline justify-center gap-2">
                <span className="text-[22px] font-semibold text-[var(--color-text-muted)]">
                  R$
                </span>
                <span className="text-[72px] md:text-[80px] font-extrabold leading-none tracking-tight text-[var(--color-text)]">
                  197
                </span>
                <span className="text-[18px] font-medium text-[var(--color-text-muted)]">
                  /mês
                </span>
              </div>

              <p className="mt-3 text-[14px] text-[var(--color-text-muted)]">
                Plano único, para todos os tamanhos de operação
              </p>

              <LinkButton
                href="https://app.cloakerads.com"
                external
                variant="accent"
                size="lg"
                className="mt-8 w-full"
              >
                Começar agora
                <ArrowRight className="h-4 w-4" />
              </LinkButton>

              <p className="mt-3 text-[12.5px] text-[var(--color-text-light)]">
                Sem fidelidade · Cancele quando quiser · Sem taxa de setup
              </p>
            </div>

            <ul className="mt-10 grid gap-3.5 border-t border-[var(--color-border-light)] pt-8">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-[14.5px]">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5BC4D4] to-[#9B4DCA] text-white">
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </div>
                  <span className="text-[var(--color-text)]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
