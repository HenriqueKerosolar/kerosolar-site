import { company } from "@/lib/site";
import { Testimonials } from "./Testimonials";
import { GoogleReviews } from "./GoogleReviews";

// Mostra as avaliações reais do Google quando o widget Featurable está
// configurado; caso contrário, exibe os depoimentos estáticos (fallback).
export function Reviews() {
  const id = company.googleReviewsWidgetId as string;
  if (id) {
    return <GoogleReviews featurableId={id} />;
  }
  return <Testimonials />;
}
