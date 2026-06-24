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

// Avaliações reais do Google (5,0 — 76 avaliações)
export const testimonials: { name: string; text: string; stars?: number }[] = [
  {
    name: "Paulo Modesto",
    text: "A Kerosolar foi a melhor experiência que já tive como cliente. Prestaram excelente atendimento desde o primeiro contato ao pós venda. Fiz várias pesquisas de mercado e essa foi a única empresa que além de ter o melhor preço, foi a que teve o melhor atendimento. A instalação ocorreu antes do prazo e o time que instalou é TOP. Obrigado Henrique e a toda a sua equipe!!!",
  },
  {
    name: "Alexandre Volkmann",
    text: "No começo fiquei um pouco receoso por se tratar de um investimento relativamente caro, porém os funcionários sanaram todas as minhas dúvidas e desconfianças, foram super atenciosos e pacientes. Com certeza recomendo. Muito satisfeito com os serviços prestados não só durante a venda e instalação mas também com o atendimento pós venda.",
  },
  {
    name: "Alexandre Pita",
    text: "Clareza, profissionalismo e cordialidade desde a visita para orçamento até a instalação. Tive um problema com meu inversor e me foi dado todo o suporte. Todos os questionamentos foram respondidos prontamente até a solução. Super indico a empresa!",
  },
  {
    name: "Alice Rangel",
    text: "Depois de muito pesquisar, encontrei essa empresa e desde o primeiro contato gostei muito do atendimento. O consultor Henrique veio à minha residência e sanou todas as dúvidas. Contrato fechado e em 30 dias o equipamento foi instalado. Estamos muito satisfeitos com a empresa e o atendimento dispensado.",
  },
  {
    name: "Admario Cardeal",
    text: "Muito bom produto, as placas estão gerando muito bem. Foram prometidas 12 placas de 550 e vieram 12 de 570, o conversor veio melhor também. Estou muito satisfeito. Agradeço ao sr Henrique que me deu suporte sempre quando precisei.",
  },
  {
    name: "Cristiane Silva",
    text: "Graças a Deus está sendo um dos melhores investimentos que fizemos, é só alegria. O atendimento é rápido e preciso, não tenho o que reclamar. Parabéns a todos os envolvidos!",
  },
  {
    name: "Queiroz Piloto",
    text: "Equipamento funcionando sem problemas! Instalação rápida e profissional! Sistema super inteligente! Tratamento vip, tanto dos instaladores quanto do técnico. Melhor investimento! Não tenham dúvidas, podem confiar!",
  },
  {
    name: "Marcelo Coutinho",
    text: "Excelente, recomendo a todos sem exceção, podem confiar. Suporte do início ao fim, educação e ótimos conhecimentos técnicos.",
  },
  {
    name: "Pra. Daniele Rodrigues",
    text: "Ótimo investimento, gostei muito da empresa, contratei e estão aprovados. Super indico essa empresa, dão atenção e suporte antes e depois de instalado.",
  },
  {
    name: "Roberta Assis",
    text: "A empresa cumpriu com todo combinado, instalou dentro do prazo, está dando a devida assistência em todo processo. Recomendo!",
  },
  {
    name: "Tadeu Arruda",
    text: "Serviço rápido e eficaz. Atendimento com presteza, prestando todo suporte e esclarecimentos necessários, principalmente no pós venda garantindo os serviços e equipamentos fornecidos.",
  },
  {
    name: "Daniel Araujo",
    text: "Muito satisfatória a experiência com a empresa. Funcionários extremamente cuidadosos com a parte estética do ambiente interno além de presteza em todas as etapas do serviço.",
  },
  {
    name: "Renata e Diego Pisete",
    text: "Serviço de excelência, tudo conforme combinado. Todos os imprevistos foram resolvidos de imediato.",
  },
  {
    name: "Danilo Geraldo Fernandes",
    text: "Profissional e pontual. Até o momento, seis meses de adesão, muito atencioso e esclarecedor. Instalação e homologação... muito satisfeito!",
  },
  {
    name: "Luiz da Silva Teixeira",
    text: "Muito satisfeito com todo desempenho da equipe, do início do projeto até sua conclusão. Obrigado a todos que participaram da instalação.",
  },
  {
    name: "Nilson Dias",
    text: "Foi muito bom, cumpriram o combinado, não tivemos estresse. Estamos felizes com o trabalho. Só agradecer à equipe muito eficiente.",
  },
  {
    name: "Cirena Fonseca",
    text: "Excelentes profissionais, educados, capacitados, dou nota 1000. Super recomendo.",
  },
  {
    name: "Carlos Fiuza",
    text: "Ótimo serviço, equipe atenciosa e com ótimo conhecimento técnico!",
  },
  {
    name: "Bruno Cardoso",
    text: "A KeroSolar é uma ótima empresa. Recomendo o ótimo serviço prestado e o suporte técnico tirando todas as dúvidas.",
  },
  {
    name: "Angelo Bonfá",
    text: "Excelente suporte, atendimento e execução.",
  },
  {
    name: "Jorge Madeira",
    text: "Foi tudo muito bem explicado e atendeu as minhas expectativas. Foi excelente.",
  },
  {
    name: "Edvaldo Pedro",
    text: "Muito bom o atendimento. No começo fiquei com medo pois não conhecia, mas depois que vieram até minha casa, explicaram tudo e fiz o pagamento à vista. Muito feliz com o resultado!",
  },
  {
    name: "Vilmar Brito",
    text: "Obrigado a todos envolvidos. Estou muito satisfeito com o trabalho de vocês.",
  },
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
  {
    name: "Carlos Henrique Baptista",
    text: "Muito bom serviço, ficou muito bom!",
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
    img: "/img/kit-offgrid.webp",
  },
  {
    title: "Híbrido",
    desc: "O inversor híbrido aceita várias fontes de energia simultaneamente.",
    href: "/geradores#hibrido",
    img: "/img/kit-hibrido.webp",
  },
  {
    title: "Estacionamento",
    desc: "Aproveitamos espaços ociosos para produzir energia — todos ganham.",
    href: "/arquitetura",
    img: "/img/parking.webp",
  },
];
