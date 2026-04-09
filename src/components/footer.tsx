import { Mail, MapPin, Cloud } from "lucide-react";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Produto",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Soluções", href: "#solucoes" },
      { label: "Como Funciona", href: "#como-funciona" },
      { label: "Diferenciais", href: "#diferenciais" },
    ],
  },
  {
    title: "Plataforma",
    links: [
      { label: "Preços", href: "#precos" },
      { label: "FAQ", href: "#faq" },
      { label: "Entrar no App", href: "https://app.cloakerads.com", external: true },
      { label: "Criar Conta", href: "https://app.cloakerads.com", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de Uso", href: "#" },
      { label: "Política de Privacidade", href: "#" },
      { label: "LGPD", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-light)] bg-white">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[14px] leading-[1.7] text-[var(--color-text-muted)]">
              Proteção profissional para campanhas de tráfego pago. Filtramos bots, blindamos
              ofertas e rodamos 100% sobre a infraestrutura global da Cloudflare.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg)] px-3 py-1.5 text-[11.5px] font-medium text-[var(--color-text-muted)]">
                <Cloud className="h-3 w-3 text-[var(--color-primary)]" />
                Cloudflare Partner
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg)] px-3 py-1.5 text-[11.5px] font-medium text-[var(--color-text-muted)]">
                LGPD Compliant
              </span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-text)]">
                {col.title}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) =>
                  "external" in link && link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[14px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Company info */}
        <div className="mt-14 pt-10 border-t border-[var(--color-border-light)] grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-text)]">
              Empresa
            </div>
            <p className="mt-3 text-[13.5px] leading-[1.7] text-[var(--color-text-muted)]">
              <span className="font-semibold text-[var(--color-text)]">
                UPMind Empreendimentos Digitais LTDA
              </span>
              <br />
              CNPJ: 54.639.288/0001-78
            </p>
            <div className="mt-3 flex items-start gap-2 text-[13.5px] text-[var(--color-text-muted)]">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[var(--color-primary)]" />
              <span>São José dos Campos · SP · Brasil</span>
            </div>
          </div>
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-text)]">
              Contato
            </div>
            <a
              href="mailto:contato@cloakerads.com"
              className="mt-3 inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
            >
              <Mail className="h-4 w-4" />
              contato@cloakerads.com
            </a>
            <p className="mt-3 text-[13px] text-[var(--color-text-light)]">
              Atendimento de segunda a sexta, em português.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-[var(--color-border-light)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[12.5px] text-[var(--color-text-light)]">
            © {new Date().getFullYear()} CloakerAds · UPMind Empreendimentos Digitais LTDA. Todos os direitos reservados.
          </div>
          <div className="text-[12.5px] text-[var(--color-text-light)] font-mono">
            lp.cloakerads.com
          </div>
        </div>
      </div>
    </footer>
  );
}
