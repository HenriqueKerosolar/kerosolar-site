import { NextResponse } from "next/server";

// Proxy do chat do site → endpoint público do CRM (/api/public/webchat).
// Evita CORS (mesma origem para o navegador) e mantém a URL/chave do CRM no servidor.
// Configure no .env.local (e nas env vars da Vercel do SITE):
//   CRM_WEBCHAT_ENDPOINT = https://kerosolar-crm.vercel.app/api/public/webchat
//   CRM_WEBCHAT_API_KEY  = <mesma chave WEBCHAT_API_KEY do CRM>
const ENDPOINT = process.env.CRM_WEBCHAT_ENDPOINT;
const API_KEY = process.env.CRM_WEBCHAT_API_KEY;

export async function POST(req: Request) {
  if (!ENDPOINT) {
    return NextResponse.json(
      { error: "Chat ainda não configurado (defina CRM_WEBCHAT_ENDPOINT)." },
      { status: 503 },
    );
  }
  try {
    const body = await req.text();
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(API_KEY ? { "x-api-key": API_KEY } : {}),
      },
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
