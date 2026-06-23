"use client";

import { useEffect, useRef, useState } from "react";
import { company } from "@/lib/site";
import {
  chatStart,
  chatMessage,
  chatSetWhatsapp,
  extractPhone,
  type ChatMessage,
} from "@/lib/chat";

let _id = 0;
const nextId = () => `m${++_id}`;

type Phase = "name" | "chat";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [launcherText, setLauncherText] = useState("");
  const [sending, setSending] = useState(false);
  const [recording, setRecording] = useState(false);

  // estado da conversa com o CRM
  const [phase, setPhase] = useState<Phase>("name");
  const [convId, setConvId] = useState<string | null>(null);
  const [visitorName, setVisitorName] = useState("");
  const [askedWhatsapp, setAskedWhatsapp] = useState(false);
  const [gotWhatsapp, setGotWhatsapp] = useState(false);
  const pendingFirstMessage = useRef<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, sending]);

  // foca o campo do chat ao abrir
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 120);
  }, [open]);

  function pushUser(msg: Omit<ChatMessage, "id" | "role">) {
    setMessages((m) => [...m, { id: nextId(), role: "user", ...msg }]);
  }
  function pushBot(text: string) {
    setMessages((m) => [...m, { id: nextId(), role: "bot", kind: "text", text }]);
  }

  // abre o chat — opcionalmente já com a 1ª mensagem digitada na barra
  function openChat(initialText?: string) {
    setOpen(true);
    if (messages.length > 0) return;
    const init: ChatMessage[] = [];
    if (initialText?.trim()) {
      init.push({ id: nextId(), role: "user", kind: "text", text: initialText.trim() });
      pendingFirstMessage.current = initialText.trim();
    }
    init.push({
      id: nextId(),
      role: "bot",
      kind: "text",
      text: "Olá! 🌞 Que bom falar com você! Pra começar o seu atendimento, como posso te chamar?",
    });
    setMessages(init);
  }

  // ── Fase 1: nome → inicia conversa no CRM (e envia a 1ª mensagem, se houver)
  async function submitName(name: string) {
    pushUser({ kind: "text", text: name });
    setVisitorName(name);
    setSending(true);
    try {
      const id = await chatStart(name);
      setConvId(id);
      setPhase("chat");
      const first = pendingFirstMessage.current;
      if (id && first) {
        await chatMessage(id, first);
        pendingFirstMessage.current = null;
        setAskedWhatsapp(true);
        pushBot(
          `Prazer, ${name.split(" ")[0]}! 😊 Já registrei sua mensagem. Pra um especialista continuar seu atendimento, me passa seu WhatsApp com DDD? 📱`,
        );
      } else {
        pushBot(
          `Prazer, ${name.split(" ")[0]}! 😊 Como posso ajudar — orçamento, dúvida...? Pode escrever, mandar áudio ou a foto da sua conta de luz.`,
        );
      }
    } catch {
      pushBot("Tivemos um probleminha para iniciar o atendimento. 🙏 Se preferir, fale agora pelo WhatsApp no botão do topo do chat.");
    } finally {
      setSending(false);
    }
  }

  // ── Fase 2: mensagens → CRM (detecta WhatsApp p/ handoff) ──────────────
  async function sendToConversation(text: string) {
    if (!convId) return;
    setSending(true);
    try {
      const phone = extractPhone(text);
      if (phone && !gotWhatsapp) {
        await chatSetWhatsapp(convId, phone);
        setGotWhatsapp(true);
        pushBot(`Perfeito! 📲 Um especialista da KeroSolar já vai te chamar no seu WhatsApp. Obrigado, ${visitorName.split(" ")[0]}!`);
      } else {
        await chatMessage(convId, text);
        if (!askedWhatsapp && !gotWhatsapp) {
          setAskedWhatsapp(true);
          pushBot("Anotado! 👍 Pra um especialista continuar seu atendimento, me passa seu WhatsApp com DDD? 📱");
        } else {
          pushBot("Recebido! 👍 Pode continuar, estou registrando tudo para o nosso time.");
        }
      }
    } catch {
      pushBot("Ops, não consegui enviar agora. 🙏 Tente novamente ou fale pelo WhatsApp no topo do chat.");
    } finally {
      setSending(false);
    }
  }

  async function handleSend() {
    const text = input.trim();
    if (!text || sending) return;
    setInput("");
    if (phase === "name") await submitName(text);
    else await sendToConversation(text);
  }

  function handlePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || phase !== "chat") return;
    pushUser({ kind: "image", mediaUrl: URL.createObjectURL(file) });
    void sendNote("📷 Cliente enviou uma foto pelo chat do site.");
  }

  async function toggleRecording() {
    if (phase !== "chat") return;
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
        pushUser({ kind: "audio", mediaUrl: URL.createObjectURL(blob) });
        void sendNote("🎙️ Cliente enviou um áudio pelo chat do site.");
        setRecording(false);
      };
      recorderRef.current = rec;
      rec.start();
      setRecording(true);
    } catch {
      pushBot("Não consegui acessar o microfone. Verifique a permissão do navegador. 🎙️");
    }
  }

  async function sendNote(note: string) {
    if (!convId) return;
    setSending(true);
    try {
      await chatMessage(convId, note);
      pushBot("Recebido! 👍 Já encaminhei para o nosso time.");
    } catch {
      pushBot("Não consegui enviar o arquivo agora. 🙏 Tente pelo WhatsApp no topo do chat.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      {/* Lançador: barra com CAIXA DE TEXTO (convida a digitar na hora) */}
      {!open && (
        <div className="fixed bottom-5 right-5 z-50 w-[min(20.5rem,calc(100vw-2.5rem))]">
          <p className="ks-anim-pop mb-2 ml-1 text-xs font-medium text-brand-700/80 drop-shadow-sm">
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500 align-middle" />
            Atendimento online — fale agora
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const t = launcherText.trim();
              setLauncherText("");
              openChat(t || undefined);
            }}
            className="flex items-center gap-2 rounded-full bg-white py-2 pl-2.5 pr-2 shadow-2xl ring-1 ring-brand-100 transition focus-within:ring-2 focus-within:ring-sun-300"
          >
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun-500 text-lg">
              ☀
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-400" />
            </span>
            <input
              value={launcherText}
              onChange={(e) => setLauncherText(e.target.value)}
              placeholder="Escreva aqui e fale com a gente..."
              aria-label="Escreva sua mensagem para o atendimento KeroSolar"
              className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              aria-label="Enviar e abrir o chat"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sun-500 text-brand-900 transition hover:bg-sun-400"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}

      {/* Janela do chat */}
      {open && (
        <div className="fixed bottom-5 right-5 z-50 flex h-[min(34rem,calc(100vh-2.5rem))] w-[min(23rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-2xl">
          <div className="flex items-center gap-3 bg-gradient-to-br from-brand-700 to-brand-800 px-4 py-3 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sun-500 text-lg">☀</div>
            <div className="flex-1">
              <p className="text-sm font-semibold leading-tight">Atendimento KeroSolar</p>
              <p className="text-xs text-brand-200">Responde na hora</p>
            </div>
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] transition hover:opacity-90">
              <WhatsappIcon />
            </a>
            <button onClick={() => setOpen(false)} aria-label="Fechar chat" className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
          </div>

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

          <div className="flex items-end gap-2 border-t border-brand-100 bg-white p-3">
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhoto} className="hidden" />
            <IconButton label="Enviar foto" onClick={() => fileInputRef.current?.click()} disabled={sending || recording || phase === "name"}>
              <PhotoIcon />
            </IconButton>

            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  void handleSend();
                }
              }}
              rows={1}
              placeholder={recording ? "Gravando áudio..." : phase === "name" ? "Digite seu nome..." : "Escreva sua mensagem..."}
              disabled={recording}
              className="max-h-24 flex-1 resize-none rounded-2xl border border-brand-200 px-3 py-2 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 disabled:bg-brand-50"
            />

            {input.trim() || phase === "name" ? (
              <IconButton label="Enviar" onClick={handleSend} disabled={sending || !input.trim()} primary>
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
      <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm ${isUser ? "rounded-br-sm bg-brand-600 text-white" : "rounded-bl-sm bg-white text-ink/90"}`}>
        {msg.kind === "text" && <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>}
        {msg.kind === "image" && msg.mediaUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={msg.mediaUrl} alt="Imagem enviada" className="max-h-48 rounded-lg" />
        )}
        {msg.kind === "audio" && msg.mediaUrl && <audio controls src={msg.mediaUrl} className="w-56 max-w-full" />}
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
        recording ? "animate-pulse bg-red-500 text-white" : primary ? "bg-sun-500 text-brand-900 hover:bg-sun-400" : "bg-brand-50 text-brand-600 hover:bg-brand-100"
      }`}
    >
      {children}
    </button>
  );
}

function Dot() {
  return <span className="h-2 w-2 animate-bounce rounded-full bg-brand-300 [animation-delay:0ms] [&:nth-child(2)]:[animation-delay:150ms] [&:nth-child(3)]:[animation-delay:300ms]" />;
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
