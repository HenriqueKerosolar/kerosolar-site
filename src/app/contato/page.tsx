import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteForm } from "@/components/QuoteForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a KeroSolar: telefone, e-mail e WhatsApp. Solicite um orçamento de energia solar fotovoltaica sem compromisso.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu projeto"
        subtitle="Envie sua conta de luz e receba uma proposta sob medida, sem compromisso."
      />

      <section className="py-16 sm:py-20">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Informações */}
          <div>
            <h2 className="text-2xl font-bold text-brand-800">Canais de atendimento</h2>
            <p className="mt-3 text-muted">
              Estamos disponíveis em horário comercial para tirar suas dúvidas e elaborar o seu
              orçamento.
            </p>

            <ul className="mt-8 space-y-5">
              <ContactItem label="Telefone" value={company.phone} href={`tel:+${company.phoneRaw}`} icon="☎" />
              <ContactItem label="E-mail" value={company.email} href={`mailto:${company.email}`} icon="✉" />
              <ContactItem label="WhatsApp" value="Atendimento rápido" href={company.whatsapp} icon="💬" external />
              <ContactItem label="Horário" value={company.hours} icon="🕘" />
            </ul>

            <div className="mt-8 flex gap-3">
              <Social href={company.social.instagram} img="/img/Instagram.svg" label="Instagram" />
              <Social href={company.social.facebook} img="/img/Facebook.svg" label="Facebook" />
              <Social href={company.social.linkedin} img="/img/Linkedin.svg" label="LinkedIn" />
              <Social href={company.social.telegram} img="/img/Telegram.svg" label="Telegram" />
            </div>
          </div>

          {/* Formulário */}
          <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-lg sm:p-8">
            <h2 className="text-xl font-bold text-brand-800">Solicite seu orçamento</h2>
            <p className="mt-1 text-sm text-muted">
              Preencha os dados e enviaremos pelo WhatsApp para agilizar o atendimento.
            </p>
            <div className="mt-6">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  label,
  value,
  href,
  icon,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  icon: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</p>
        <p className="font-medium text-brand-800">{value}</p>
      </div>
    </div>
  );
  if (!href) return <li>{content}</li>;
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block transition hover:opacity-80"
      >
        {content}
      </a>
    </li>
  );
}

function Social({ href, img, label }: { href: string; img: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 transition hover:bg-brand-700"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={label} className="h-4 w-4 brightness-0 invert" />
    </a>
  );
}
