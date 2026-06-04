// Wrapper para blocos de texto longo das páginas internas.
export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5 text-[15px] leading-relaxed text-ink/80 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-brand-800 [&_strong]:text-brand-800 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
      {children}
    </div>
  );
}
