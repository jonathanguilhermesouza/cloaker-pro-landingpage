"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";

const faqs = [
  {
    q: "O que é exatamente a CloakerAds?",
    a: "A CloakerAds é uma plataforma profissional de cloaking que protege suas campanhas de tráfego pago contra bots e plagiadores. Ela filtra o tráfego ruim antes que ele contamine suas métricas e mostra sua oferta real apenas para compradores qualificados, enquanto concorrentes e moderadores veem uma página neutra.",
  },
  {
    q: "Os bots contam no meu limite de 100 mil requisições diárias?",
    a: "Não. Esse é um dos principais diferenciais da CloakerAds. Filtramos o tráfego de bot antes de contabilizar como requisição válida. Você utiliza seu limite apenas com tráfego humano real, diferente de outras soluções do mercado.",
  },
  {
    q: "A CloakerAds funciona com Meta Ads, TikTok Ads e Google Ads?",
    a: "Sim. Temos integração nativa com Meta Ads (Facebook e Instagram) totalmente disponível, TikTok Ads em fase final de testes, e Google Ads no nosso roadmap. Independente da plataforma, você pode proteger qualquer fonte de tráfego hoje utilizando nossos filtros gerais.",
  },
  {
    q: "Como funciona a proteção contra plagiadores?",
    a: "A CloakerAds mostra uma página White Page (neutra e compliant) para qualquer visitante que não seja identificado como comprador legítimo. Além disso, todos os seus links de oferta são protegidos com assinatura digital, tornando impossível copiar ou reutilizar suas URLs.",
  },
  {
    q: "Preciso de servidor próprio ou VPS para usar?",
    a: "Não. A CloakerAds roda 100% sobre a rede global da Cloudflare. Você não precisa contratar, administrar ou configurar nenhum servidor. Apenas crie sua conta, configure suas campanhas e comece a usar imediatamente.",
  },
  {
    q: "Qual o tempo para subir minha primeira campanha?",
    a: "Menos de 5 minutos. Após criar sua conta, basta colar a URL da sua oferta, configurar os filtros desejados e ativar. Sua campanha já estará protegida.",
  },
  {
    q: "Posso cancelar o plano quando quiser?",
    a: "Sim. Não trabalhamos com fidelidade. Você pode cancelar o plano a qualquer momento, sem multas, sem burocracia e sem taxas adicionais.",
  },
  {
    q: "Os dados ficam em conformidade com a LGPD?",
    a: "Totalmente. A CloakerAds atua em conformidade com a Lei Geral de Proteção de Dados. Todo o tráfego é criptografado ponta a ponta, os dados são isolados por conta e mantemos a mesma segurança corporativa da infraestrutura Cloudflare.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" variant="surface">
      <SectionHeading
        label="FAQ"
        title={
          <>
            Perguntas <span className="gradient-text">Frequentes</span>
          </>
        }
        subtitle="Tire suas dúvidas sobre a CloakerAds. Se precisar de mais informações, entre em contato com nossa equipe."
      />

      <div className="mx-auto max-w-[800px]">
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-[16px] border bg-[var(--color-bg)] transition-all ${
                  isOpen
                    ? "border-[var(--color-primary)] shadow-[var(--shadow-md)]"
                    : "border-[var(--color-border-light)] hover:border-[var(--color-border)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15.5px] font-semibold text-[var(--color-text)]">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-gradient-to-br from-[#5BC4D4] to-[#9B4DCA] text-white"
                        : "bg-white border border-[var(--color-border)] text-[var(--color-text-muted)]"
                    }`}
                  >
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </div>
                </button>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[14.5px] leading-[1.75] text-[var(--color-text-muted)]">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
