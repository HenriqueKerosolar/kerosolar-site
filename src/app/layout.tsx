import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";
import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("@/components/ChatWidget").then(m => m.ChatWidget), { ssr: false });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kerosolar.com.br"),
  title: {
    default: "KeroSolar — Energia Solar Fotovoltaica | Geradores, Projeto e Homologação",
    template: "%s | KeroSolar",
  },
  description:
    "Venda, instalação, manutenção, projeto, homologação e consultoria em energia solar fotovoltaica. Geradores On-Grid, Off-Grid e Híbridos para residências, negócios, agro e condomínios.",
  keywords: [
    "energia solar",
    "gerador solar",
    "painel solar",
    "fotovoltaico",
    "on-grid",
    "off-grid",
    "homologação solar",
    "KeroSolar",
    "instalação energia solar",
    "energia solar Rio de Janeiro",
    "kit solar fotovoltaico",
    "usina solar",
  ],
  authors: [{ name: "KeroSolar" }],
  creator: "KeroSolar",
  publisher: "KeroSolar",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "KeroSolar — Energia Solar Fotovoltaica",
    description:
      "Venda, instalação, projeto e homologação de geradores solares On-Grid, Off-Grid e Híbridos. Mais de 300 projetos concluídos, 5,0 ★ no Google.",
    type: "website",
    locale: "pt_BR",
    siteName: "KeroSolar",
    images: [
      {
        url: "/img/solar-panel.webp",
        width: 1200,
        height: 630,
        alt: "KeroSolar — Painéis solares instalados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KeroSolar — Energia Solar Fotovoltaica",
    description:
      "Geradores solares On-Grid, Off-Grid e Híbridos. Projeto, instalação e homologação. Mais de 300 projetos e 5,0 ★ no Google.",
    images: ["/img/solar-panel.webp"],
  },
  alternates: {
    canonical: "https://www.kerosolar.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
