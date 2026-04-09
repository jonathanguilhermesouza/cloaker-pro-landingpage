import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Sobre } from "@/components/sections/sobre";
import { Solucoes } from "@/components/sections/solucoes";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { Diferenciais } from "@/components/sections/diferenciais";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Precos } from "@/components/sections/precos";
import { FAQ } from "@/components/sections/faq";
import { Contato } from "@/components/sections/contato";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Solucoes />
        <ComoFunciona />
        <Diferenciais />
        <Depoimentos />
        <Precos />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
