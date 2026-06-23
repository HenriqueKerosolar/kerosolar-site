import { PageHero } from "./PageHero";
import { Prose } from "./Prose";
import { QuoteCta } from "./QuoteCta";
import { GuideBanner } from "./GuideBanner";

// Layout padrão para páginas de solução com bloco único de conteúdo + imagem.
export function SolutionPage({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  imageContain = false,
  children,
  showGuide = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  /** true para imagens de produto/diagrama com fundo branco (mostra inteira) */
  imageContain?: boolean;
  children: React.ReactNode;
  showGuide?: boolean;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="py-16 sm:py-20">
        <div className="container-px grid items-start gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Prose>{children}</Prose>
          {image && (
            <div
              className={`sticky top-24 overflow-hidden rounded-2xl shadow-lg ${
                imageContain ? "flex items-center justify-center bg-white p-4 ring-1 ring-brand-100" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={imageAlt ?? title}
                className={`h-full w-full ${imageContain ? "object-contain" : "object-cover"}`}
              />
            </div>
          )}
        </div>
      </section>

      {showGuide && <GuideBanner />}
      <QuoteCta />
    </>
  );
}
