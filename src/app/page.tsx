import Link from "next/link";
import { Hero } from "@/components/Hero";
import { PartnerLogos } from "@/components/PartnerLogos";
import { ServicesStrip } from "@/components/ServicesStrip";
import { SolutionCards } from "@/components/SolutionCards";
import { Pillars } from "@/components/Pillars";
import { Reviews } from "@/components/Reviews";
import { GuideBanner } from "@/components/GuideBanner";
import { QuoteCta } from "@/components/QuoteCta";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <ServicesStrip />

      {/* Intro / valor */}
      <section className="py-16 sm:py-20">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/solutions-kerosolar.png"
              alt="Soluções solares KeroSolar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">
              Um distribuidor de suprimentos solares
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-800 sm:text-4xl">
              Soluções solares para todos os tipos de clientes
            </h2>
            <p className="mt-4 text-muted">
              Fazemos todo o processo e dimensionamento de qualquer porte: projeto,
              implantação e homologação junto à concessionária local. Mesmo após instalado e
              com o fim da garantia, continuamos monitorando a sua usina.
            </p>
            <p className="mt-4 text-muted">
              Fornecemos equipamentos fotovoltaicos para todas as topologias — String,
              Micro-inversor e String Otimizado — sempre buscando o melhor custo-benefício e a
              maior produção por m², tornando o seu payback muito mais rápido.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/geradores"
                className="rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
              >
                Conhecer geradores
              </Link>
              <Link
                href="/sobre"
                className="rounded-full border border-brand-200 px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                Sobre a KeroSolar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SolutionCards />
      <Pillars />
      <GuideBanner />
      <Reviews />
      <QuoteCta />
    </>
  );
}
