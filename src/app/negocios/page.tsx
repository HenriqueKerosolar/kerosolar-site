import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Energia Solar para Empresas e Indústrias — Reduza Custos | KeroSolar",
  description:
    "Energia solar para empresas, comércios e indústrias: reduza a conta de luz em até 95%, elimine a hora-ponta e aumente a competitividade. Projeto, financiamento e homologação completos.",
  keywords: ["energia solar para empresas", "usina solar comercial", "solar industrial", "energia solar CNPJ", "gerador solar comercial", "redução de demanda energia"],
  alternates: { canonical: "https://www.kerosolar.com.br/negocios" },
  openGraph: {
    title: "Energia Solar para Empresas — até 95% de economia na conta",
    description: "KeroSolar: solução completa em energia solar para negócios de todos os portes. Orçamento gratuito e financiamento disponível.",
    images: [{ url: "/img/solar-panel.webp", width: 1200, height: 630 }],
  },
};

export default function NegociosPage() {
  return (
    <SolutionPage
      eyebrow="Negócios"
      title="Torne o seu negócio mais competitivo"
      subtitle="Da pequena empresa familiar à indústria — sempre a solução ideal para economizar em energia."
      image="/img/negocios-comercial.webp"
      imageAlt="Painéis solares em telhado de empresa/indústria"
    >
      <p>
        Atendemos os mais variados tipos de negócio, de todos os portes e segmentos: pequenas
        empresas familiares, bares, restaurantes, mercados, escolas e indústrias. Temos sempre
        a solução ideal para promover economia e tornar o seu negócio mais competitivo.
      </p>
      <p>
        Além de reduzir o valor das contas de energia, oferecemos soluções específicas como{" "}
        <strong>no-breaks solares</strong>, que mantêm os equipamentos funcionando na falta de
        energia, protegem os aparelhos e ainda geram parte da energia consumida. Por terem
        muita tecnologia embarcada, prolongam a vida útil das baterias — gerando economia
        adicional.
      </p>
      <p>
        Atendemos empresas com alto consumo que pagam <strong>demanda</strong> e têm tarifa
        elevada em horários de pico. Produzimos energia para atender a hora-ponta (período mais
        caro) e temos solução para zerar o consumo fora-ponta — mesmo para empresas que não
        possuem telhado disponível para instalação.
      </p>
      <p>
        Também montamos usinas solares para <strong>cooperativas</strong> (vários CPFs) e{" "}
        <strong>consórcios</strong> (vários CNPJs), além de fazendas solares para geração
        remota. Em grandes usinas, trabalhamos com importação direta, reduzindo
        consideravelmente os custos. Fazemos todo o processo ou atuamos em partes do projeto,
        inclusive grandes plantas Off-Grid.
      </p>
    </SolutionPage>
  );
}
