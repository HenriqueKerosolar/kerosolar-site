import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Revenda e Parcerias",
  description:
    "Seja parceiro KeroSolar: vendedores, instaladores e integradores. Treinamento, comissionamento e indicação de clientes na sua região.",
};

export default function RevendaPage() {
  return (
    <SolutionPage
      eyebrow="Revenda"
      title="Seja um parceiro KeroSolar"
      subtitle="Vários formatos de parceria para quem quer atuar no mercado fotovoltaico."
      image="/img/inversor_string.webp"
      imageAlt="Equipamentos fotovoltaicos"
    >
      <p>
        Temos diversos formatos de parceria onde cadastramos pessoas e empresas que querem
        atuar no mercado fotovoltaico. Fornecemos equipamentos para todas as topologias —
        String, Micro-inversor e String Otimizado — e fazemos parceria com integradores.
      </p>

      <h3>Vendedores (pessoas físicas ou jurídicas)</h3>
      <p>
        Damos um treinamento de vendas onde ensinamos as particularidades, topologias e
        formatos de negócio do ramo fotovoltaico. O vendedor prospecta seus clientes e conduz
        todo o processo de venda, sendo comissionado no momento em que o cliente fecha o
        projeto, de acordo com a forma de pagamento ou financiamento escolhido.
      </p>

      <h3>Instaladores</h3>
      <p>
        Empresas ou profissionais que queiram executar instalações em suas regiões, a partir
        de clientes prospectados por nós através de campanhas de marketing. Os profissionais
        passam por avaliação técnica e, caso necessário, recebem treinamento. Há um critério
        mínimo para formalizar a parceria.
      </p>

      <h3>Integradores</h3>
      <p>
        Têm preço de revenda e podem prospectar diretamente, beneficiando-se das nossas
        campanhas e da indicação de clientes na sua região. Cuidamos de toda a parte de
        financiamento para facilitar as vendas, oferecemos suporte técnico e, em breve, farão
        parte de uma plataforma de prestadores de serviços.
      </p>

      <p>
        <strong>Entre em contato para conhecer todos os detalhes de cada modalidade.</strong>
      </p>
    </SolutionPage>
  );
}
