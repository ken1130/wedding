import './guard.js';
import { PHOTOS, CASES } from './data.js';

const $ = (s, el = document) => el.querySelector(s);
const ROOT = document.body.dataset.root || '';
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const caseOfPhoto = Object.fromEntries(CASES.flatMap((c, i) => c.photos.map(p => [p, i])));

/* ---------- loader: dot-matrix percentage (home page, first visit per session) ---------- */
const GLYPHS = {
  '0': ['01110','10001','10011','10101','11001','10001','01110'],
  '1': ['00100','01100','00100','00100','00100','00100','01110'],
  '2': ['01110','10001','00001','00010','00100','01000','11111'],
  '3': ['11110','00001','00001','01110','00001','00001','11110'],
  '4': ['00010','00110','01010','10010','11111','00010','00010'],
  '5': ['11111','10000','11110','00001','00001','10001','01110'],
  '6': ['00110','01000','10000','11110','10001','10001','01110'],
  '7': ['11111','00001','00010','00100','01000','01000','01000'],
  '8': ['01110','10001','10001','01110','10001','10001','01110'],
  '9': ['01110','10001','10001','01111','00001','00010','01100'],
  '%': ['11001','11010','00010','00100','01000','01011','10011'],
  ' ': ['00000','00000','00000','00000','00000','00000','00000']
};

const progress = { lib: 0, atlas: 0, done: false };
let onReady = null;
const loaderEl = $('#loader');
const useLoader = loaderEl && !document.documentElement.classList.contains('seen');

function runLoader() {
  const ld = $('#ld-num'), ctx = ld.getContext('2d');
  const draw = n => {
    const s = String(n).padStart(3, ' ') + '%';
    const W = ld.width, H = ld.height, cols = s.length * 6 - 1, cell = Math.min(W / cols, H / 7);
    const ox = (W - cols * cell) / 2, oy = (H - 7 * cell) / 2, r = cell * 0.36;
    ctx.clearRect(0, 0, W, H);
    for (let g = 0; g < s.length; g++) for (let y = 0; y < 7; y++) for (let x = 0; x < 5; x++) {
      ctx.fillStyle = GLYPHS[s[g]][y][x] === '1' ? '#f3f1ee' : 'rgba(243,241,238,.07)';
      ctx.beginPath();
      ctx.arc(ox + (g * 6 + x + .5) * cell, oy + (y + .5) * cell, r, 0, 7);
      ctx.fill();
    }
  };
  let shown = 0, last = -1;
  const t0 = performance.now();
  const tick = now => {
    // Creep while the library downloads (no byte progress), then follow real atlas bytes.
    const creep = Math.min(0.35, (now - t0) / 4000);
    const target = progress.done ? 1 : Math.min(0.97, Math.max(creep, progress.lib * 0.35 + progress.atlas * 0.6));
    shown += (target - shown) * (progress.done ? 0.22 : 0.08);
    if (progress.done && shown > 0.995) shown = 1;
    const pct = Math.floor(shown * 100);
    if (pct !== last) { draw(pct); last = pct; }
    if (shown < 1) return requestAnimationFrame(tick);
    loaderEl.classList.add('out');
    document.body.classList.remove('loading');
    try { sessionStorage.setItem('intime-seen', '1'); } catch (e) {}
    onReady && onReady();
    onReady = null;
  };
  draw(0);
  requestAnimationFrame(tick);
  // Never hold the page hostage.
  setTimeout(() => { progress.done = true; }, 6000);
}
if (useLoader) runLoader();
else if (loaderEl) { loaderEl.remove(); document.body.classList.remove('loading'); }

