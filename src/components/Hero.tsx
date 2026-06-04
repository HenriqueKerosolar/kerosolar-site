import Link from "next/link";
import { company } from "@/lib/site";

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
            <Link
              href="/contato"
              className="rounded-full bg-sun-500 px-7 py-3.5 font-semibold text-brand-900 shadow-lg shadow-sun-500/20 transition hover:bg-sun-400"
            >
              Solicitar Orçamento
            </Link>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Falar no WhatsApp
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            <Stat value={`${company.stats.projects}+`} label="Projetos completados" />
            <Stat value="95%" label="Economia na conta de luz" />
            <Stat value="24%+" label="Retorno ao ano" />
          </dl>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/solar-panel.webp"
              alt="Painéis solares instalados pela KeroSolar"
              className="h-full w-full object-cover"
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
