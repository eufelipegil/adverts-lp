// Dados gerais da Adverts. Tudo que é pendência do cliente mora aqui, nunca no HTML.

// Publicado em 13/10/2026 na StayCloud (cPanel, servidor NAUM, IP 177.154.190.229). DNS na StayCloud.
export const SITE_URL = 'https://advertsagencia.com.br';

export const site = {
  nome: 'Adverts Agência de Marketing',
  nomeCurto: 'Adverts',
  url: SITE_URL,
  slogan: 'Marketing para quem constrói o futuro da tecnologia.',
  whatsapp: {
    numero: '5519971030904',
    exibicao: '(19) 97103-0904',
  },
  email: 'contato@advertsagencia.com.br',
  horario: 'Seg a sex, das 8h às 18h',
  redes: {
    instagram: {
      usuario: '@adverts.agencia',
      url: 'https://www.instagram.com/adverts.agencia',
    },
    // Informada pelo cliente em 28/09/2026.
    facebook: {
      nome: 'Adverts Agencia',
      url: 'https://www.facebook.com/profile.php?id=61575735462275',
    },
  },
  // Informados pelo cliente em 28/09/2026 (CNPJ conferido pelos dígitos verificadores).
  razaoSocial: 'Adverts Agencia de Marketing LTDA',
  cnpj: '51.456.969/0001-02',
  // mapa: link do perfil no Google Meu Negócio enviado pelo cliente (28/09/2026)
  cidade: { nome: 'Mogi Mirim', uf: 'SP', mapa: 'https://share.google/TrQNa84mvcf1M4UlJ' },
} as const;

export const meta = {
  title: 'Marketing e tráfego pago para revendas de software | Adverts',
  description:
    'Google Ads, Meta Ads, landing pages, CRM e automação para revendas de software e empresas de tecnologia. Pare de depender de lista fria e fale com a Adverts no WhatsApp.',
  ogTitle: 'Adverts | Marketing para quem constrói o futuro da tecnologia',
  lang: 'pt-BR',
} as const;

// Título: opção 1 confirmada pelo cliente (28/09/2026).
// `destaque` é a parte em azul. "\n" marca onde a linha quebra no desktop largo (≥1440px);
// em telas menores a quebra some e o texto corre normalmente.
// Para trocar de título, mude só o índice em H1.
export const H1_OPCOES = [
  {
    texto: 'Pare de ligar para quem\nnão quer ouvir.',
    destaque: 'Comece a\natender quem já está\nprocurando o seu sistema.',
  },
  {
    texto: 'Tráfego pago para revendas de software:',
    destaque: 'mais demonstrações agendadas, menos lista fria',
  },
  {
    texto: 'De R$ 1.500 para R$ 20.000 de MRR.',
    destaque: 'A próxima revenda pode ser a sua.',
  },
] as const;

export const H1 = H1_OPCOES[0];