/* ---------- three.js photo wall ---------- */
const canvas = $('#wall');
if (canvas) {
  const hero = canvas.closest('.hero');
  const fallback = () => {
    document.documentElement.classList.add('no-gl');
    const f = document.createElement('div');
    f.className = 'fallback';
    f.innerHTML = PHOTOS.slice(0, 18).map(p => `<img src="${ROOT}assets/v2/${p}-t.webp" alt="" decoding="async">`).join('');
    hero.prepend(f);
    progress.done = true;
  };
  const loadAtlas = async () => {
    const res = await fetch(ROOT + 'assets/v2/atlas.webp');
    const total = +res.headers.get('content-length') || 400000;
    let blob;
    if (res.body && res.body.getReader) {
      const reader = res.body.getReader(), chunks = [];
      let got = 0;
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value); got += value.length;
        progress.atlas = Math.min(1, got / total);
      }
      blob = new Blob(chunks, { type: 'image/webp' });
    } else blob = await res.blob();
    progress.atlas = 1;
    const img = new Image();
    img.src = URL.createObjectURL(blob);
    await img.decode();
    return img;
  };
  (async () => {
    try {
      const atlasP = loadAtlas();
      const { createWall } = await import('./wall.js');
      progress.lib = 1;
      const atlas = await atlasP;
      const wall = createWall({
        canvas, hero, atlas, photos: PHOTOS, caseOfPhoto, cases: CASES, reduced,
        onPick: i => { location.href = `${ROOT}works/${CASES[i].id}.html`; }
      });
      if (!wall) return fallback();
      progress.done = true;
      if (useLoader && !loaderEl.classList.contains('out')) onReady = () => wall.intro();
      else wall.intro();
    } catch (e) {
      console.error(e);
      fallback();
    }
  })();
}

/* ---------- works filter ---------- */
const filters = $('#filters');
if (filters) {
  const set = f => {
    filters.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.f === f));
    document.querySelectorAll('#works-list .work').forEach(w => { w.hidden = f !== 'all' && w.dataset.svc !== f; });
  };
  filters.addEventListener('click', e => { const b = e.target.closest('[data-f]'); if (b) set(b.dataset.f); });
}

/* ---------- photo lightbox (case pages) ---------- */
const zoom = $('#zoom');
const shots = [...document.querySelectorAll('[data-zoom]')];
let zi = -1;
const showZoom = i => {
  zi = (i + shots.length) % shots.length;
  $('img', zoom).src = shots[zi].dataset.zoom;
  zoom.classList.add('open');
};
const closeZoom = () => { zoom.classList.remove('open'); zi = -1; };
document.addEventListener('click', e => {
  const s = e.target.closest('[data-zoom]');
  if (s) showZoom(shots.indexOf(s));
});
zoom.addEventListener('click', e => {
  if (e.target.closest('[data-prev]')) return showZoom(zi - 1);
  if (e.target.closest('[data-next]')) return showZoom(zi + 1);
  closeZoom();
});
zoom.classList.toggle('single', shots.length < 2);
addEventListener('keydown', e => {
  if (zi >= 0) {
    if (e.key === 'Escape') closeZoom();
    else if (e.key === 'ArrowLeft') showZoom(zi - 1);
    else if (e.key === 'ArrowRight') showZoom(zi + 1);
  } else if (e.key === 'Escape') setMenu(false);
});

/* ---------- mobile menu ---------- */
const burger = $('.burger');
const setMenu = open => {
  document.body.classList.toggle('menu-open', open);
  burger.setAttribute('aria-expanded', open);
};
burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
$('#menu').addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

/* ---------- inquiry form: compose a message, copy it, open LINE / IG ---------- */
const ask = $('#ask');
if (ask) {
  ask.addEventListener('submit', async e => {
    e.preventDefault();
    const f = ask.elements, to = e.submitter && e.submitter.dataset.to;
    const svc = [...ask.querySelectorAll('[name=svc]:checked')].map(x => x.value).join('、') || '未選擇';
    const msg = [
      '您好，想詢問檔期與報價：',
      `・日期：${f.date.value}`,
      `・類型：${f.type.value}`,
      `・場地：${f.venue.value}`,
      f.guests.value && `・人數：約 ${f.guests.value} 位`,
      `・服務：${svc}`,
      f.name.value && `・稱呼：${f.name.value}`,
      f.note.value && `・備註：${f.note.value}`
    ].filter(Boolean).join('\n');
    let copied = false;
    try { await navigator.clipboard.writeText(msg); copied = true; } catch (err) {}
    $('.ask-msg', ask).textContent = copied ? '已複製詢問內容，貼上送出即可。' : '請手動複製：\n' + msg;
    const line = $('.nav .pill.line');
    const url = to === 'ig' ? 'https://ig.me/m/intime.photo_' : line && line.href;
    if (url && !url.includes('contact.html')) window.open(url, '_blank', 'noopener');
  });
}

/* ---------- reveal on scroll ---------- */
if (!reduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 3) * 70 + 'ms'; io.observe(el); });
} else document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
