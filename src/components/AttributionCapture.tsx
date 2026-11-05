"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/attribution";

// Não renderiza nada: só guarda, a cada página, de qual anúncio a pessoa chegou (ver src/lib/attribution.ts).
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
