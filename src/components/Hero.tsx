import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site";
import { WhatsappIcon } from "./WhatsappIcon";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 text-white">
      {/* brilho solar */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-sun-500/25 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-eco-500/15 blur-3xl" />

      <div className="container-px relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-sun-300 ring-1 ring-white/15">
            ☀ On-Grid · Off-Grid · Híbridos · Carregamento de veículos elétricos
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
            Energia para todos por meio de{" "}
            <span className="text-gradient-sun">energia renovável</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-brand-100">
            Venda, instalação, manutenção, projeto, homologação e consultoria em energia
            solar fotovoltaica. Energia solar não é compra, é{" "}
            <strong className="text-white">investimento</strong> — um kit gerador solar se
            paga sozinho.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-sun-500 px-7 py-3.5 font-semibold text-brand-900 shadow-lg shadow-sun-500/20 transition hover:bg-sun-400"
            >
              <WhatsappIcon className="h-5 w-5" />
              Solicitar Orçamento
            </a>
            <Link
              href="/geradores"
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Conhecer soluções
            </Link>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-4 gap-6">
            <Stat value="5★" label="Nota máxima no Google" />
            <Stat value={`${company.stats.projects}+`} label="Famílias e empresas atendidas" />
            <Stat value="95%" label="Economia na conta de luz" />
            <Stat value="24%+" label="Retorno ao ano" />
          </dl>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <Image
              src="/img/solar-panel.webp"
              alt="Painéis solares instalados pela KeroSolar"
              width={800}
              height={600}
              className="h-full w-full object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
            <p className="text-3xl font-bold text-brand-700">+30 anos</p>
            <p className="text-sm text-muted">de vida útil estimada da usina</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="text-3xl font-bold text-sun-400">{value}</dt>
      <dd className="mt-1 text-xs text-brand-200">{label}</dd>
    </div>
  );
}
