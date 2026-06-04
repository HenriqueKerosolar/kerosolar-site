@AGENTS.md

# KeroSolar — Site Institucional

Site institucional da **KeroSolar — Energia & Tecnologia**, empresa de energia
solar fotovoltaica. Reconstrução moderna do antigo site estático kerosolar.com.br.

> **Projeto INDEPENDENTE.** Não tem relação com o código do KeroService/CRM — é
> outro produto, outro repositório e outro deploy. Não misturar os dois.

## Stack
- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (tema/cores em `src/app/globals.css`)
- Fontes: Poppins (títulos) + Inter (corpo)
- 100% estático/SSG — ótimo para SEO e performance
- `react-google-reviews` (avaliações do Google via Featurable)
- `sharp` disponível para processar imagens em scripts

## Comandos
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção (use para validar antes de entregar)
npm run lint
```

## Estrutura
- `src/app/` — uma pasta por rota (15 páginas)
- `src/components/` — componentes reutilizáveis (Header, Footer, Hero, QuoteForm,
  GuideBanner, Reviews, etc.)
- `src/lib/site.ts` — **dados centrais**: contato, navegação, depoimentos, parceiros,
  ID do widget de avaliações do Google. Edite aqui para mudar telefone/e-mail/redes.
- `public/` — imagens, logo oficial e o e-book em PDF

## Páginas
Home, Sobre, Geradores (On/Off-Grid, Híbrido), Revenda, Condomínios, Agro, Negócios,
Geração Remota, Arquitetura, No-breaks, Bombeamento Solar, Carregamento de Veículos
Elétricos, Avaliações, Contato e Guia de Orçamento.

## Marca / Identidade
- Logo oficial 3D: `public/logo-wordmark.png` (cabeçalho) e `public/logo-kerosolar.png`
  (rodapé/completa). Favicon: `src/app/icon.png` (emblema sol+painel).
- Cores: laranja ("Kero") + amarelo ("Solar") + azul-marinho. Sol amarelo + painel azul.
- Contato: (21) 4141-2089 · kerosolar@kerosolar.com.br · @kerosolar

## E-book
"Anti-Cilada Solar — Manual do Investidor Solar 2026" (`public/ebook-kerosolar.pdf`),
capa em `public/ebook-cover.webp`. Download direto (sem captura de e-mail).

## Pendências / próximos passos
- [ ] Avaliações do Google: criar widget no featurable.com e colar o ID em
      `src/lib/site.ts` → `company.googleReviewsWidgetId`.
- [ ] **Integração com o CRM (formulário de orçamento)**: ponto único em
      `src/lib/leads.ts` (`submitLead`). Hoje abre o WhatsApp; para enviar ao CRM,
      criar `.env.local` com `NEXT_PUBLIC_CRM_LEAD_ENDPOINT=.../api/leads`.

- [ ] **Chat do site → CRM**: o widget `src/components/ChatWidget.tsx` (texto/áudio/foto)
      usa `src/lib/chat.ts`. Sem endpoint, roda em **modo demonstração** (respostas locais).
      Para conectar ao CRM, criar `.env.local` com
      `NEXT_PUBLIC_CRM_CHAT_ENDPOINT=.../api/public/chat`.
      **Contrato esperado no CRM** (`POST` multipart): campos `sessionId`, `kind`
      (text|audio|image), `text?`, `file?` → responde JSON `{ reply, handoff? }`.
      No CRM isso deve chamar `ingestMessage({ channel: 'site', externalId: sessionId, text, ... })`
      (requer adicionar `site` ao enum `Channel` no Prisma — migração no Supabase) e
      devolver `result.reply`. CORS liberado só para o domínio do site.
- [ ] Deploy (Vercel) + domínio kerosolar.com.br.
- [ ] (Recomendado) mover o projeto para fora do OneDrive para evitar sync de
      node_modules e problemas de arquivos "sob demanda".

## Convenções
- Sempre rodar `npm run build` para validar mudanças antes de concluir.
- Conteúdo em português do Brasil.
- Manter os dados de contato/negócio centralizados em `src/lib/site.ts`.
