import Link from "next/link";
import { company, nav, navOthers } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-20 bg-brand-800 text-brand-100">
      <div className="container-px grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-block rounded-2xl bg-white p-4">
            <Logo variant="full" className="h-24 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            Soluções completas em energia solar fotovoltaica: venda, instalação,
            manutenção, projeto, homologação e consultoria.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialIcon href={company.social.instagram} label="Instagram" img="/img/Instagram.svg" />
            <SocialIcon href={company.social.facebook} label="Facebook" img="/img/Facebook.svg" />
            <SocialIcon href={company.social.linkedin} label="LinkedIn" img="/img/Linkedin.svg" />
            <SocialIcon href={company.social.telegram} label="Telegram" img="/img/Telegram.svg" />
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

function SocialIcon({ href, label, img }: { href: string; label: string; img: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-sun-500"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={label} className="h-4 w-4" />
    </a>
  );
}
