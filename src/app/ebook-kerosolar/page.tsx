import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/site";
import { WhatsappIcon } from "@/components/WhatsappIcon";

export const metadata: Metadata = {
  title: "E-book Gratuito: Guia Completo de Energia Solar | KeroSolar",
  description:
    "Baixe gratuitamente o e-book da KeroSolar sobre energia solar fotovoltaica. Descubra como economizar até 95% na conta de luz, calcular o payback e escolher o sistema ideal para sua casa ou empresa.",
  alternates: { canonical: "https://www.kerosolar.com.br/ebook-kerosolar" },
  openGraph: {
    title: "E-book Gratuito: Guia Completo de Energia Solar — KeroSolar",
    description:
      "Tudo que você precisa saber sobre energia solar: tipos de sistemas, payback, financiamento e como economizar até 95% na conta de luz.",
    images: [{ url: "/img/solar-panel.webp", width: 1200, height: 630 }],
  },
};

export default function EbookPage() {
  return (
    <main lang="pt-BR">
      <section className="bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 py-20 text-white">
        <div className="container-px mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-sun-500/20 px-4 py-1.5 text-sm font-medium text-sun-300 ring-1 ring-sun-500/30">
            Material gratuito
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Guia Completo de{" "}
            <span className="text-sun-400">Energia Solar</span>
          </h1>
          <p className="mt-4 text-lg text-brand-100">
            Tudo que você precisa saber antes de instalar painéis solares —
            tipos de sistema, financiamento, payback e como economizar até 95%
            na conta de luz.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/ebook-kerosolar.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-sun-500 px-8 py-4 text-lg font-semibold text-brand-900 shadow-lg shadow-sun-500/25 transition hover:bg-sun-400"
            >
              ↓ Baixar e-book grátis (PDF)
            </a>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
            >
              <WhatsappIcon className="h-5 w-5" />
              Falar com especialista
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-px mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-800">
            O que você vai aprender
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Como funciona um sistema solar fotovoltaico",
              "Diferença entre On-Grid, Off-Grid e Híbrido",
              "Como calcular o payback do investimento",
              "Opções de financiamento solar",
              "Como escolher o tamanho do sistema ideal",
              "Etapas de projeto e homologação na distribuidora",
              "Manutenção e vida útil dos painéis",
              "Como economizar até 95% na conta de luz",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-sun-500">✓</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl bg-brand-50 p-8 text-center">
            <p className="text-lg font-semibold text-brand-800">
              Pronto para dar o próximo passo?
            </p>
            <p className="mt-2 text-gray-600">
              Solicite um orçamento gratuito e personalizado para sua
              residência ou empresa.
            </p>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 font-semibold text-white transition hover:bg-brand-600"
            >
              <WhatsappIcon className="h-5 w-5" />
              Solicitar orçamento grátis
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
