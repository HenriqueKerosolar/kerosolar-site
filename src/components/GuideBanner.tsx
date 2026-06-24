import Link from "next/link";
import Image from "next/image";

const benefits = [
  "Reduza sua conta em até 85%",
  "Payback entre 2 e 3 anos",
  "Proteja-se contra as armadilhas do mercado",
  "Vida útil acima de 30 anos",
];

// Seção de captura: e-book gratuito "Anti-Cilada Solar".
// Visual claro/solar (identidade KeroSolar) com a capa escura em destaque.
export function GuideBanner() {
  return (
    <section className="py-16">
      <div className="container-px">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-3xl border border-sun-200 bg-gradient-to-br from-sun-50 via-white to-brand-50 p-8 shadow-sm sm:p-12 lg:grid-cols-2">
          {/* brilhos solares decorativos */}
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-sun-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-brand-200/30 blur-3xl" />

          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full bg-sun-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sun-700">
              ☀ E-book gratuito
            </p>
            <h2 className="mt-3 text-3xl font-bold text-brand-800 sm:text-4xl">
              Anti-Cilada Solar
            </h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-sun-600">
              Manual do Investidor Solar 2026
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/75">
              Aprenda a comparar orçamentos, identificar o melhor preço por kWp e escolher o
              gerador certo — sem cair nas armadilhas do mercado e protegendo o seu
              investimento.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink/80">
                  <CheckIcon />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/ebook-kerosolar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sun-500 px-6 py-3 font-semibold text-brand-900 shadow-sm transition hover:bg-sun-400"
              >
                <DownloadIcon />
                Baixar e-book grátis
              </a>
              <Link
                href="/guia-orcamento"
                className="rounded-full border border-brand-200 px-6 py-3 font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                Entenda melhor
              </Link>
            </div>
          </div>

          {/* Capa do e-book (escura, salta sobre o fundo claro) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="rotate-2 transition duration-500 hover:rotate-0">
              <Image
                src="/ebook-cover.webp"
                alt="E-book Anti-Cilada Solar — Manual do Investidor Solar 2026"
                width={760}
                height={1134}
                className="h-auto w-52 rounded-xl shadow-2xl ring-1 ring-black/5 sm:w-60"
                sizes="(max-width: 640px) 208px, 240px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-eco-500" aria-hidden>
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
    </svg>
  );
}
