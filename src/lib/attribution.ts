// Rastreio de origem do lead (Mind Marketing, 2026-11-05): guarda de onde a pessoa chegou (anúncio pago) para que o
// orçamento pedido depois — talvez em outra página, talvez dias depois — leve a origem junto até o CRM.
//
// Regra: só guarda quando a visita traz parâmetro de anúncio (utm_*, gclid, gbraid, wbraid, fbclid, campaign_id).
// Uma visita nova COM parâmetro substitui a anterior (o último anúncio clicado leva o crédito); visita sem parâmetro
// nunca apaga o que já foi guardado. Vale por 30 dias. Nada é enviado a ninguém aqui: só o orçamento enviado leva isso.

const KEY = "ks_attribution";
const MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000;
const TRACKED = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "campaign_id", "gclid", "gbraid", "wbraid", "fbclid"] as const;

type Stored = { origin: string; savedAt: number };

function safeStorage(): Storage | undefined {
  try {
    return typeof window === "undefined" ? undefined : window.localStorage;
  } catch {
    return undefined;
  }
}

/** Monta a origem (URL de entrada só com os parâmetros de rastreio) a partir do endereço atual. Undefined se não houver anúncio. */
export function buildOriginFromLocation(href: string): string | undefined {
  try {
    const url = new URL(href);
    const kept = new URLSearchParams();
    for (const key of TRACKED) {
      const value = url.searchParams.get(key);
      if (value) kept.set(key, value.slice(0, 200));
    }
    if (kept.size === 0) return undefined;
    return `${url.origin}${url.pathname}?${kept.toString()}`;
  } catch {
    return undefined;
  }
}

/** Chamar a cada carregamento de página: guarda a origem se a visita veio de um anúncio. */
export function captureAttribution(): void {
  const storage = safeStorage();
  if (!storage) return;
  const origin = buildOriginFromLocation(window.location.href);
  if (!origin) return;
  try {
    storage.setItem(KEY, JSON.stringify({ origin, savedAt: Date.now() } satisfies Stored));
  } catch {
    /* navegador sem armazenamento: o orçamento segue sem origem, nada quebra */
  }
}

/** Origem guardada (ainda válida) ou undefined. */
export function getAttributedOrigin(): string | undefined {
  const storage = safeStorage();
  if (!storage) return undefined;
  try {
    const raw = storage.getItem(KEY);
    if (!raw) return undefined;
    const stored = JSON.parse(raw) as Partial<Stored>;
    if (typeof stored.origin !== "string" || typeof stored.savedAt !== "number" || Date.now() - stored.savedAt > MAX_AGE_MS) return undefined;
    return stored.origin;
  } catch {
    return undefined;
  }
}
