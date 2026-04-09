import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lp.cloakerads.com"),
  title: {
    default: "CloakerAds | Proteção Profissional para Campanhas de Tráfego Pago",
    template: "%s · CloakerAds",
  },
  description:
    "CloakerAds protege suas campanhas de anúncios contra bots, plagiadores e espionagem. Rodando 100% na Cloudflare — 100 mil requisições por dia, domínios e campanhas ilimitados. R$197/mês.",
  keywords: [
    "cloaker",
    "cloakerads",
    "cloaker profissional",
    "proteção de campanhas",
    "Meta Ads",
    "TikTok Ads",
    "tráfego pago",
    "afiliado",
    "anti-bot",
    "white page",
    "cloudflare",
  ],
  authors: [{ name: "CloakerAds" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lp.cloakerads.com",
    siteName: "CloakerAds",
    title: "CloakerAds | Proteção Profissional para Campanhas de Tráfego Pago",
    description:
      "100 mil requisições por dia. Domínios e campanhas ilimitados. Cloudflare incluso. R$197/mês, plano único.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloakerAds | Proteção Profissional para Campanhas de Tráfego Pago",
    description:
      "100 mil requisições por dia. Domínios e campanhas ilimitados. Cloudflare incluso. R$197/mês, plano único.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
