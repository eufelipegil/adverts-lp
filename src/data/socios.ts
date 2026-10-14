import type { ImageMetadata } from 'astro';
import fotoBruno from '../assets/socios/bruno.jpg';
import fotoAriel from '../assets/socios/ariel.jpg';
import fotoMatheus from '../assets/socios/matheus.jpg';
import fotoGuilherme from '../assets/socios/guilherme.png';

// Nomes completos informados pelo cliente em 28/09/2026.
// [PROVISÓRIO] Textos de Guilherme e Matheus pendentes.
// Sem `texto`, o card mostra só nome e função. Sem `foto`, mostra as iniciais.
// Para adicionar a foto: salve em src/assets/socios/ (4:5) e importe aqui, ex.:
//   import fotoBruno from '../assets/socios/bruno.jpg';  ...  foto: fotoBruno
export interface Socio {
  nome: string;
  funcao: string;
  texto?: string;
  foto?: ImageMetadata;
}

export const socios: Socio[] = [
  {
    nome: 'Bruno Chagas',
    funcao: 'Sócio fundador',
    texto: 'Veio da tecnologia para o tráfego pago. Sabe como um software é vendido porque já esteve do outro lado.',
    foto: fotoBruno,
  },
  {
    nome: 'Ariel Oliveira',
    funcao: 'Sócio fundador',
    texto: 'Começou como cliente da Adverts. Traz a experiência de vendas e o networking no mercado de software.',
    foto: fotoAriel,
  },
  { nome: 'Guilherme Teodoro', funcao: 'Sócio', foto: fotoGuilherme },
  { nome: 'Matheus Monticelli', funcao: 'Sócio', foto: fotoMatheus },
];
