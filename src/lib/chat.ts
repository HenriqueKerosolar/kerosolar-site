// Cliente do chat do site → CRM KeroSolar (via proxy /api/chat).
//
// O CRM (api/public/chat-site) usa um fluxo de 3 ações:
//   start        → cria contato + lead ("Entrou pelo Site") + conversa  → retorna { convId }
//   message      → registra uma mensagem do visitante na conversa
//   set-whatsapp → grava o WhatsApp do visitante (gatilho para o handoff)
// O endpoint NÃO devolve resposta de bot — a sequência acontece no CRM/WhatsApp.

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

async function post(body: Record<string, unknown>) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || `Erro ${res.status}`);
  return data as { ok?: boolean; convId?: string; leadId?: string; reply?: string; handoff?: boolean; error?: string };
}

/** Inicia a conversa com o nome do visitante. Retorna o convId. */
export async function chatStart(visitorName: string, visitorEmail?: string) {
  const r = await post({ action: "start", visitorName, visitorEmail });
  return r.convId ?? null;
}

/** Envia uma mensagem e retorna a resposta da IA (mesmo agente do WhatsApp). */
export async function chatMessage(convId: string, message: string): Promise<string | null> {
  const r = await post({ action: "message", convId, message });
  return r.reply ?? null;
}

/** Grava o WhatsApp do visitante (dispara o handoff no CRM). */
export async function chatSetWhatsapp(convId: string, whatsapp: string) {
  await post({ action: "set-whatsapp", convId, whatsapp });
}

/** Detecta um número de telefone/WhatsApp brasileiro no texto (sequência contígua). */
export function extractPhone(text: string): string | null {
  // ex.: 983837434 | 21 99999-8888 | (21) 2027-6013 | +55 21 99999 8888
  const m = text.match(/(?:\+?55\s*)?(?:\(?\d{2}\)?[\s.-]?)?\d{4,5}[\s.-]?\d{4}/);
  if (!m) return null;
  const digits = m[0].replace(/\D/g, "");
  if (digits.length >= 8 && digits.length <= 13) return digits;
  return null;
}
