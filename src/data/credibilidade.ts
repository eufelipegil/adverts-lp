// Faixa de credibilidade. `principal` aparece em --text, `resto` em --muted.
// [PROVISÓRIO] Se o cliente mandar selo (Google Partner, Meta Business Partner), ele substitui o terceiro item.

export const credibilidade = [
  { icone: 'calendar', principal: 'Mais de 3 anos', resto: 'no mercado' },
  { icone: 'code', principal: 'Sócios', resto: 'que vêm de tecnologia' },
  { icone: 'target', principal: 'Google Ads e Meta Ads', resto: '' },
  { icone: 'globe', principal: 'Atendimento online', resto: 'para todo o Brasil' },
] as const;
