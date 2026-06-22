// Dados centrais do site KeroSolar — informações da empresa, navegação,
// depoimentos e parceiros. Centralizado para facilitar manutenção.

export const company = {
  name: "KeroSolar",
  tagline: "Energia & Tecnologia",
  phone: "(21) 2027-6013",
  phoneRaw: "552120276013",
  email: "kerosolar@kerosolar.com.br",
  hours: "Segunda a Sexta, 8h às 17h",
  whatsapp: "https://api.whatsapp.com/send/?phone=552120276013&text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+de+energia+solar.",
  social: {
    instagram: "https://www.instagram.com/kerosolar/",
    facebook: "https://www.facebook.com/kerosolartecnologia",
    linkedin: "https://www.linkedin.com/company/kerosolar/",
    telegram: "https://t.me/kerosolar",
  },
  stats: {
    projects: 300,
    period: "desde 2019",
  },
  // Avaliações do Google via Featurable (grátis). Cole aqui o ID do widget
  // gerado em https://featurable.com (Dashboard → Widget → aba API → Featurable ID).
  // Enquanto estiver vazio, o site mostra os depoimentos estáticos de fallback.
  googleReviewsWidgetId: "",
  // Link do perfil no Google (botão "Ver todas as avaliações"). Quando tiver o
  // Place ID, troque por: https://search.google.com/local/reviews?placeid=SEU_PLACE_ID
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kerosolar+Energia+Inteligente",
} as const;

export function whatsappLink(message: string) {
  return `https://api.whatsapp.com/send/?phone=${company.phoneRaw}&text=${encodeURIComponent(
    message,
  )}`;
}

// Navegação principal
export const nav: { label: string; href: string }[] = [
  { label: "Sobre", href: "/sobre" },
  { label: "Geradores", href: "/geradores" },
  { label: "Revenda", href: "/revenda" },
  { label: "Condomínios", href: "/condominios" },
  { label: "Agro", href: "/agro" },
  { label: "Negócios", href: "/negocios" },
  { label: "Avaliações", href: "/avaliacoes" },
  { label: "Contato", href: "/contato" },
];

// Submenu "Outros"
export const navOthers: { label: string; href: string }[] = [
  { label: "Carregamento Veicular", href: "/carregamento-veiculos-eletricos" },
  { label: "Geração Remota", href: "/geracao-remota" },
  { label: "Arquitetura e Coberturas", href: "/arquitetura" },
  { label: "No-breaks Solares", href: "/no-breaks" },
  { label: "Bombeamento Solar", href: "/bombeamento-solar" },
];

// Depoimentos reais do site atual
export const testimonials: { name: string; text: string }[] = [
  {
    name: "Adriana Ferreira",
    text: "Fui muito bem atendida, todas as dúvidas são esclarecidas. Suporte total!",
  },
  {
    name: "Edson Leite",
    text: "O atendimento foi cordial e técnico, demonstrando como funciona o sistema e opções de instalação.",
  },
  {
    name: "Maximino",
    text: "Muito bom, excelente. Total compromisso, bom trabalho e preço justo. Eu indico — total organização com documentos e tudo esclarecido, tudo no prazo.",
  },
  {
    name: "Roger Aguiar",
    text: "Excelente. Bom preço, equipamento moderno e execução rápida. Recomendo.",
  },
  {
    name: "Ronny Albuquerque",
    text: "O atendimento foi super diferenciado. Muito prestativo.",
  },
  {
    name: "Simone",
    text: "Foi muito bom, total atenção e qualidade ótima. Recomendo para todos.",
  },
];

// Marcas/parceiros (logos já copiados em /public/img)
export const partners: { name: string; img: string }[] = [
  { name: "APsystems", img: "/img/APsystems.webp" },
  { name: "Deye", img: "/img/deye.webp" },
  { name: "Fronius", img: "/img/fronius.webp" },
  { name: "Hoymiles", img: "/img/hoymiles.webp" },
  { name: "Intelbras", img: "/img/intelbras.webp" },
  { name: "Elsys Solar", img: "/img/elsysSolar.webp" },
  { name: "Serrana Solar", img: "/img/serranaSolar.webp" },
  { name: "Edge", img: "/img/edge.webp" },
];

// Pilares da empresa
export const pillars: { title: string; desc: string }[] = [
  {
    title: "Sensibilidade Ambiental",
    desc: "Cada projeto é pensado para reduzir o impacto ambiental e aproveitar ao máximo a energia limpa do sol.",
  },
  {
    title: "Soluções Personalizadas",
    desc: "Avaliamos a arquitetura do local para indicar o melhor equipamento e topologia para o seu imóvel ou negócio.",
  },
  {
    title: "Monitoramento de Desempenho",
    desc: "Acompanhamos sua usina mesmo após a instalação, garantindo a melhor produção por m² e o retorno do investimento.",
  },
];

// Soluções em destaque (cards)
export const solutions: {
  title: string;
  desc: string;
  href: string;
  img: string;
}[] = [
  {
    title: "On-Grid",
    desc: "Existem 4 topologias quando se trata de geradores solares On-Grid conectados à rede.",
    href: "/geradores#on-grid",
    img: "/img/ongrid.webp",
  },
  {
    title: "Off-Grid",
    desc: "Especializados em Off-Grid de maior porte e com foco industrial.",
    href: "/geradores#off-grid",
    img: "/img/off-grid.webp",
  },
  {
    title: "Híbrido",
    desc: "O inversor híbrido aceita várias fontes de energia simultaneamente.",
    href: "/geradores#hibrido",
    img: "/img/Híbrido.webp",
  },
  {
    title: "Estacionamento",
    desc: "Aproveitamos espaços ociosos para produzir energia — todos ganham.",
    href: "/arquitetura",
    img: "/img/parking.webp",
  },
];
