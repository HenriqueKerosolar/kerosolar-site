import { whatsappLink } from "./site";

// Estrutura de um lead capturado no site (orçamento, contato, etc.)
export type Lead = {
  name: string;
  phone?: string;
  email?: string;
  city?: string;
  contactPreference?: string;
  message?: string;
  /** De onde veio o lead, ex.: "orcamento-home", "contato" */
  source?: string;
};

/**
 * PONTO ÚNICO DE INTEGRAÇÃO DE LEADS.
 *
 * Hoje: monta a mensagem e abre o WhatsApp da empresa.
 * CRM: se `NEXT_PUBLIC_CRM_LEAD_ENDPOINT` estiver definido (.env.local), o lead
 *      também é enviado para a API do CRM da KeroSolar — sem bloquear o usuário
 *      caso o CRM esteja fora do ar.
 *
 * Para integrar com o CRM, basta criar `.env.local` com:
 *   NEXT_PUBLIC_CRM_LEAD_ENDPOINT=https://crm.kerosolar.com.br/api/leads
 */
export async function submitLead(lead: Lead) {
  const endpoint = process.env.NEXT_PUBLIC_CRM_LEAD_ENDPOINT;

  if (endpoint) {
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...lead, origin: "site", createdAt: new Date().toISOString() }),
        keepalive: true,
      });
    } catch (err) {
      // Não interrompe o atendimento se o CRM falhar.
      console.error("Falha ao enviar lead para o CRM:", err);
    }
  }

  if (typeof window !== "undefined") {
    window.open(whatsappLink(buildWhatsappMessage(lead)), "_blank");
  }
}

function buildWhatsappMessage(lead: Lead) {
  return [
    "*Solicitação de Orçamento — Site KeroSolar*",
    `Nome: ${lead.name}`,
    lead.phone && `Telefone: ${lead.phone}`,
    lead.email && `E-mail: ${lead.email}`,
    lead.city && `Cidade: ${lead.city}`,
    lead.contactPreference && `Preferência de contato: ${lead.contactPreference}`,
    lead.message && `Mensagem: ${lead.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}
