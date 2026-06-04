import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
  ],
  openGraph: {
    title: "KeroSolar — Energia & Tecnologia",
    description:
      "Soluções completas em energia solar fotovoltaica: projeto, instalação, homologação e consultoria.",
    type: "website",
    locale: "pt_BR",
    siteName: "KeroSolar",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
