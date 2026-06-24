import { MetadataRoute } from "next";

const BASE = "https://www.kerosolar.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/sobre", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/geradores", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/contato", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/avaliacoes", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/agro", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/arquitetura", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/bombeamento-solar", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/carregamento-veiculos-eletricos", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/condominios", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/geracao-remota", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/guia-orcamento", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/negocios", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/no-breaks", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/revenda", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
