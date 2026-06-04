import { QuoteForm } from "./QuoteForm";
import { company } from "@/lib/site";

// Seção de chamada para orçamento — reutilizada em todas as páginas.
export function QuoteCta() {
  return (
    <section id="orcamento" className="bg-brand-700 py-16 sm:py-20">
      <div className="container-px grid items-center gap-10 lg:grid-cols-2">
        <div className="text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-sun-400">
            Solicite Orçamento
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Pronto para economizar até 95% na conta de luz?
          </h2>
          <p className="mt-4 max-w-md text-brand-100">
            Energia solar não é compra, é investimento — um kit gerador solar se paga
            sozinho. Fale com um consultor e receba uma proposta sob medida.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={`tel:+${company.phoneRaw}`} className="flex items-center gap-3 hover:text-sun-400">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">☎</span>
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-sun-400">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">✉</span>
              {company.email}
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
