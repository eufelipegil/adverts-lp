// IDs, textos e mensagens pré-preenchidas de cada CTA de WhatsApp (tabela da copy).
// A mensagem identifica para o time da Adverts de qual parte da página o lead veio.

export const ctas = {
  cta_header: {
    texto: 'Falar no WhatsApp',
    mensagem: 'Olá! Vim pelo site da Adverts e quero conversar sobre a minha revenda.',
  },
  cta_hero: {
    texto: 'Quero escalar minha revenda',
    mensagem: 'Olá! Vim pelo site da Adverts e quero escalar minha revenda de software.',
  },
  cta_depoimento: {
    texto: 'Quero um resultado assim',
    mensagem: 'Olá! Vi o depoimento no site da Adverts e quero entender como seria na minha revenda.',
  },
  cta_processo: {
    texto: 'Começar pela conversa de triagem',
    mensagem: 'Olá! Quero marcar a conversa de triagem com a Adverts.',
  },
  cta_final: {
    texto: 'Chamar a Adverts no WhatsApp',
    mensagem:
      'Olá! Quero parar de depender de lista fria e escalar minha revenda. Podemos conversar?',
  },
  cta_flutuante: {
    texto: 'Falar com a Adverts no WhatsApp', // usado como aria-label (botão só com ícone)
    mensagem: 'Olá! Vim pelo site da Adverts e quero conversar sobre a minha revenda.',
  },
  // Páginas extras. A bio usa a mesma mensagem do site (decisão de 09/10/2026).
  cta_bio: {
    texto: 'Falar com a Adverts no WhatsApp',
    mensagem: 'Olá! Vim pelo site da Adverts e quero conversar sobre a minha revenda.',
  },
  cta_404: {
    texto: 'Falar no WhatsApp',
    mensagem: 'Olá! Vim pelo site da Adverts e quero conversar sobre a minha revenda.',
  },
  cta_rodape: {
    texto: 'WhatsApp (19) 97103-0904',
    mensagem: 'Olá! Vim pelo site da Adverts.',
  },
} as const;

export type CtaId = keyof typeof ctas;
