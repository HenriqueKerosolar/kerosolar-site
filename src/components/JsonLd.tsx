// Structured data (JSON-LD) para rich snippets no Google
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.kerosolar.com.br/#organization",
        name: "KeroSolar Energia Inteligente",
        url: "https://www.kerosolar.com.br",
        logo: {
          "@type": "ImageObject",
          url: "https://www.kerosolar.com.br/img/logo.webp",
          width: 200,
          height: 60,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55-21-2027-6013",
          contactType: "customer service",
          availableLanguage: "Portuguese",
          areaServed: "BR",
        },
        sameAs: [
          "https://www.instagram.com/kerosolar/",
          "https://www.facebook.com/kerosolartecnologia",
          "https://www.linkedin.com/company/kerosolar/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.kerosolar.com.br/#localbusiness",
        name: "KeroSolar Energia Inteligente",
        description:
          "Venda, instalação, manutenção, projeto, homologação e consultoria em energia solar fotovoltaica. Geradores On-Grid, Off-Grid e Híbridos para residências, negócios, agro e condomínios.",
        url: "https://www.kerosolar.com.br",
        telephone: "+55-21-2027-6013",
        email: "kerosolar@kerosolar.com.br",
        image: "https://www.kerosolar.com.br/img/solar-panel.webp",
        priceRange: "$$",
        currenciesAccepted: "BRL",
        paymentAccepted: "Cash, Credit Card, PIX, Financiamento",
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "76",
          bestRating: "5",
          worstRating: "1",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Soluções de Energia Solar",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gerador Solar On-Grid",
                description: "Instalação de gerador solar conectado à rede elétrica.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gerador Solar Off-Grid",
                description: "Sistema autônomo com banco de baterias para áreas sem rede.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Gerador Solar Híbrido",
                description: "Combina conexão à rede e banco de baterias para máxima eficiência.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Energia Solar para Condomínios",
                description: "Usinas solares para condomínios residenciais e comerciais.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Energia Solar para o Agronegócio",
                description: "Soluções solares para irrigação, bombeamento e automação rural.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.kerosolar.com.br/#website",
        url: "https://www.kerosolar.com.br",
        name: "KeroSolar",
        description: "Soluções completas em energia solar fotovoltaica",
        publisher: { "@id": "https://www.kerosolar.com.br/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.kerosolar.com.br/busca?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
