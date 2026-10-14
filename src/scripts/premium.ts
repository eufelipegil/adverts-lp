// Camada premium: rolagem suave (Lenis) e movimentos ligados à rolagem (GSAP ScrollTrigger).
// Tudo aqui é enfeite: sem JS ou com "reduzir movimento", a página fica completa e parada.
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const raiz = document.documentElement;
const reduz = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mouseFino = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => [...el.querySelectorAll<T>(s)];

/* ---------- barra de progresso (sempre: não é movimento, é posição) ---------- */
const barra = document.createElement('div');
barra.className = 'progresso';
barra.setAttribute('aria-hidden', 'true');
document.body.append(barra);
const progresso = () => {
  const max = raiz.scrollHeight - innerHeight;
  barra.style.scale = `${max > 0 ? Math.min(1, scrollY / max) : 0} 1`;
};
addEventListener('scroll', progresso, { passive: true });
progresso();

/* ---------- brilho que segue o cursor nos cards ---------- */
if (mouseFino) {
  for (const card of $$('.spot')) {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  }
}

if (!reduz) {
  /* ---------- rolagem suave ---------- */
  const header = document.querySelector<HTMLElement>('[data-header]')?.offsetHeight || 72; // já inclui a área do notch
  const lenis = new Lenis({ lerp: 0.09, anchors: { offset: -(header + 16) } });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  // menu do celular aberto: a página para
  new MutationObserver(() => (raiz.classList.contains('menu-aberto') ? lenis.stop() : lenis.start())).observe(raiz, {
    attributes: true,
    attributeFilter: ['class'],
  });

  const mm = gsap.matchMedia();

  /* ---------- hero: o vídeo aproxima e o texto sobe e se apaga ao sair ---------- */
  const hero = $('.hero');
  if (hero) {
    const tl = gsap.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    tl.to($('.hero__midia video', hero), { scale: 1.14, yPercent: 6, ease: 'none' }, 0)
      .to($('.hero__texto', hero), { yPercent: -14, opacity: 0, ease: 'none' }, 0);
  }

  /* ---------- faixa gigante: corre sozinha e acelera/inverte com a rolagem ---------- */
  const faixa = $('[data-faixa]');
  const trilho = faixa && $('[data-faixa-trilho]', faixa);
  if (faixa && trilho) {
    faixa.classList.add('faixa--js');
    const loop = gsap.to(trilho, { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
    const inclina = gsap.quickTo(trilho, 'skewX', { duration: 0.5, ease: 'power3.out' });
    let sentido = 1;
    let solta: number | undefined;
    ScrollTrigger.create({
      trigger: faixa,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (st) => {
        const v = st.getVelocity();
        if (v) sentido = v < 0 ? -1 : 1;
        loop.timeScale(sentido * Math.min(1 + Math.abs(v) / 250, 7));
        inclina(gsap.utils.clamp(-9, 9, -v / 200));
        clearTimeout(solta);
        solta = window.setTimeout(() => inclina(0), 120);
      },
    });
    // sem rolagem, volta devagar à velocidade de cruzeiro (no último sentido)
    gsap.ticker.add(() => {
      const t = loop.timeScale();
      loop.timeScale(t + (sentido - t) * 0.05);
    });
  }

  /* ---------- frase final das Dores: as palavras acendem conforme a rolagem ---------- */
  for (const el of $$('[data-fill]')) {
    const palavras = (el.textContent || '').trim().split(/\s+/);
    el.innerHTML = palavras.map((p) => `<span class="fill-w">${p}</span>`).join(' ');
    gsap.fromTo(
      $$('.fill-w', el),
      { opacity: 0.16 },
      { opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 88%', end: 'bottom 50%', scrub: true } },
    );
  }

  /* ---------- como funciona: esteira horizontal travada na tela (desktop com altura) ---------- */
  const como = $('#como-funciona');
  const pin = como && $('[data-como-pin]', como);
  const esteira = como && $('[data-como-trilho]', como);
  const barraComo = como && $('[data-como-barra]', como);
  if (como && pin && esteira) {
    mm.add('(min-width: 1024px) and (min-height: 700px)', () => {
      como.classList.add('como--h');
      const distancia = () => Math.max(0, esteira.scrollWidth - pin.clientWidth + parseFloat(getComputedStyle(pin).paddingLeft) * 2);
      const tween = gsap.to(esteira, {
        x: () => -distancia(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'center center',
          end: () => `+=${distancia()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (st) => barraComo && (barraComo.style.scale = `${st.progress} 1`),
        },
      });
      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(esteira, { clearProps: 'transform' });
        como.classList.remove('como--h');
      };
    });
  }

  /* ---------- mosaico: cada foto desliza dentro da moldura (paralaxe) ---------- */
  mm.add('(min-width: 768px)', () => {
    for (const tile of $$('[data-parallax]')) {
      const midia = $('img, video', tile);
      if (!midia) continue;
      gsap.fromTo(
        midia,
        { yPercent: -7, scale: 1.16 },
        { yPercent: 7, scale: 1.16, ease: 'none', scrollTrigger: { trigger: tile, start: 'top bottom', end: 'bottom top', scrub: true } },
      );
    }
  });

  /* ---------- cta final: a prévia do WhatsApp flutua mais devagar que a página ---------- */
  const chat = $('.final .chat-palco');
  if (chat) {
    gsap.fromTo(chat, { yPercent: 14 }, {
      yPercent: -8, ease: 'none',
      scrollTrigger: { trigger: chat, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  }

  /* ---------- botões magnéticos (só com mouse) ---------- */
  if (mouseFino) {
    for (const btn of $$('.btn')) {
      const x = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3.out' });
      const y = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3.out' });
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        x((e.clientX - r.left - r.width / 2) * 0.22);
        y((e.clientY - r.top - r.height / 2) * 0.35);
      });
      btn.addEventListener('pointerleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, .4)' });
      });
    }
  }

  // fontes e imagens mudam alturas depois do carregamento
  addEventListener('load', () => ScrollTrigger.refresh());
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}
