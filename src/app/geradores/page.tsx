import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { QuoteCta } from "@/components/QuoteCta";

export const metadata: Metadata = {
  title: "Geradores Solares — On-Grid, Off-Grid e Híbridos",
  description:
    "Conheça os geradores solares On-Grid, Off-Grid e Híbridos da KeroSolar: inversores de string, micro-inversores, string otimizado e sistemas para todas as necessidades.",
};

const onGridTypes = [
  {
    title: "Inversor central ou centralizado",
    text: "Usado em grandes plantas (usinas de grande porte), onde um único inversor converte grande quantidade de energia. Está caindo em desuso pelo custo elevado de manutenção e pela perda total de geração em caso de pane.",
  },
  {
    title: "Inversores de string",
    text: "Os mais comercializados no Brasil. Excelente custo-benefício para grandes, médias e pequenas plantas. Indicados para telhados com poucas águas e sem sombreamento. Garantia de 5 a 15 anos (estendida).",
  },
  {
    title: "Micro-inversores",
    text: "Muito versáteis: instalam em praticamente qualquer telhado, atendem bem sombreamento, permitem painéis de potências diferentes e monitoramento individual por painel — agilizando a detecção de falhas.",
  },
  {
    title: "Inversores de string otimizados",
    text: "O melhor dos dois mundos: custo do string com monitoramento individual por painel. Ideais para média/grande planta com maior segurança e ótimos para estações de recarga de veículos elétricos.",
  },
];

export default function GeradoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Geradores solares"
        title="O gerador certo para cada necessidade"
        subtitle="On-Grid, Off-Grid e Híbridos — projetamos e dimensionamos plantas de qualquer porte."
      />

      <div className="container-px py-16 sm:py-20">
        {/* On-Grid */}
        <section id="on-grid" className="scroll-mt-24">
          <span className="rounded-full bg-sun-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sun-700">
            Conectado à rede
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-800">Gerador Solar On-Grid</h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink/80">
            Sistema onde os geradores são ligados à rede da concessionária para geração de
            crédito em kWh, abatendo total ou parcialmente o consumo mensal. O excedente fica
            acumulado para uso posterior. As topologias mais utilizadas são:
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {onGridTypes.map((t) => (
              <div key={t.title} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-brand-800">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Off-Grid */}
        <section id="off-grid" className="mt-16 scroll-mt-24 border-t border-brand-100 pt-12">
          <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Isolado / industrial
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-800">Gerador Solar Off-Grid</h2>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4 text-[15px] leading-relaxed text-ink/80">
              <p>
                Sistema totalmente desligado da rede (ou com entrada para outra fonte de
                energia além de painéis e baterias), que não gera crédito solar. Indicado para
                quem precisa de energia onde a concessionária não atende ou atende mal: câmeras
                e telecom em locais remotos, iluminação de estradas, canteiros de obra e
                propriedades isoladas.
              </p>
              <p>
                Trabalhamos com sistemas Off-Grid a partir de <strong className="text-brand-800">1 kVA (pico de 3 kVA)</strong> até
                8 kVA (pico de 24 kVA) em 127 V ou 220 V; e geradores trifásicos de 10 kVA
                (pico 30 kVA) até <strong className="text-brand-800">120 kVA (pico 320 kVA)</strong> em 220 V ou 380 V.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/offgridGenerator.webp" alt="Gerador Off-Grid" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Híbrido */}
        <section id="hibrido" className="mt-16 scroll-mt-24 border-t border-brand-100 pt-12">
          <span className="rounded-full bg-eco-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-eco-600">
            Múltiplas fontes
          </span>
          <h2 className="mt-3 text-3xl font-bold text-brand-800">Geradores Híbridos</h2>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
            <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-brand-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/kit-hibrido.webp" alt="Kit gerador solar híbrido com bateria" className="h-full w-full object-contain" />
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed text-ink/80">
              <p>
                O que caracteriza um inversor híbrido é a capacidade de aceitar várias fontes de
                energia simultaneamente — rede, painéis solares e bancos de baterias — escolhendo
                de forma inteligente a melhor fonte para cada momento.
              </p>
              <p>
                É a solução ideal para quem busca autonomia e segurança energética, mantendo o
                fornecimento mesmo em quedas de energia, ao mesmo tempo em que aproveita ao
                máximo a geração solar.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contato" className="rounded-full bg-sun-500 px-6 py-3 font-semibold text-brand-900 transition hover:bg-sun-400">
                  Solicitar consultoria
                </Link>
                <Link href="/guia-orcamento" className="rounded-full border border-brand-200 px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50">
                  Guia de orçamento
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <QuoteCta />
    </>
  );
}
