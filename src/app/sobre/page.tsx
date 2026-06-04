import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Pillars } from "@/components/Pillars";
import { Reviews } from "@/components/Reviews";
import { QuoteCta } from "@/components/QuoteCta";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a KeroSolar",
  description:
    "A KeroSolar busca o melhor retorno para o seu investimento em energia solar fotovoltaica, com retorno mínimo de 24% ao ano e payback entre 3 e 5 anos.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title="Energia solar é investimento, não despesa"
        subtitle="Um kit gerador solar se paga sozinho. Nossa vocação é encontrar o melhor retorno para o seu investimento."
      />

      <section className="py-16 sm:py-20">
        <div className="container-px grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-[15px] leading-relaxed text-ink/80">
            <p>
              A KeroSolar tem por vocação buscar o melhor retorno para o seu investimento. Não
              lidamos com a energia fotovoltaica como uma simples compra de produto — nos
              empenhamos em encontrar a melhor opção para você, não importando o tamanho do
              projeto. Buscamos manter o tempo de retorno em torno de <strong className="text-brand-800">três anos</strong> em
              investimentos com verba própria ou <strong className="text-brand-800">cinco anos</strong> em caso de financiamento.
            </p>
            <p>
              O retorno do investimento é de no mínimo <strong className="text-brand-800">24% ao ano</strong>. Mesmo financiado, com
              os juros acrescidos nas parcelas, continua extremamente viável: as parcelas
              geralmente ficam no mesmo valor ou abaixo da conta de energia — e não sofrem os
              reajustes que a conta de luz tem (em média 27%, até três vezes ao ano), nem as
              bandeiras amarela, vermelha e vermelha 2.
            </p>
            <p>
              Conseguimos esse melhor retorno estando sempre atentos ao mercado. Como os
              equipamentos são muito equivalentes em funcionamento, garantias, potências e
              produção, indicamos sempre o melhor custo-benefício entre as marcas disponíveis no
              Brasil. Energia solar é um mercado dinâmico, onde preços e disponibilidade mudam
              rápido — e estamos sempre atentos para ter o melhor preço e produto disponível.
            </p>
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <p className="font-display text-lg font-semibold text-brand-800">
                Fazemos todo o processo
              </p>
              <p className="mt-2 text-sm text-muted">
                Dimensionamento de qualquer porte, projeto, implantação e homologação junto à
                concessionária local. Mesmo após a instalação e o fim da garantia, continuamos
                monitorando a sua usina.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-brand-800">KeroSolar em números</h2>
            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-3xl font-bold text-sun-600">{company.stats.projects}+</dt>
                <dd className="text-sm text-muted">Projetos completados ({company.stats.period})</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-sun-600">24%+</dt>
                <dd className="text-sm text-muted">Retorno mínimo ao ano</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-sun-600">+30 anos</dt>
                <dd className="text-sm text-muted">Vida útil estimada da usina</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold text-sun-600">95%</dt>
                <dd className="text-sm text-muted">Economia possível na conta de luz</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <Pillars />
      <Reviews />
      <QuoteCta />
    </>
  );
}
