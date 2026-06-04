// Faixa "O que fazemos" — destaca os serviços principais da KeroSolar.
const services = [
  { label: "Venda", icon: CartIcon },
  { label: "Instalação", icon: WrenchIcon },
  { label: "Manutenção", icon: GearIcon },
  { label: "Projeto", icon: RulerIcon },
  { label: "Homologação", icon: DocIcon },
  { label: "Consultoria", icon: ChatIcon },
];

export function ServicesStrip() {
  return (
    <section className="py-14">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-sun-600">
            O que fazemos
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-800 sm:text-4xl">
            Energia solar do início ao fim
          </h2>
          <p className="mt-4 text-muted">
            Cuidamos de todas as etapas do seu projeto — você não precisa se preocupar com nada.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {services.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon />
              </span>
              <span className="text-sm font-semibold text-brand-800">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ícones */
function base(props: React.SVGProps<SVGSVGElement>) {
  return {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}
function CartIcon() {
  return (
    <svg {...base({})}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg {...base({})}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-2.4 2.6-2.6z" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg {...base({})}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 6 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0-1.2-2.9H2a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 3.3 6l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H8a1.7 1.7 0 0 0 1-1.6V2a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V8a1.7 1.7 0 0 0 1.6 1H22a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
}
function RulerIcon() {
  return (
    <svg {...base({})}>
      <path d="M16 2l6 6L8 22l-6-6L16 2z" />
      <path d="M11 7l2 2M8 10l2 2M5 13l2 2M14 4l2 2" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg {...base({})}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 14l2 2 4-4" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg {...base({})}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.8L3 21l1.9-5.1A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z" />
    </svg>
  );
}
