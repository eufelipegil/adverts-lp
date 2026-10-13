import { ctas, type CtaId } from '../data/ctas';
import { site } from '../data/site';

/** Único ponto que monta links de WhatsApp. Nunca escreva o número num componente. */
export function waLink(ctaId: CtaId): string {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(ctas[ctaId].mensagem)}`;
}
