// Cliente do chat do site → CRM KeroSolar (canal "webchat"), via proxy /api/chat.
//
// O endpoint público do CRM (/api/public/webchat) usa o MESMO motor do WhatsApp
// (ingestMessage). Contrato:
//   POST { visitorId, name?, text }  → { reply, handoff }
//   GET  ?visitorId=...&after=<iso>  → { messages }   (polling de respostas humanas)
// O visitante é identificado por um `visitorId` estável guardado no navegador.

export type ChatRole = "user" | "bot";
export type ChatKind = "text" | "audio" | "image";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  kind: ChatKind;
  text?: string;
  /** object URL local para exibir a mídia enviada pelo visitante */
  mediaUrl?: string;
}

const VISITOR_KEY = "ks_chat_visitor";

/** ID estável do visitante (persistido no navegador). Usado como identidade no CRM. */
export function getVisitorId(): string {
  if (typeof window === "undefined") return "anon";
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = "site-" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

/** Envia uma mensagem ao CRM e retorna a resposta da IA (mesmo agente do WhatsApp). */
export async function chatSend(
  visitorId: string,
  text: string,
  name?: string,
): Promise<{ reply: string | null; handoff: boolean }> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ visitorId, name, text }),
  });
  const data = (await res.json().catch(() => ({}))) as {
    reply?: string;
    handoff?: boolean;
    error?: string;
  };
  if (!res.ok) throw new Error(data?.error || `Erro ${res.status}`);
  return { reply: data.reply ?? null, handoff: !!data.handoff };
}
