import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "No-breaks Solares",
  description:
    "No-breaks solares que se pagam: protegem e suprem a falta de energia, geram parte da energia consumida e prolongam a vida das baterias. Muito superiores aos no-breaks tradicionais.",
};

export default function NoBreaksPage() {
  return (
    <SolutionPage
      eyebrow="No-breaks solares"
      title="No-breaks que se pagam sozinhos"
      subtitle="Infinitamente superiores aos no-breaks tradicionais: protegem, geram energia e duram mais."
      image="/img/nobreak.webp"
      imageAlt="Diagrama de no-break solar com inversor híbrido Deye e bateria"
      imageContain
    >
      <p>
        Os no-breaks solares são infinitamente superiores aos tradicionais. Primeiro porque{" "}
        <strong>eles se pagam</strong>: além de proteger e suprir a falta de energia dos
        equipamentos ligados a eles, também geram parte ou totalmente a energia consumida.
      </p>
      <p>Entre as principais vantagens sobre os no-breaks convencionais:</p>
      <ul>
        <li>
          <strong>Vida das baterias muito maior</strong> — podendo até dobrar a vida útil.
        </li>
        <li>
          <strong>Sem rede dedicada</strong> — podem ser ligados diretamente no quadro de
          disjuntores, alimentando vários equipamentos (iluminação, motores, telecom,
          segurança, alarmes).
        </li>
        <li>
          <strong>Estabilizam a rede</strong> e possuem inteligência embarcada que escolhe a
          melhor fonte de energia para cada momento.
        </li>
        <li>
          <strong>Maior autonomia em dias de sol</strong>, pois usam a fonte solar para manter
          os equipamentos ligados, auxiliando a bateria.
        </li>
      </ul>
      <p>
        <strong>Entre em contato</strong> para uma explicação detalhada sobre a melhor
        configuração para o seu caso.
      </p>
    </SolutionPage>
  );
}
