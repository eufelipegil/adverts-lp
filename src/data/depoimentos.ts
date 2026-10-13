// [PROVISÓRIO] Depoimentos ainda não recebidos. Enquanto o array estiver vazio, a seção inteira não é renderizada.
export interface Depoimento {
  texto: string;
  nome: string;
  cargo: string;
  empresa: string;
}

export const depoimentos: Depoimento[] = [];
