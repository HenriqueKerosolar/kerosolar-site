import { partners } from "@/lib/site";

export function PartnerLogos() {
  return (
    <section className="border-y border-brand-100 bg-white py-12">
      <div className="container-px">
        <p className="text-center text-sm font-medium text-muted">
          Parceria com os maiores distribuidores e fabricantes do Brasil
        </p>
        <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.name}
                className="h-9 w-auto max-w-[120px] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
