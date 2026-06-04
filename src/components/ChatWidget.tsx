"use client";

import { useEffect, useRef, useState } from "react";
import { company } from "@/lib/site";
import { sendChat, type ChatMessage } from "@/lib/chat";

let _id = 0;
const nextId = () => `m${++_id}`;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [recording, setRecording] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // mensagem de boas-vindas ao abrir
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          id: nextId(),
          role: "bot",
          kind: "text",
          text: "Olá! 🌞 Sou o assistente da KeroSolar. Quer um orçamento ou tirar uma dúvida sobre energia solar? Pode escrever, mandar um áudio ou até a foto da sua conta de luz.",
        },
      ]);
    }
  }, [open, messages.length]);

  // rola para a última mensagem
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  // convite proativo: aparece uma vez por visita, alguns segundos após carregar
  useEffect(() => {
    if (open || typeof window === "undefined") return;
    if (sessionStorage.getItem("ks_chat_teaser_seen")) return;
    const t = setTimeout(() => setShowTeaser(true), 4500);
    return () => clearTimeout(t);
  }, [open]);

  function markTeaserSeen() {
    setShowTeaser(false);
    if (typeof window !== "undefined") sessionStorage.setItem("ks_chat_teaser_seen", "1");
  }
  function openChat() {
    markTeaserSeen();
    setHasUnread(false);
    setOpen(true);
  }

  function pushUser(msg: Omit<ChatMessage, "id" | "role">) {
    setMessages((m) => [...m, { id: nextId(), role: "user", ...msg }]);
  }
  function pushBot(text: string) {
    setMessages((m) => [...m, { id: nextId(), role: "bot", kind: "text", text }]);
  }

  async function deliver(opts: { kind: ChatMessage["kind"]; text?: string; file?: Blob; fileName?: string }) {
    setSending(true);
    try {
      const { reply } = await sendChat(opts);
      if (reply) pushBot(reply);
    } catch {
      pushBot("Ops, não consegui enviar agora. Tente novamente ou fale pelo WhatsApp. 🙏");
    } finally {
      setSending(false);
    }
  }

  async function handleSendText() {
    const text = input.trim();
    if (!text || sending) return;
    setInput("");
    pushUser({ kind: "text", text });
    await deliver({ kind: "text", text });
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    const url = URL.createObjectURL(file);
    pushUser({ kind: "image", mediaUrl: url });
    void deliver({ kind: "image", file, fileName: file.name });
  }

  async function toggleRecording() {
    if (recording) {
      recorderRef.current?.stop();
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (ev) => ev.data.size > 0 && chunksRef.current.push(ev.data);
      rec.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunksRef.current, { type: rec.mimeType || "audio/webm" });
        const url = URL.createObjectURL(blob);
        pushUser({ kind: "audio", mediaUrl: url });
        void deliver({ kind: "audio", file: blob, fileName: "audio.webm" });
        setRecording(false);
      };
      recorderRef.current = rec;
      rec.start();
      setRecording(true);
    } catch {
      pushBot("Não consegui acessar o microfone. Verifique a permissão do navegador. 🎙️");
    }
  }

  return (
    <>
      {/* Convite flutuante (botão + bolha proativa) */}
      {!open && (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
          {/* Bolha-convite: gancho de curiosidade */}
          {showTeaser && (
            <div className="ks-anim-pop relative max-w-[16.5rem] rounded-2xl rounded-br-sm bg-white p-3 pr-8 shadow-xl ring-1 ring-brand-100">
              <button
                onClick={markTeaserSeen}
                aria-label="Fechar convite"
                className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full text-muted transition hover:bg-brand-50"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
              <button onClick={openChat} className="flex items-start gap-2.5 text-left">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sun-500 text-base">☀</span>
                <span className="text-sm leading-snug text-ink/90">
                  <strong className="text-brand-700">Quanto você pode economizar?</strong> Me chama que eu calculo a sua economia com energia solar. 😊
                </span>
              </button>
            </div>
          )}

          {/* Botão flutuante com halo, ponto online e badge */}
          <div className="relative h-14 w-14">
            <span
              aria-hidden
              className="ks-anim-halo pointer-events-none absolute inset-0 rounded-full border-2 border-sun-400"
              style={{ animation: "ks-halo 2.3s ease-out infinite" }}
            />
            <button
              onClick={openChat}
              aria-label="Abrir chat de atendimento"
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-black/25 transition hover:scale-105 hover:bg-brand-700"
            >
              <span className="ks-anim-attention" style={{ animation: "ks-attention 6s ease-in-out infinite" }}>
                <ChatIcon />
              </span>
              {/* ponto "online" */}
              <span className="absolute bottom-0.5 right-0.5 flex h-3.5 w-3.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative h-2.5 w-2.5 rounded-full border-2 border-brand-600 bg-green-400" />
              </span>
              {/* badge de curiosidade (some após abrir) */}
              {hasUnread && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-sun-500 text-[11px] font-bold text-brand-900 shadow ring-2 ring-white">
                  1
                </span>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Janela do chat */}
      {open && (
        <div className="fixed bottom-5 right-5 z-50 flex h-[min(34rem,calc(100vh-2.5rem))] w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-br from-brand-700 to-brand-800 px-4 py-3 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sun-500 text-lg">☀</div>
            <div className="flex-1">
              <p className="text-sm font-semibold leading-tight">Atendimento KeroSolar</p>
              <p className="text-xs text-brand-200">Responde na hora</p>
            </div>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] transition hover:opacity-90"
            >
              <WhatsappIcon />
            </a>
            <button onClick={() => setOpen(false)} aria-label="Fechar chat" className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>

          {/* Mensagens */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-brand-50/50 p-4">
            {messages.map((m) => (
              <Bubble key={m.id} msg={m} />
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm">
                  <Dot /> <Dot /> <Dot />
                </div>
              </div>
            )}
          </div>

          {/* Barra de entrada */}
          <div className="flex items-end gap-2 border-t border-brand-100 bg-white p-3">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhoto} className="hidden" />
            <IconButton label="Enviar foto" onClick={() => fileInputRef.current?.click()} disabled={sending || recording}>
              <PhotoIcon />
            </IconButton>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void handleSendText();
                }
              }}
              rows={1}
              placeholder={recording ? "Gravando áudio..." : "Escreva sua mensagem..."}
              disabled={recording}
              className="max-h-24 flex-1 resize-none rounded-2xl border border-brand-200 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 disabled:bg-brand-50"
            />

            {input.trim() ? (
              <IconButton label="Enviar" onClick={handleSendText} disabled={sending} primary>
                <SendIcon />
              </IconButton>
            ) : (
              <IconButton label={recording ? "Parar gravação" : "Gravar áudio"} onClick={toggleRecording} disabled={sending} recording={recording}>
                <MicIcon />
              </IconButton>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Bubble({ msg }: { msg: ChatMessage }) {
  const isUser = msg.role === "user";
  return (
    <div className={isUser ? "flex justify-end" : "flex justify-start"}>
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
          isUser ? "rounded-br-sm bg-brand-600 text-white" : "rounded-bl-sm bg-white text-ink/90"
        }`}
      >
        {msg.kind === "text" && <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>}
        {msg.kind === "image" && msg.mediaUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={msg.mediaUrl} alt="Imagem enviada" className="max-h-48 rounded-lg" />
        )}
        {msg.kind === "audio" && msg.mediaUrl && (
          <audio controls src={msg.mediaUrl} className="w-56 max-w-full" />
        )}
      </div>
    </div>
  );
}

function IconButton({
  children,
  label,
  onClick,
  disabled,
  primary,
  recording,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
  recording?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition disabled:opacity-40 ${
        recording
          ? "animate-pulse bg-red-500 text-white"
          : primary
            ? "bg-sun-500 text-brand-900 hover:bg-sun-400"
            : "bg-brand-50 text-brand-600 hover:bg-brand-100"
      }`}
    >
      {children}
    </button>
  );
}

function Dot() {
  return <span className="h-2 w-2 animate-bounce rounded-full bg-brand-300 [animation-delay:0ms] [&:nth-child(2)]:[animation-delay:150ms] [&:nth-child(3)]:[animation-delay:300ms]" />;
}

/* ícones */
function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.8L3 21l1.9-5.1A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z" />
    </svg>
  );
}
function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  );
}
function MicIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0M12 17v4" />
    </svg>
  );
}
function PhotoIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}
function WhatsappIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
    </svg>
  );
}
