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
  children,
  showGuide = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
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
            <div className="sticky top-24 overflow-hidden rounded-2xl shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={imageAlt ?? title} className="h-full w-full object-cover" />
            </div>
          )}
        </div>
      </section>

      {showGuide && <GuideBanner />}
      <QuoteCta />
    </>
  );
}
