// [PROVISÓRIO] Outros cases ainda não recebidos. Enquanto o array estiver vazio, a grade não é renderizada.
// Formato de cada item: { segmento, antes, depois, prazo } (textos exatamente como o cliente enviar).
export interface Case {
  segmento: string;
  antes: string;
  depois: string;
  prazo: string;
}

export const cases: Case[] = [];
