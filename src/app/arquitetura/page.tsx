import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Arquitetura e Coberturas Solares",
  description:
    "Coberturas solares para estacionamentos, garagens, terraços e áreas externas. Painéis como substitutos das telhas, unindo beleza, modernidade e sustentabilidade.",
};

export default function ArquiteturaPage() {
  return (
    <SolutionPage
      eyebrow="Arquitetura e coberturas"
      title="Painéis que geram energia e valorizam o projeto"
      subtitle="Coberturas solares para as mais diversas aplicações, do carport ao terraço."
      image="/img/parkingSolarPage.webp"
      imageAlt="Cobertura solar de estacionamento"
    >
      <p>
        Montamos e projetamos coberturas solares para as mais diversas aplicações: carports
        para estacionamentos e garagens, terraços e áreas externas. Os painéis podem ser
        utilizados como substitutos das telhas convencionais, levando sofisticação ao
        ambiente, além do benefício de gerar energia.
      </p>
      <p>
        O aproveitamento de áreas — até internas — com coberturas feitas somente de painéis
        está cada vez mais em alta. Arquitetos e engenheiros entenderam que incorporar painéis
        solares aos seus projetos traz beleza, modernidade e a grande vantagem da
        sustentabilidade, aproveitando ao máximo espaços cada vez mais caros.
      </p>
      <p>
        <strong>O planeta agradece.</strong> Entre em contato para mais informações.
      </p>
    </SolutionPage>
  );
}
