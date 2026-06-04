import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Bombeamento Solar",
  description:
    "Sistemas de bombeamento solar para hidroponia, piscicultura, irrigação e reservatórios. Bombas monofásicas, bifásicas, trifásicas e kits em CC com frete grátis para todo o Brasil.",
};

export default function BombeamentoPage() {
  return (
    <SolutionPage
      eyebrow="Bombeamento solar"
      title="Água movida a energia do sol"
      subtitle="Sistemas para bombas tradicionais ou kits completos em CC, com financiamento e frete grátis para todo o Brasil."
      image="/img/solar-panel.webp"
      imageAlt="Bombeamento solar"
    >
      <p>
        Trabalhamos com vários tipos de sistema de bombeamento solar. Fornecemos sistemas para
        gerar energia para bombas tradicionais — monofásicas, bifásicas e trifásicas — e também
        kits de bombeamento completos (drive, painéis fotovoltaicos e bombas em CC).
      </p>
      <p>Temos equipamentos para atender todas as necessidades:</p>
      <ul>
        <li>Hidroponia e piscicultura</li>
        <li>Irrigação</li>
        <li>Distribuição de água e abastecimento de reservatórios</li>
      </ul>
      <p>
        Também <strong>financiamos</strong> esses equipamentos e enviamos com{" "}
        <strong>frete grátis para todo o território nacional</strong>. Caso necessite de mão de
        obra, é possível solicitar o orçamento com instalação inclusa e financiar tudo junto.
        São ideais para instalações remotas, onde levar a rede de energia tradicional sairia
        muito caro.
      </p>
      <p>
        Temos outras soluções de geração para o agro —{" "}
        <strong>solicite uma consultoria</strong> com nossos especialistas.
      </p>
    </SolutionPage>
  );
}
