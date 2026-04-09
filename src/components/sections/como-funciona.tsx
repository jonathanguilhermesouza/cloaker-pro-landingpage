import { Section, SectionHeading } from "@/components/ui/section";

const steps = [
  {
    number: "01",
    title: "Cadastro e Integração",
    text: "Crie sua conta em menos de 2 minutos e conecte suas campanhas à plataforma. Sem instalação, sem plugin, sem código. Só colar a URL e pronto.",
  },
  {
    number: "02",
    title: "Configuração dos Filtros",
    text: "Personalize os filtros de proteção conforme sua estratégia: país, dispositivo, VPN, referrer, parâmetros obrigatórios e muito mais. Tudo sob medida.",
  },
  {
    number: "03",
    title: "Proteção Ativa 24/7",
    text: "Suas campanhas passam a contar com proteção completa, bots filtrados antes de impactar métricas, ofertas blindadas e relatórios em tempo real.",
  },
];

export function ComoFunciona() {
  return (
    <Section id="como-funciona" variant="surface">
      <SectionHeading
        label="Como Funciona"
        title={
          <>
            Simples de começar,{" "}
            <span className="gradient-text">poderoso desde o primeiro dia</span>
          </>
        }
        subtitle="Em três passos simples, suas campanhas já estão protegidas contra bots e plagiadores."
      />

      <div className="grid gap-6 md:grid-cols-3 max-w-[1000px] mx-auto">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative rounded-[16px] border border-[var(--color-border-light)] bg-[var(--color-bg)] p-8 text-center transition-all hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-[17px] font-bold text-white shadow-[var(--shadow-md)]">
              {step.number}
            </div>
            <h3 className="mt-6 text-[20px] font-bold tracking-tight text-[var(--color-text)]">
              {step.title}
            </h3>
            <p className="mt-3 text-[14.5px] leading-[1.7] text-[var(--color-text-muted)]">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
