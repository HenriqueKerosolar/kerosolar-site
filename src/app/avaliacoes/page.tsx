import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reviews } from "@/components/Reviews";
import { QuoteCta } from "@/components/QuoteCta";

export const metadata: Metadata = {
  title: "Avaliações de Clientes",
  description:
    "Veja o que os clientes da KeroSolar dizem sobre o atendimento, a qualidade técnica e a execução dos projetos de energia solar.",
};

export default function AvaliacoesPage() {
  return (
    <>
      <PageHero
        eyebrow="Avaliações"
        title="Clientes que confiam na KeroSolar"
        subtitle="Atendimento técnico, preço justo e total transparência — do orçamento à homologação."
      />
      <Reviews />
      <QuoteCta />
    </>
  );
}
