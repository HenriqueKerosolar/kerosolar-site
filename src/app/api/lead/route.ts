import { NextRequest, NextResponse } from "next/server";
import { enviarEmail, type SmtpConfig } from "@lib/email-smtp";

// E-mail de lead novo → contato@kerosolar.com.br, pelo SMTP da própria Kerosolar (HostGator).
// Usado pelo FORMULÁRIO do site e pelo CRM (chat do site), que não consegue mandar SMTP do Railway.
// Variáveis (Vercel): SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM (opcional), LEAD_NOTIFY_EMAIL (opcional).
// Chamada do CRM: header x-relay-key = CRM_WEBCHAT_API_KEY (mesma chave do webchat) → aceita o link do lead no CRM.

export const runtime = "nodejs";

function smtp(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  if (!host || !user || !process.env.SMTP_PASS) return null;
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  return {
    host, port, secure: port === 465, user, pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM?.trim() || `Site KeroSolar <${user}>`,
    heloName: "kerosolar-site", timeoutMs: 15000,
  };
}

const esc = (v: unknown) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
const campo = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/[\r\n\t]+/g, " ").trim().slice(0, max) : "");

export async function POST(req: NextRequest) {
  const cfg = smtp();
  if (!cfg) return NextResponse.json({ ok: false, error: "SMTP não configurado" }, { status: 500 });

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const name = campo(body.name, 120);
  if (!name) return NextResponse.json({ ok: false, error: "nome obrigatório" }, { status: 400 });

  const doCrm = !!process.env.CRM_WEBCHAT_API_KEY && req.headers.get("x-relay-key") === process.env.CRM_WEBCHAT_API_KEY;
  const crmLink = doCrm ? campo(body.crmLink, 300) : "";

  const linhas: [string, string][] = [
    ["Nome", name],
    ["Telefone", campo(body.phone, 30)],
    ["E-mail", campo(body.email, 160)],
    ["Cidade", campo(body.city, 80)],
    ["Preferência de contato", campo(body.contactPreference, 40)],
    ["Mensagem", typeof body.message === "string" ? body.message.trim().slice(0, 2000) : ""],
    ["Origem", campo(body.source, 80) || "site"],
  ].filter(([, v]) => v) as [string, string][];

  const text = `Novo lead recebido pelo site KeroSolar\n\n${linhas.map(([k, v]) => `${k}: ${v}`).join("\n")}${crmLink ? `\n\nAbrir no CRM: ${crmLink}` : ""}\n`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#222;max-width:600px">
<h2 style="color:#1a5c2e;margin:0 0 12px">Novo lead recebido pelo site KeroSolar</h2>
<table cellpadding="6" style="border-collapse:collapse">${linhas
    .map(([k, v]) => `<tr><td style="font-weight:bold;vertical-align:top;border-bottom:1px solid #eee">${esc(k)}</td><td style="border-bottom:1px solid #eee;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join("")}</table>
${crmLink ? `<p style="margin-top:16px"><a href="${esc(crmLink)}">Abrir o lead no CRM</a></p>` : ""}
</div>`;

  const email = campo(body.email, 160);
  const replyTo = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) ? email : undefined;
  const para = (process.env.LEAD_NOTIFY_EMAIL || "contato@kerosolar.com.br").split(",").map((s) => s.trim()).filter(Boolean);

  try {
    await enviarEmail(cfg, { to: para, subject: `Novo lead do site — ${name}`, text, html, replyTo });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[lead e-mail]", e instanceof Error ? e.message : e);
    return NextResponse.json({ ok: false, error: "falha ao enviar e-mail" }, { status: 500 });
  }
}
