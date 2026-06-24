import { testimonials, company } from “@/lib/site”;

export function Testimonials() {
  return (
    <section className=”bg-brand-50 py-16 sm:py-20”>
      <div className=”container-px”>
        <div className=”mx-auto max-w-2xl text-center”>
          <p className=”inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-sun-600”>
            <GoogleGlyph /> Avaliações no Google
          </p>
          <h2 className=”mt-2 text-3xl font-bold text-brand-800 sm:text-4xl”>
            O que dizem nossos clientes
          </h2>
        </div>

        <div className=”mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3”>
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className=”flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm”
            >
              <div className=”flex items-center justify-between”>
                <div className=”flex gap-0.5 text-sun-500” aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
                <GoogleGlyph />
              </div>
              <blockquote className=”mt-4 flex-1 text-sm leading-relaxed text-ink/80”>
                “{t.text}”
              </blockquote>
              <figcaption className=”mt-4 flex items-center gap-3”>
                <span className=”flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white”>
                  {t.name.charAt(0)}
                </span>
                <span className=”text-sm font-semibold text-brand-800”>{t.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className=”mt-10 text-center”>
          <a
            href={company.googleReviewsUrl}
            target=”_blank”
            rel=”noopener noreferrer”
            className=”text-sm font-semibold text-brand-600 hover:text-brand-700”
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
    <svg width=”16” height=”16” viewBox=”0 0 20 20” fill=”currentColor” aria-hidden>
      <path d=”M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79L1.58 7.62l5.82-.85L10 1.5z” />
    </svg>
  );
}

function GoogleGlyph() {
  return (
    <svg width=”18” height=”18” viewBox=”0 0 24 24” aria-hidden>
      <path fill=”#4285F4” d=”M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z” />
      <path fill=”#34A853” d=”M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z” />
      <path fill=”#FBBC05” d=”M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z” />
      <path fill=”#EA4335” d=”M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z” />
    </svg>
  );
}
