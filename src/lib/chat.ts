// Cliente do chat do site → CRM KeroSolar.
//
// Contrato com o CRM (endpoint em NEXT_PUBLIC_CRM_CHAT_ENDPOINT):
//   POST multipart/form-data { sessionId, kind: text|audio|image, text?, file? }
//   Resposta JSON: { reply: string, handoff?: boolean }
// No CRM, isso deve chamar `ingestMessage({ channel: 'site', externalId: sessionId, text, ... })`
// e devolver `result.reply`. Enquanto o endpoint não existe, o widget usa um
// fallback local (modo demonstração) para já funcionar visualmente.

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

const ENDPOINT = process.env.NEXT_PUBLIC_CRM_CHAT_ENDPOINT;

export function isChatConnected() {
  return Boolean(ENDPOINT);
}

const SESSION_KEY = "kerosolar_chat_session";

export function getSessionId(): string {
  if (typeof window === "undefined") return "server";
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export interface SendResult {
  reply: string;
  handoff?: boolean;
}

export async function sendChat(opts: {
  kind: ChatKind;
  text?: string;
  file?: Blob;
  fileName?: string;
}): Promise<SendResult> {
  if (!ENDPOINT) {
    // pequena espera para simular o "digitando..."
    await new Promise((r) => setTimeout(r, 600));
    return fallbackReply(opts.kind);
  }

  const form = new FormData();
  form.append("sessionId", getSessionId());
  form.append("kind", opts.kind);
  if (opts.text) form.append("text", opts.text);
  if (opts.file) form.append("file", opts.file, opts.fileName ?? "arquivo");

  const res = await fetch(ENDPOINT, { method: "POST", body: form });
  if (!res.ok) throw new Error(`Falha ao enviar (${res.status})`);
  const data = (await res.json()) as Partial<SendResult>;
  return { reply: data.reply ?? "", handoff: data.handoff };
}

function fallbackReply(kind: ChatKind): SendResult {
  if (kind === "audio")
    return { reply: "Recebi seu áudio! 🎙️ Em instantes um especialista te responde." };
  if (kind === "image")
    return { reply: "Recebi sua imagem! 📷 Já vou analisar para te ajudar melhor." };
  return {
    reply:
      "Obrigado pela mensagem! 🌞 Nosso atendimento está sendo conectado. " +
      "Se preferir, fale agora pelo WhatsApp no botão do topo do chat.",
  };
}
