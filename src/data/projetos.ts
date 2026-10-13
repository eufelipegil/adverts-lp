// Mosaico de projetos: 15 espaços, 12 fotos e 3 vídeos verticais.
// Fotos:  salvar em src/assets/projetos/ com o número do espaço (01.jpg ... 15.jpg; jpg, png ou webp).
// Vídeos: salvar em public/projetos/ como video-1.mp4, video-2.mp4, video-3.mp4 (opcional: video-1.jpg como capa).
// Espaço sem arquivo aparece como bloco escuro vazio. `alt` vazio = imagem decorativa.
export type Formato = 'grande' | 'largo' | 'vertical';

export interface Espaco {
  n: number;
  tipo: 'foto' | 'video';
  formato: Formato;
  /** posição no desktop (grade de 4 colunas) */
  col: string;
  linha: string;
  alt: string;
}

export const projetos: Espaco[] = [
  { n: 1,  tipo: 'foto',  formato: 'grande',   col: '1 / span 2', linha: '1 / span 2', alt: '' },
  { n: 2,  tipo: 'foto',  formato: 'largo',    col: '3 / span 2', linha: '1', alt: '' },
  { n: 3,  tipo: 'video', formato: 'vertical', col: '3', linha: '2', alt: '' },
  { n: 4,  tipo: 'foto',  formato: 'vertical', col: '4', linha: '2', alt: '' },
  { n: 5,  tipo: 'foto',  formato: 'vertical', col: '1', linha: '3', alt: '' },
  { n: 6,  tipo: 'foto',  formato: 'vertical', col: '2', linha: '3', alt: '' },
  { n: 7,  tipo: 'foto',  formato: 'largo',    col: '3 / span 2', linha: '3', alt: '' },
  { n: 8,  tipo: 'foto',  formato: 'largo',    col: '1 / span 2', linha: '4', alt: '' },
  { n: 9, tipo: 'foto',  formato: 'vertical', col: '3', linha: '4', alt: '' },
  { n: 10, tipo: 'video', formato: 'vertical', col: '4', linha: '4', alt: '' },
  { n: 11, tipo: 'foto',  formato: 'largo',    col: '1 / span 2', linha: '5', alt: '' },
  { n: 12, tipo: 'foto',  formato: 'largo',    col: '3 / span 2', linha: '5', alt: '' },
  { n: 13, tipo: 'video', formato: 'vertical', col: '1', linha: '6', alt: '' },
  { n: 14, tipo: 'foto',  formato: 'largo',    col: '2 / span 2', linha: '6', alt: '' },
  { n: 15, tipo: 'foto',  formato: 'vertical', col: '4', linha: '6', alt: '' },
];
