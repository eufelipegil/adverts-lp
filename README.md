# Landing page Adverts

Landing page única da Adverts Agência de Marketing. Astro (estático) + CSS puro com tokens. Única conversão: clique no WhatsApp. Fundo azul marinho `#050B1A` (aprovado pelo cliente em 09/10/2026, no lugar do preto do manual).

- Copy: `docs/adverts-home-copy-implementacao.md`
- Design system: `docs/adverts-design-system.md`
- Brief técnico: `docs/adverts-brief-tecnico.md`

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Deploy

A publicação será na hospedagem do cliente (a verificar). Passos genéricos de site estático:

- Comando de build: `npm run build`
- Pasta de saída: `dist`
- Variáveis de ambiente (Settings > Environment variables), todas opcionais. Cada script só entra na página se a variável existir:

| Variável | Formato |
|---|---|
| `PUBLIC_GA4_ID` | `G-XXXXXXXXXX` |
| `PUBLIC_GADS_ID` | `AW-XXXXXXXXX` |
| `PUBLIC_GADS_CONV_LABEL` | label da conversão "Clique WhatsApp" |
| `PUBLIC_META_PIXEL_ID` | ID numérico do pixel |
| `PUBLIC_WIDZ_TRACK` | snippet HTML completo do Widz Track (fornecido pelo Felipe) |

Depois de alterar variáveis, é preciso gerar um novo deploy (elas entram no build).

## Onde mexer

| O quê | Arquivo |
|---|---|
| Domínio, contatos, meta, H1, redes, razão social, CNPJ | `src/data/site.ts` |
| Textos e mensagens dos CTAs de WhatsApp | `src/data/ctas.ts` |
| Faixa de credibilidade (selos) | `src/data/credibilidade.ts` |
| Dores | `src/data/dores.ts` |
| Serviços, etapas, FAQ | `src/data/servicos.ts`, `etapas.ts`, `faq.ts` |
| Sócios (sobrenome, texto, foto) | `src/data/socios.ts` |
| Cases e depoimentos | `src/data/cases.ts`, `depoimentos.ts` |
| Cores, fontes, raios, espaçamentos | `src/styles/tokens.css` |
| Vídeo da hero (fotos da equipe, fundo `#050B1A`). Original em `docs/adverts-video-hero.mp4`; o site usa a versão leve | `public/hero/hero.mp4` e `hero-poster.jpg` (reconverter com ffmpeg ao trocar) |
| Mosaico de projetos (12 fotos + 3 vídeos verticais) | `src/data/projetos.ts`, fotos em `src/assets/projetos/NN.jpg`, vídeos em `public/projetos/video-N.mp4` |
| Crédito "criado pela widz" (rodapé e `/bio`) | `src/components/WidzCredit.astro` |
| Logo (topo usa só o símbolo AD, rodapé usa o logo completo) | `src/components/Logo.astro` |
| Material da marca (manual, logos, paleta). Fica fora do build | `docs/marca/` |

Seções de cases e depoimentos só aparecem quando o array tiver itens. Card de sócio sem texto mostra só nome e função; sem foto, mostra as iniciais. O link do Facebook só aparece quando a URL existir.

## Pendências

**Do cliente** (documento de perguntas em `docs/perguntas-cliente-adverts.docx`)
- [ ] **Case de MRR**: prazo e segmento (`prazo` no topo de `src/components/CaseCard.astro`).
- [ ] **Outros cases**: `src/data/cases.ts` (a seção só aparece com itens).
- [ ] **Sócios**: textos de Guilherme e Matheus (`src/data/socios.ts`). Falta também a foto "-2" do Guilherme (as outras três já foram trocadas).
- [ ] **Selos e certificações**: o cliente tem certificados de mentorias; Google/Meta Partner em andamento.
- [ ] **FAQ, fidelidade**: aprovar a redação ("Sim, o contrato tem fidelidade de 3 meses...", `src/data/faq.ts`).
- [ ] **Dor 3**: se achar agressiva, usar `DOR_3_ALTERNATIVA` em `src/data/dores.ts`.
- [ ] **Política de privacidade**: revisar o texto, principalmente o prazo de 15 dias (`src/pages/politica-de-privacidade.astro`).
- [ ] **Google Meu Negócio**: pedir o link do perfil e vincular o site nele (o link atual do rodapé é de local).
- [ ] **Depoimentos**: serão em vídeo, gravados em sessão com clientes. `src/data/depoimentos.ts` hoje é só texto: adaptar a seção quando os vídeos chegarem.

**Nossas, por último (depois do site no ar)**
- [ ] **Hospedagem**: verificar a do cliente e publicar. Domínio: o cliente já tem; ajustar `SITE_URL` em `src/data/site.ts`.
- [ ] **Tracking**: GA4, Google Ads (ID + label), Meta Pixel e Widz Track nas variáveis de ambiente.
- [ ] **Desempenho**: medir Lighthouse mobile depois da publicação (hero em vídeo e mosaico).
- [ ] **SEO base**: sitemap, robots, llms.txt, meta e schema com o domínio final; Search Console.
- [ ] **Entrega**: backup no GitHub e documento de entrega.

**Resolvido**
- [x] Título (opção 1), sócios e fotos, razão social e CNPJ, URL do Facebook, identidade visual, FAQ (verba e cidade).
- [x] Fundo azul marinho aprovado; mensagem do WhatsApp única para o site e a `/bio`.
- [x] Hero em vídeo, mosaico de projetos, seção final redesenhada, crédito widz em todas as páginas.
- [x] Ideia de barra de parceiros (Kommo, Leaper...) segue como futura.
