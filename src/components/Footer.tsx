import type React from "react";
import Link from "next/link";
import { company, nav, navOthers } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-20 bg-brand-800 text-brand-100">
      <div className="container-px grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo variant="circle" className="h-28 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            Soluções completas em energia solar fotovoltaica: venda, instalação,
            manutenção, projeto, homologação e consultoria.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href={company.social.instagram} label="Instagram" icon="Instagram" />
            <SocialIcon href={company.social.facebook} label="Facebook" icon="Facebook" />
            <SocialIcon href={company.social.linkedin} label="LinkedIn" icon="LinkedIn" />
            <SocialIcon href={company.social.telegram} label="Telegram" icon="Telegram" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Soluções</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-200 transition hover:text-sun-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Outros serviços</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navOthers.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-brand-200 transition hover:text-sun-400">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/guia-orcamento" className="text-brand-200 transition hover:text-sun-400">
                Guia de Orçamento Solar
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li>
              <a href={`tel:+${company.phoneRaw}`} className="hover:text-sun-400">
                ☎ {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-sun-400">
                ✉ {company.email}
              </a>
            </li>
            <li>🕘 {company.hours}</li>
            <li>
              <a
                href={company.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block rounded-full bg-eco-500 px-4 py-2 font-semibold text-white transition hover:bg-eco-600"
              >
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-700">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-brand-300 sm:flex-row">
          <p>© {new Date().getFullYear()} KeroSolar — Energia &amp; Tecnologia. Todos os direitos reservados.</p>
          <p>Energia para todos por meio de energia renovável.</p>
        </div>
      </div>
    </footer>
  );
}

const socialSvgs: Record<string, React.ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.773.131 4.548.44 3.515 1.473 2.482 2.506 2.173 3.731 2.114 5.011 2.056 6.291 2.042 6.699 2.042 12c0 5.301.014 5.709.072 6.989.059 1.28.368 2.505 1.401 3.538 1.033 1.033 2.258 1.342 3.538 1.401C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.28-.059 2.505-.368 3.538-1.401 1.033-1.033 1.342-2.258 1.401-3.538.058-1.28.072-1.688.072-6.989 0-5.301-.014-5.709-.072-6.989-.059-1.28-.368-2.505-1.401-3.538C19.452.44 18.227.131 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Telegram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  ),
};

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: keyof typeof socialSvgs }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-sun-500"
    >
      {socialSvgs[icon]}
    </a>
  );
}
