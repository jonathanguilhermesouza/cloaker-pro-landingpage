import { Quote } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const testimonials = [
  {
    quote:
      "Depois que troquei pela CloakerAds, meu ROAS parou de oscilar sem motivo. Descobri que era bot poluindo meu pixel. Em duas semanas já vi diferença real nas campanhas de Meta Ads.",
    author: "Rafael M.",
    role: "Gestor de Tráfego · Agência Digital",
  },
  {
    quote:
      "O que mais me chamou atenção foi o limite de 100 mil requisições por DIA. Antes eu gastava em 3 dias o que a CloakerAds me dá em um mês. Mudou meu jeito de escalar.",
    author: "Carolina S.",
    role: "Afiliada Premium · Nicho Saúde",
  },
  {
    quote:
      "A proteção contra plagiadores foi o motivo da escolha. Já tive criativo copiado em 24h duas vezes e depois da CloakerAds isso simplesmente parou de acontecer. Vale cada centavo.",
    author: "Eduardo L.",
    role: "E-commerce · Moda Masculina",
  },
];

export function Depoimentos() {
  return (
    <Section id="depoimentos" variant="surface">
      <SectionHeading
        label="Depoimentos"
        title={
          <>
            O que nossos <span className="gradient-text">clientes dizem</span>
          </>
        }
        subtitle="Resultados reais de afiliados, gestores de tráfego e agências que confiam na CloakerAds para proteger suas campanhas todos os dias."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-[16px] border border-[var(--color-border-light)] bg-[var(--color-bg)] p-8 transition-all hover:border-[var(--color-border)] hover:shadow-[var(--shadow-sm)]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white">
              <Quote className="h-4 w-4" />
            </div>
            <p className="mt-5 text-[15px] leading-[1.75] text-[var(--color-text)]">
              “{t.quote}”
            </p>
            <div className="mt-6 pt-5 border-t border-[var(--color-border-light)]">
              <div className="text-[14px] font-semibold text-[var(--color-text)]">
                {t.author}
              </div>
              <div className="text-[13px] text-[var(--color-text-muted)]">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
