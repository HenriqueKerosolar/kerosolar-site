import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.kerosolar.com.br/bombeamento-solar" },
  title: "Bombeamento Solar",
  description:
    "Sistemas de bombeamento solar para irrigação, piscicultura e hidroponia. Bombas monofásicas, bifásicas, trifásicas e kits CC. Frete grátis para o Brasil.",
};

export default function BombeamentoPage() {
  return (
    <SolutionPage
      eyebrow="Bombeamento solar"
      title="Água movida a energia do sol"
      subtitle="Sistemas para bombas tradicionais ou kits completos em CC, com financiamento e frete grátis para todo o Brasil."
      image="/img/bombeamento.webp"
      imageAlt="Bombeamento solar abastecendo bebedouro em propriedade rural"
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
