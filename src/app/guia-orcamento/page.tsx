import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Prose } from "@/components/Prose";
import { QuoteCta } from "@/components/QuoteCta";

export const metadata: Metadata = {
  title: "Como Entender um Orçamento de Gerador Solar",
  description:
    "Guia completo para comparar propostas de energia solar: entenda kWp, kWh, kVA, sobredimensionamento de inversores e como evitar armadilhas ao comprar um gerador solar.",
};

const glossary = [
  {
    term: "kWp — Quilowatt-pico",
    desc: "Quantidade de kW instalados em painéis: a soma da potência de todos os painéis ligados ao inversor. Ex.: 10 painéis de 400 W = 4.000 Wp = 4,0 kWp.",
  },
  {
    term: "kWh — Quilowatt-hora",
    desc: "Energia estimada que o gerador pode produzir (ou a média de consumo da conta). Depende da incidência solar, ângulo e direção do telhado, capacidade do inversor e quantidade de painéis.",
  },
  {
    term: "kW / kVA — Potência do inversor",
    desc: "Potência nominal do inversor (ou conjunto). Indica quantos kWp de painéis ele suporta e quanto consegue injetar na rede para formar crédito solar.",
  },
];

export default function GuiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Guia gratuito"
        title="Como entender o orçamento de um gerador solar"
        subtitle="Aprenda a comparar propostas, identificar o melhor preço por kWp e evitar armadilhas."
      />

      <section className="py-16 sm:py-20">
        <div className="container-px grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Prose>
            <p>
              Este guia esclarece como entender as diferenças entre as propostas solares que
              você recebe. Como há muitos formatos e gráficos — nem sempre coerentes — explicamos
              os pontos que devem ser observados para que você não compre um kit que não atenderá
              à sua necessidade, e consiga comparar quais empresas realmente têm o melhor preço
              por kWp.
            </p>

            <h3>Siglas e termos das propostas</h3>
            <div className="grid gap-4 not-prose">
              {glossary.map((g) => (
                <div key={g.term} className="rounded-xl border border-brand-100 bg-brand-50 p-4">
                  <p className="font-display font-semibold text-brand-800">{g.term}</p>
                  <p className="mt-1 text-sm text-muted">{g.desc}</p>
                </div>
              ))}
            </div>

            <h3>Preste atenção nesta comparação</h3>
            <p>
              Os fatores mais importantes ao comparar propostas são o <strong>kVA/kW máximo do
              inversor</strong> e a <strong>quantidade de kWp dos painéis</strong>. Não foque na
              quantidade de painéis nem na potência individual de cada um — o que faz diferença é
              o somatório em kWp.
            </p>
            <p>
              Exemplo: um kit de 3,6 kWp pode ter 8 painéis de 450 W ou 9 painéis de 400 W — os
              dois somam 3.600 Wp e terão a mesma geração. Usam-se painéis maiores quando o
              telhado não comporta muitos painéis menores, ou prevendo ampliação futura.
            </p>

            <h3>Cuidado com o sobredimensionamento</h3>
            <p>
              É comum encontrar propostas onde o kW/kVA do inversor é bem menor que o kWp dos
              painéis. Verifique no datasheet até quantos kWp o inversor suporta — algumas marcas
              aceitam 20%, outras 40% ou até 50% a mais. O problema: muitos inversores aceitam
              mais painéis, mas <strong>só injetam o valor nominal na rede</strong>. Um inversor
              de 4 kVA pode receber 5.600 Wp, mas se só joga 4.000 W para a rede, você estará
              jogando dinheiro fora.
            </p>
            <p>
              Além disso, em dias de sol forte o equipamento sofre aquecimento, perde produção e
              tem a vida útil reduzida por trabalhar no limite. O ideal é deixar uma folga,
              trabalhando em torno de <strong>80% da carga máxima</strong>, permitindo ampliação
              futura e compensando perdas de inclinação do telhado.
            </p>

            <div className="not-prose rounded-2xl border-l-4 border-sun-500 bg-sun-100/60 p-5">
              <p className="font-display font-semibold text-brand-800">💡 Dica de ouro</p>
              <p className="mt-2 text-sm text-ink/80">
                Desconfie sempre de uma proposta muito mais barata que as outras — costuma ser
                uma armadilha. No mercado fotovoltaico os equipamentos têm valores parecidos; o
                que muda é o suporte e o atendimento. Busque a empresa com mais clientes
                satisfeitos e bom histórico de soluções. <strong>O barato geralmente sai caro.</strong>
              </p>
            </div>

            <h3>String ou micro-inversor?</h3>
            <p>
              <strong>String:</strong> o mais utilizado no Brasil. Indicado para telhados
              uniformes com muitos painéis na mesma direção e inclinação. Tem preço inferior,
              visualização da produção e ampliação sem nova homologação (se houver espaço). A
              desvantagem é que a degradação ou o sombreamento de um painel afeta toda a linha
              ligada a ele.
            </p>
            <p>
              <strong>Micro-inversor:</strong> indicado para telhados com várias águas, direções
              e sombreamento parcial. Permite painéis de potências diferentes, cada um trabalha no
              ponto máximo, e facilita identificar painel defeituoso. As desvantagens são a
              manutenção (fica sob o painel), a necessidade de nova homologação ao ampliar e o
              custo maior em sistemas grandes — onde entra a opção do <strong>string otimizado</strong>,
              que une as duas tecnologias.
            </p>

            <p>
              Esperamos que este guia ajude na sua cotação. Estamos à disposição para tirar
              dúvidas sobre Híbridos, Off-Grid e Otimizados.
            </p>
          </Prose>

          {/* Sidebar download do e-book */}
          <aside className="sticky top-24 h-fit rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ebook-cover.webp"
              alt="E-book Anti-Cilada Solar"
              className="mx-auto w-48 rounded-xl shadow-lg"
            />
            <h2 className="mt-5 text-lg font-semibold text-brand-800">
              E-book grátis: Anti-Cilada Solar
            </h2>
            <p className="mt-1 text-sm text-muted">
              O Manual do Investidor Solar 2026 — tudo o que você precisa para comparar
              orçamentos e proteger o seu investimento.
            </p>
            <a
              href="/ebook-kerosolar.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-full bg-sun-500 px-6 py-3 text-center font-semibold text-brand-900 transition hover:bg-sun-400"
            >
              Baixar e-book grátis
            </a>
          </aside>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
