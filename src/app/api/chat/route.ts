import { NextResponse } from "next/server";

// Proxy do chat do site → endpoint do CRM (api/public/chat-site).
// Evita CORS (mesma origem para o navegador) e mantém a URL do CRM no servidor.
// Configure CRM_CHAT_ENDPOINT no .env.local.
const CRM_ENDPOINT = process.env.CRM_CHAT_ENDPOINT;

export async function POST(req: Request) {
  if (!CRM_ENDPOINT) {
    return NextResponse.json(
      { error: "Chat ainda não configurado (defina CRM_CHAT_ENDPOINT)." },
      { status: 503 },
    );
  }
  try {
    const body = await req.text();
    const res = await fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      cache: "no-store",
    });
    const data = await res.text();
    return new NextResponse(data, {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[chat proxy]", err);
    return NextResponse.json({ error: "Falha ao contatar o CRM." }, { status: 502 });
  }
}
