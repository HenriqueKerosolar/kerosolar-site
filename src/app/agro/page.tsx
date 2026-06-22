import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Energia Solar para o Agronegócio",
  description:
    "Soluções solares para o agro: irrigação, bombeamento, refrigeração, automação e energia para áreas remotas sem acesso à rede tradicional.",
};

export default function AgroPage() {
  return (
    <SolutionPage
      eyebrow="Agronegócio"
      title="Energia solar para o homem do campo"
      subtitle="Onde o agro precisar de energia, a KeroSolar tem a solução com menor custo e pagamento financiado."
      image="/img/agro-solar-rural.webp"
      imageAlt="Instalação de energia solar em propriedade rural"
    >
      <p>
        Damos muita importância ao agro e atendemos aos mais variados ramos. Temos equipamentos
        para reduzir a sua conta de energia em <strong>até 95%</strong> e também para gerar
        energia em propriedades não atendidas pelas concessionárias, que hoje dependem de
        geradores a combustão ou rodas d&apos;água — geralmente incapazes de gerar energia
        suficiente para máquinas e equipamentos.
      </p>
      <p>
        Levamos conforto ao homem do campo e a possibilidade de usar tecnologias até então
        distantes da sua realidade. Atendemos desde áreas remotas, impossíveis de alcançar com
        a energia tradicional, até grandes geradores solares capazes de sustentar:
      </p>
      <ul>
        <li>Irrigação de grandes áreas</li>
        <li>Energia para grandes máquinas e automação de sistemas</li>
        <li>Refrigeração</li>
        <li>Bombeamento solar para diferentes fontes de água e reservatórios</li>
        <li>Hidroponia e piscicultura</li>
      </ul>
      <p>
        <strong>Entre em contato</strong> e conheça a solução correta para a sua propriedade.
      </p>
    </SolutionPage>
  );
}
