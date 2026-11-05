// Google Tag Manager do site (achado 2026-11-05, manual de correções do Mind Marketing).
// Um único contêiner cuida do GA4, do Meta Pixel e da tag de conversão do Google Ads: os três são configurados DENTRO
// do GTM, sem mexer no código do site de novo. Sem NEXT_PUBLIC_GTM_ID definido, não renderiza nada (nenhum efeito).
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Só aceita o formato real de um ID de contêiner (GTM-XXXXXXX) — nunca injeta texto solto no HTML.
const VALID = /^GTM-[A-Z0-9]{4,12}$/;

export function GoogleTagManagerScript() {
  if (!GTM_ID || !VALID.test(GTM_ID)) return null;
  const snippet = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;
  return <script dangerouslySetInnerHTML={{ __html: snippet }} />;
}

export function GoogleTagManagerNoScript() {
  if (!GTM_ID || !VALID.test(GTM_ID)) return null;
  return (
    <noscript>
      <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" />
    </noscript>
  );
}
