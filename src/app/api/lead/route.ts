import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  if (!resend) {
    return NextResponse.json({ ok: false, error: "RESEND_API_KEY not configured" }, { status: 500 });
  }

  const body = await req.json();
  const { name, phone, email, city, contactPreference, message, source } = body;

  const lines = [
    `<strong>Nome:</strong> ${name ?? "—"}`,
    phone ? `<strong>Telefone:</strong> ${phone}` : null,
    email ? `<strong>E-mail:</strong> ${email}` : null,
    city ? `<strong>Cidade:</strong> ${city}` : null,
    contactPreference ? `<strong>Preferência de contato:</strong> ${contactPreference}` : null,
    message ? `<strong>Mensagem:</strong> ${message}` : null,
    `<strong>Origem:</strong> ${source ?? "site"}`,
  ]
    .filter(Boolean)
    .join("<br>");

  const { error } = await resend.emails.send({
    from: "Site KeroSolar <no-reply@kerosolar.com.br>",
    to: ["contato@kerosolar.com.br"],
    subject: `Novo lead do site — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px">
        <h2 style="color:#1a5c2e">Novo lead recebido pelo site KeroSolar</h2>
        <p>${lines}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
