import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Geração Remota de Energia Solar",
  description:
    "Modalidades de geração remota: pessoa física/jurídica, condomínios, cooperativas, consórcios e fazendas solares. A KeroSolar cuida de todo o processo.",
};

export default function GeracaoRemotaPage() {
  return (
    <SolutionPage
      eyebrow="Geração remota"
      title="Gere energia em um local, consuma em outro"
      subtitle="Cada modalidade tem finalidade e regras específicas. Conte com quem conhece as normas vigentes."
      image="/img/geracao-remota.webp"
      imageAlt="Fazenda solar para geração remota de energia"
    >
      <p>
        Existem vários tipos de geração remota, cada um com finalidade específica e regras
        determinadas. Veja os mais utilizados no mercado solar:
      </p>
      <ol>
        <li>
          <strong>Pessoa física ou jurídica:</strong> a modalidade mais homologada hoje. Todos
          os medidores devem estar no mesmo CPF ou CNPJ (sem mesclar) e dentro da área da mesma
          concessionária. Gera-se energia em um local — próprio ou alugado — para abater o
          consumo de outras unidades sem espaço ou condições de instalação.
        </li>
        <li>
          <strong>Condomínios:</strong> o condomínio instala um gerador para reduzir a conta
          das áreas comuns e, havendo espaço, pode ampliar a geração para ratear o excedente
          com os condôminos.
        </li>
        <li>
          <strong>Cooperativa:</strong> um grupo de no mínimo 20 CPFs aluga ou monta uma usina
          para atender a todos os cooperados. Não há limite de CPFs e é possível incluir ou
          remover membros ao longo do tempo.
        </li>
        <li>
          <strong>Consórcio:</strong> voltado a pessoas jurídicas (mínimo dois CNPJs). Vários
          CNPJs se juntam para produzir a energia utilizada nas empresas, conforme a
          necessidade de cada membro.
        </li>
        <li>
          <strong>Fazendas solares:</strong> investidores montam usinas para atender empresas
          e pessoas físicas, cobrando um valor de kWh abaixo do praticado pelas concessionárias.
        </li>
      </ol>
      <p>
        Todas as modalidades exigem um profissional que conheça profundamente as normas
        vigentes para que o projeto não corra o risco de ser reprovado.{" "}
        <strong>
          Conte com a KeroSolar para todo o processo jurídico, estudo de viabilidade técnica,
          projeto junto à concessionária, financiamento, instalação, homologação e manutenção.
        </strong>
      </p>
    </SolutionPage>
  );
}
