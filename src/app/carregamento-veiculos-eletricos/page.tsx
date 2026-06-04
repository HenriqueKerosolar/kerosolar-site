import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { QuoteCta } from "@/components/QuoteCta";

export const metadata: Metadata = {
  title: "Carregamento de Veículos Elétricos com Energia Solar",
  description:
    "Carregadores (wallbox) e estações de recarga para carros elétricos abastecidos pela sua usina solar. Abasteça com a luz do sol e elimine o custo de combustível em casa, no condomínio ou na empresa.",
};

const steps = [
  {
    n: "1",
    title: "Sua usina gera energia",
    text: "Os painéis solares produzem energia limpa durante o dia e injetam o excedente na rede, formando créditos.",
  },
  {
    n: "2",
    title: "O carregador é instalado",
    text: "Instalamos um carregador (wallbox) dedicado ou aproveitamos inversores com saída para veículos elétricos.",
  },
  {
    n: "3",
    title: "Você abastece com o sol",
    text: "Carregue durante o dia direto da geração solar, ou à noite usando os créditos acumulados. Combustível praticamente zero.",
  },
];

const types = [
  {
    title: "Wallbox residencial",
    text: "Carregador de parede para casas e apartamentos. Recarga muito mais rápida e segura que a tomada comum, com proteções elétricas dedicadas.",
  },
  {
    title: "Inversores com saída plugin",
    text: "Inversores de string otimizado e híbridos já trazem tomadas incorporadas para veículos elétricos, integrando geração e recarga em um só equipamento.",
  },
  {
    title: "Estações para empresas e condomínios",
    text: "Pontos de recarga para frotas, clientes e moradores — combinados com carports solares que cobrem o estacionamento e geram energia.",
  },
];

export default function VeiculosEletricosPage() {
  return (
    <>
      <PageHero
        eyebrow="Carregamento veicular"
        title="Abasteça seu carro elétrico com a luz do sol"
        subtitle="Una energia solar e mobilidade elétrica: recarregue em casa, no condomínio ou na empresa com custo de combustível próximo de zero."
      />

      {/* Intro */}
      <section className="py-16 sm:py-20">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">
              Energia solar + mobilidade elétrica
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-800 sm:text-4xl">
              O combustível do futuro vem do telhado
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
              Carregar um veículo elétrico na tomada comum é lento e nem sempre seguro. Com uma
              solução de recarga integrada à sua usina solar, você abastece com a própria energia
              que gera — eliminando o maior custo de um carro elétrico e tornando a sua frota
              verdadeiramente sustentável.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/80">
              A KeroSolar dimensiona o gerador, indica o carregador ideal e cuida de toda a
              instalação elétrica, com total segurança e dentro das normas.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contato"
                className="rounded-full bg-sun-500 px-6 py-3 font-semibold text-brand-900 transition hover:bg-sun-400"
              >
                Solicitar consultoria
              </Link>
              <Link
                href="/geradores#hibrido"
                className="rounded-full border border-brand-200 px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                Ver geradores
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/parkingSolarPage.webp"
              alt="Estacionamento com cobertura solar e recarga de veículos elétricos"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-brand-50 py-16 sm:py-20">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-brand-800 sm:text-4xl">Como funciona</h2>
            <p className="mt-4 text-muted">
              Em três passos, o sol passa a abastecer o seu veículo.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-brand-100 bg-white p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sun-400 to-sun-600 font-display text-lg font-bold text-brand-900">
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-800">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de solução */}
      <section className="py-16 sm:py-20">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">Soluções</p>
            <h2 className="mt-2 text-3xl font-bold text-brand-800 sm:text-4xl">
              O carregador certo para cada lugar
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {types.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-brand-100 bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <PlugIcon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-800">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Benefícios */}
          <div className="mt-12 grid gap-4 rounded-2xl bg-brand-700 p-8 text-white sm:grid-cols-2 lg:grid-cols-4">
            <Benefit value="≈ R$ 0" label="de combustível ao carregar com geração própria" />
            <Benefit value="100%" label="energia limpa e renovável" />
            <Benefit value="+ valor" label="ao imóvel e à sua frota" />
            <Benefit value="Seguro" label="instalação dentro das normas técnicas" />
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}

function Benefit({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold text-sun-400">{value}</p>
      <p className="mt-1 text-sm text-brand-100">{label}</p>
    </div>
  );
}

function PlugIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2v6M15 2v6" />
      <path d="M7 8h10v3a5 5 0 0 1-10 0V8z" />
      <path d="M12 16v6" />
    </svg>
  );
}
