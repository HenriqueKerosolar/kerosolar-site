import Link from "next/link";

// Cabeçalho padrão das páginas internas, com breadcrumb e título.
export function PageHero({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-800 text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sun-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
      <div className="container-px relative py-16 sm:py-20">
        <nav className="mb-4 text-sm text-brand-200">
          <Link href="/" className="hover:text-sun-400">
            Início
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{title}</span>
        </nav>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-sun-400">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-brand-100">{subtitle}</p>}
      </div>
    </section>
  );
}
