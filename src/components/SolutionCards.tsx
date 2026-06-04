import Link from "next/link";
import { solutions } from "@/lib/site";

export function SolutionCards() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">
            Soluções para todos os perfis
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-800 sm:text-4xl">
            On-Grid, Off-Grid, Híbridos e mais
          </h2>
          <p className="mt-4 text-muted">
            Gerenciamos todo o processo de implantação da sua usina com total segurança.
            Encontre a solução ideal.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-brand-800">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-sun-600">
                  Saiba mais
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
