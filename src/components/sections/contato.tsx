import { ArrowRight, Mail } from "lucide-react";

export function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-28 bg-white">
      <div className="absolute inset-0 hero-bg pointer-events-none" aria-hidden />
      <div className="container-page relative">
        <div className="mx-auto max-w-[860px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-dark)] to-[var(--color-secondary)] p-10 md:p-14 text-center text-white shadow-[var(--shadow-xl)]">
          <div className="inline-block mb-5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] backdrop-blur">
            Pronto para começar?
          </div>
          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-extrabold leading-[1.15] tracking-[-0.025em]">
            Proteja suas campanhas<br />
            <span className="text-white/80">de forma profissional</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.65] text-white/90 max-w-[560px] mx-auto">
            Comece agora mesmo com o plano único mais completo do mercado. Sem fidelidade,
            sem taxa de setup, e com suporte dedicado em português.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.cloakerads.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[12px] border-2 border-white bg-white px-7 h-13 py-3.5 text-[15px] font-semibold text-[var(--color-primary)] transition-all hover:-translate-y-[1px] hover:shadow-[var(--shadow-lg)]"
            >
              Começar agora
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:contato@cloakerads.com"
              className="inline-flex items-center justify-center gap-2 rounded-[12px] border-2 border-white/30 bg-transparent px-7 h-13 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/60"
            >
              <Mail className="h-4 w-4" />
              Fale conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
