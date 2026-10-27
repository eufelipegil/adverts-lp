// Worker mínimo na frente dos VÍDEOS do site (/hero, /projetos, /depoimento).
// Motivo: a hospedagem de arquivos estáticos da Cloudflare responde sempre 200 com o arquivo inteiro e sem
// "Accept-Ranges"; o Safari do iPhone exige respostas parciais (206) para tocar <video>.
// Todo o resto do site continua sendo servido direto dos arquivos estáticos, sem passar por aqui.
export default {
  async fetch(request, env) {
    const resposta = await env.ASSETS.fetch(request);
    const cab = new Headers(resposta.headers);
    cab.set('Accept-Ranges', 'bytes');

    const faixa = request.headers.get('Range');
    if (request.method !== 'GET' || !faixa || resposta.status !== 200) {
      return new Response(request.method === 'HEAD' ? null : resposta.body, { status: resposta.status, headers: cab });
    }

    const m = /^bytes=(\d*)-(\d*)$/.exec(faixa.trim());
    const total = Number(cab.get('Content-Length')) || undefined;
    const dados = await resposta.arrayBuffer();
    const tam = dados.byteLength;
    if (!m || (m[1] === '' && m[2] === '')) return new Response(dados, { status: 200, headers: cab });

    let inicio, fim;
    if (m[1] === '') { // "bytes=-500": últimos 500 bytes
      inicio = Math.max(0, tam - Number(m[2]));
      fim = tam - 1;
    } else {
      inicio = Number(m[1]);
      fim = m[2] === '' ? tam - 1 : Math.min(Number(m[2]), tam - 1);
    }
    if (inicio >= tam || inicio > fim) {
      cab.set('Content-Range', `bytes */${tam}`);
      return new Response(null, { status: 416, headers: cab });
    }

    cab.set('Content-Range', `bytes ${inicio}-${fim}/${tam}`);
    cab.set('Content-Length', String(fim - inicio + 1));
    cab.delete('Content-Encoding');
    return new Response(dados.slice(inicio, fim + 1), { status: 206, headers: cab });
  },
};
