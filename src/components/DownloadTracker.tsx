"use client";

import { useEffect } from "react";

// Conta o download dos materiais em PDF (e-book e guia) como um evento próprio, separado do lead do formulário.
// Não renderiza nada: ouve o clique em qualquer link de PDF do site e avisa as tags que estiverem ligadas:
//  - dataLayer (GTM): evento `ebook_download`, com o nome do arquivo e a página onde o clique aconteceu;
//  - Meta Pixel, se já estiver carregado na página: evento personalizado `EbookDownload`.
// O download em si nunca é atrasado nem impedido por isto.

type TrackWindow = Window & { dataLayer?: object[]; fbq?: (...args: unknown[]) => void };

export function DownloadTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const path = link.pathname ?? "";
      if (!path.toLowerCase().endsWith(".pdf") || link.origin !== window.location.origin) return;
      const file = path.split("/").pop() ?? path;
      try {
        const w = window as TrackWindow;
        w.dataLayer = w.dataLayer ?? [];
        w.dataLayer.push({ event: "ebook_download", file_name: file, download_page: window.location.pathname });
        w.fbq?.("trackCustom", "EbookDownload", { file_name: file });
      } catch {
        // medir nunca pode quebrar o download
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
