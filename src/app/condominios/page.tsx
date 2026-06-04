import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Energia Solar para Condomínios",
  description:
    "Financiamento e implantação de usinas solares para condomínios, reduzindo em até 95% a despesa com energia. Síndicos não se tornam avalistas.",
};

export default function CondominiosPage() {
  return (
    <SolutionPage
      eyebrow="Condomínios"
      title="Reduza até 95% da energia do seu condomínio"
      subtitle="Intermediamos o financiamento e podemos cuidar de todo o processo — do recurso à homologação."
      image="/img/solar-panel.webp"
      imageAlt="Energia solar em condomínios"
    >
      <p>
        Atuamos junto a condomínios promovendo financiamento para usinas geradoras de energia
        solar, reduzindo as despesas com energia em <strong>até 95%</strong>. Podemos apenas
        intermediar o financiamento — sem necessidade de fazermos a implantação — mas temos
        total interesse em participar de todo o processo: do recurso necessário ao
        fornecimento de equipamentos, projeto e homologação.
      </p>
      <p>
        O dinheiro é depositado diretamente na conta do condomínio, e a empresa que executa a
        obra é escolhida em assembleia pelos condôminos.
      </p>
      <p>
        As parcelas do financiamento ficam dentro ou abaixo do valor da conta de energia e{" "}
        <strong>não sofrem reajuste</strong>, ao contrário da conta de luz (que aumenta no
        mínimo três vezes ao ano e ainda sofre com as bandeiras tarifárias). Como um gerador
        solar praticamente não requer manutenção e tem vida útil estimada em mais de 30 anos,
        o retorno é excelente, valoriza os imóveis e ainda pode gerar excedente para ratear
        entre os condôminos.
      </p>
      <p>
        Também oferecemos a condomínios financiamento para outras necessidades, como reformas,
        ampliações e até pagamento de rescisões trabalhistas. Os síndicos e conselheiros{" "}
        <strong>não se tornam avalistas</strong> da dívida e não precisam dar garantias
        pessoais — todo o negócio é fechado entre o condomínio e a financeira.
      </p>
    </SolutionPage>
  );
}
