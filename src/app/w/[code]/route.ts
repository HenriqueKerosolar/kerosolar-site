// Link curto do convite Instagram/Facebook → WhatsApp do CRM (pedido do dono, 15/11/2026).
// O CRM manda no Direct/Messenger "kerosolar.com.br/w/PYR2J" em vez do link comprido do wa.me; aqui
// redirecionamos para o WhatsApp da KeroSolar com a mensagem pronta e o CÓDIGO, que o CRM usa para juntar a
// conversa do Direct à do WhatsApp no mesmo lead (CRM: src/lib/crm/convite-whatsapp.ts).
import { NextResponse } from "next/server";

const NUMERO_WHATSAPP = "552120276013";
// Mesmo alfabeto do CRM (sem 0/O, 1/I/L), 5 caracteres.
const CODIGO = /^[A-HJKMNP-Z2-9]{5}$/;

export async function GET(_req: Request, { params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const c = (code ?? "").trim().toUpperCase();
  const texto = CODIGO.test(c)
    ? `Olá! Quero continuar meu atendimento. Código: ${c}`
    : "Olá! Quero um orçamento de energia solar.";
  const destino = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;
  return NextResponse.redirect(destino, { status: 302, headers: { "Cache-Control": "no-store" } });
}
