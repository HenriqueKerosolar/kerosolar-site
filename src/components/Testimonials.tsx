import { testimonials, company } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="bg-brand-50 py-16 sm:py-20">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">
            Avaliações
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-800 sm:text-4xl">
            O que dizem nossos clientes
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-sun-500" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm font-semibold text-brand-800">{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center">
          <a
            href={company.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Ver todas as avaliações no Google →
          </a>
        </p>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79L1.58 7.62l5.82-.85L10 1.5z" />
    </svg>
  );
}
