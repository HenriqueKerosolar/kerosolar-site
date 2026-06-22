import Image from "next/image";

// Logo oficial 3D da KeroSolar (PNG com fundo transparente).
// - variant "wordmark": faixa horizontal só com o nome (ideal para o cabeçalho)
// - variant "full": logo quadrada completa com sol + painel (rodapé, redes)
const ASSETS = {
  wordmark: { src: "/logo-wordmark.png", w: 885, h: 226 },
  full: { src: "/logo-kerosolar.png", w: 885, h: 818 },
  circle: { src: "/logo-circular.png", w: 1024, h: 1024 },
} as const;

export function Logo({
  className = "h-10 w-auto",
  variant = "wordmark",
  priority = false,
}: {
  className?: string;
  variant?: keyof typeof ASSETS;
  priority?: boolean;
}) {
  const a = ASSETS[variant];
  return (
    <Image
      src={a.src}
      alt="KeroSolar — Energia e Tecnologia"
      width={a.w}
      height={a.h}
      priority={priority}
      className={className}
    />
  );
}
