# Site KeroSolar (novo)

Reconstrução do site institucional da **KeroSolar — Energia & Tecnologia**
(www.kerosolar.com.br) em Next.js, substituindo o site estático antigo.

## Stack
- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (tema em `src/app/globals.css`)
- Fontes: Poppins (títulos) + Inter (corpo)
- 100% estático/SSG — ótimo para SEO e performance

## Como rodar
```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Estrutura
- `src/app/` — páginas (uma pasta por rota)
- `src/components/` — componentes reutilizáveis (Header, Footer, Hero, QuoteForm, etc.)
- `src/lib/site.ts` — **dados centrais**: contato, navegação, depoimentos, parceiros.
  Edite aqui para atualizar telefone, e-mail, redes sociais, etc.
- `public/img/` — imagens (reaproveitadas do site antigo)

## Páginas
Home, Sobre, Geradores (On/Off-Grid, Híbrido), Revenda, Condomínios, Agro,
Negócios, Geração Remota, Arquitetura e Coberturas, No-breaks, Bombeamento Solar,
Avaliações, Contato e Guia de Orçamento.

## Pendências / próximos passos
- [ ] **Logo oficial**: hoje há uma recriação em SVG (`src/components/Logo.tsx`).
      Colocar o arquivo oficial em `public/` e usar `<Image>`.
- [ ] Formulário de orçamento envia para o WhatsApp. Integrar com backend/e-mail
      (ex.: mesmo Supabase do KeroService) se quiser armazenar os leads.
- [ ] Revisar textos e imagens com o cliente.
- [ ] Configurar domínio e deploy (Vercel).

> A cópia do site **antigo** está em `../site/` (referência).
