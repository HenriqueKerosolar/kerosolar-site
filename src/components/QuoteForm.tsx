"use client";

import { useState } from "react";
import { submitLead } from "@/lib/leads";

// Formulário "Solicite Orçamento". Envia o lead pelo módulo central
// (`submitLead`): hoje abre o WhatsApp; quando o CRM estiver configurado,
// também envia para a API do CRM.
export function QuoteForm({
  compact = false,
  source = "site",
}: {
  compact?: boolean;
  source?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("Todos");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    void submitLead({
      name,
      phone,
      email,
      city,
      contactPreference: contact,
      message,
      source,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2"}>
        <Field
          label="Nome"
          value={name}
          onChange={setName}
          required
          placeholder="Seu nome"
        />
        <Field
          label="WhatsApp / Celular"
          value={phone}
          onChange={setPhone}
          type="tel"
          placeholder="(21) 99999-9999"
        />
      </div>
      <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2"}>
        <Field
          label="E-mail"
          value={email}
          onChange={setEmail}
          type="email"
          placeholder="voce@email.com"
        />
        <Field
          label="Cidade"
          value={city}
          onChange={setCity}
          placeholder="Sua cidade"
        />
      </div>

      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-ink/80">Preferência de contato</span>
        <select
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="rounded-lg border border-brand-200 bg-white px-3 py-2.5 text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        >
          <option>Todos</option>
          <option>WhatsApp</option>
          <option>Celular</option>
          <option>E-mail</option>
        </select>
      </label>

      <label className="grid gap-1.5 text-sm">
        <span className="font-medium text-ink/80">Mensagem</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={compact ? 3 : 4}
          placeholder="Conte um pouco sobre o seu projeto, consumo mensal de energia, tipo de imóvel..."
          className="rounded-lg border border-brand-200 bg-white px-3 py-2.5 text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
      </label>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-sun-500 px-6 py-3 font-semibold text-brand-900 shadow-sm transition hover:bg-sun-400"
      >
        Enviar pelo WhatsApp
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
        </svg>
      </button>
      <p className="text-center text-xs text-muted">
        Responderemos em horário comercial. Seus dados não são compartilhados.
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="font-medium text-ink/80">
        {label}
        {required && <span className="text-sun-600"> *</span>}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-brand-200 bg-white px-3 py-2.5 text-ink outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </label>
  );
}
