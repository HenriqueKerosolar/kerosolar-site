"use client";

import Link from "next/link";
import { useState } from "react";
import { company, nav, navOthers } from "@/lib/site";
import { Logo } from "./Logo";
import { WhatsappIcon } from "./WhatsappIcon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      {/* Barra superior de contato */}
      <div className="hidden bg-brand-700 text-white md:block">
        <div className="container-px flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span>✉ {company.email}</span>
            <span>🕘 {company.hours}</span>
          </div>
          <a href={`tel:+${company.phoneRaw}`} className="font-semibold hover:text-sun-400">
            ☎ {company.phone}
          </a>
        </div>
      </div>

      {/* Barra principal */}
      <div className="container-px flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Início" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-auto sm:h-11" priority />
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}

          {/* Dropdown Outros */}
          <div
            className="relative"
            onMouseEnter={() => setOthersOpen(true)}
            onMouseLeave={() => setOthersOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-brand-50 hover:text-brand-700">
              Outros
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            {othersOpen && (
              <div className="absolute right-0 top-full w-60 rounded-xl border border-brand-100 bg-white p-2 shadow-xl">
                {navOthers.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm text-ink/80 transition hover:bg-brand-50 hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-sun-500 px-5 py-2.5 text-sm font-semibold text-brand-900 shadow-sm transition hover:bg-sun-400 sm:inline-flex"
          >
            <WhatsappIcon className="h-4 w-4" />
            Solicitar Orçamento
          </a>

          {/* Botão mobile */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-brand-700 lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="border-t border-brand-100 bg-white lg:hidden">
          <div className="container-px grid gap-1 py-3">
            {[...nav, ...navOthers].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink/80 transition hover:bg-brand-50 hover:text-brand-700"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sun-500 px-5 py-2.5 text-sm font-semibold text-brand-900"
            >
              <WhatsappIcon className="h-4 w-4" />
              Solicitar Orçamento
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
