import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "A página que você buscou não existe. Volte para o site da KeroSolar e encontre o que precisa.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <span className="text-7xl font-extrabold text-brand-700">404</span>
      <h1 className="mt-4 text-2xl font-bold text-gray-900">Página não encontrada</h1>
      <p className="mt-2 max-w-sm text-gray-500">
        O endereço que você acessou não existe ou foi removido.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-xl bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-brand-800 transition-colors"
      >
        Voltar para o início
      </Link>
    </section>
  );
}
