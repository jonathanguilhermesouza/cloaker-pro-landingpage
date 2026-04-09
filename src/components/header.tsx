"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-[var(--shadow-sm)]"
          : "bg-white/80 backdrop-blur-md border-b border-transparent"
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center" aria-label="CloakerAds">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LinkButton href="https://app.cloakerads.com" external variant="secondary" size="sm">
            Entrar
          </LinkButton>
          <LinkButton href="https://app.cloakerads.com" external variant="accent" size="sm">
            Começar agora
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-text)]"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-white">
          <div className="container-page py-5 flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-[15px] font-medium text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] rounded-md"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <LinkButton href="https://app.cloakerads.com" external variant="secondary" size="md">
                Entrar
              </LinkButton>
              <LinkButton href="https://app.cloakerads.com" external variant="accent" size="md">
                Começar agora
              </LinkButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
