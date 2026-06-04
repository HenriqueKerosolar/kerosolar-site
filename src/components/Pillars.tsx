import { pillars } from "@/lib/site";

const icons = [LeafIcon, TargetIcon, ChartIcon];

export function Pillars() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">
            Economize dinheiro, salve o meio-ambiente
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-800 sm:text-4xl">
            Mais valor para você, com produtos e inovação contínua
          </h2>
          <p className="mt-4 text-muted">
            Kits geradores solares não são todos iguais. Avaliamos a arquitetura do local para
            indicar o melhor equipamento e a topologia certa para cada imóvel ou propriedade.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-brand-100 bg-white p-7 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sun-400 to-sun-600 text-brand-900">
                  <Icon />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-800">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 14l3-3 3 3 5-6" />
    </svg>
  );
}
