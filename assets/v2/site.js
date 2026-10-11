// Atlas order: index k sits at column k % 6, row floor(k / 6) of atlas.webp.
export const PHOTOS = ['p0','p2','p3','p5','p6','p7','p8','p9','p10','p11','p13','p14','p17','p18','p19','p22','p33','p34','p40','p42','p44','p86','p87','p90','p93','p94','p95','p96','p97','p99','p100','p101','p102','p103','p104','p105'];

export const CASES = [
  { id: 'mia-leo', couple: 'Mia & Leo', venue: '陽明山・青青食尚花園', date: '2026.05.17', svc: '拍貼機', guests: '約 150 位',
    intro: '戶外午宴，拍貼機配上整箱花草道具。下午光線好，我們把背板換成半透明白紗，照片比預期更柔和。',
    photos: ['p3','p0','p13','p86','p100','p105'] },
  { id: 'amy-ken', couple: 'Amy & Ken', venue: '台北・晶華酒店', date: '2026.09.12', svc: '拍貼機', guests: '約 280 位',
    intro: '晚宴兩百八十位賓客，拍貼機放在迎賓區旁。相框用了喜帖上的鼠尾草綠和手寫字，整晚印了六百多張，留言本最後貼滿兩本。',
    photos: ['p11','p6','p2','p22','p95','p103'] },
  { id: 'yuting-hao', couple: '語婷 & 子豪', venue: '台中・林酒店', date: '2026.08.23', svc: '雙機', guests: '約 320 位',
    intro: '拍貼機與電話留影機並排擺放，賓客拍完照順手拿起話筒留一段祝福。婚後交付的祝福合輯，新人在回門宴上又放了一次。',
    photos: ['p18','p8','p17','p34','p96','p102'] },
  { id: 'joanne', couple: 'Joanne & 彥廷', venue: '新竹・煙波大飯店', date: '2026.07.05', svc: '電話留影機', guests: '約 120 位',
    intro: '草地證婚後的雞尾酒時段，電話留影機設在樹下。提示卡寫著「第一次見到新人是什麼時候」，長輩們說了好多新人沒聽過的故事。',
    photos: ['p10','p7','p14','p33','p94','p99'] },
  { id: 'pei-jun', couple: '佩儀 & 俊宏', venue: '台南・晶英酒店', date: '2026.04.11', svc: '電話留影機', guests: '約 260 位',
    intro: '新郎的國外同學無法到場，我們另外開了語音信箱號碼，讓海外朋友也把祝福留進同一份合輯。',
    photos: ['p19','p5','p40','p87','p93','p104'] },
  { id: 'ann-sam', couple: 'Ann & Sam', venue: '高雄・漢來大飯店', date: '2026.03.28', svc: '雙機', guests: '約 200 位',
    intro: '兩台機器各有一位駐場人員，送客時段把拍貼直接夾進喜糖袋，賓客離場時一人一份。',
    photos: ['p9','p42','p44','p90','p97','p101'] }
];

export const caseOfPhoto = Object.fromEntries(CASES.flatMap((c, i) => c.photos.map(p => [p, i])));

const $ = (s, el = document) => el.querySelector(s);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- loader: dot-matrix percentage ---------- */
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
const ld = $('#ld-num'), lctx = ld.getContext('2d');
function drawNum(n) {
  const s = (String(n).padStart(3, ' ') + '%');
  const W = ld.width, H = ld.height, cols = s.length * 6 - 1, cell = Math.min(W / cols, H / 7);
  lctx.clearRect(0, 0, W, H);
  const ox = (W - cols * cell) / 2, oy = (H - 7 * cell) / 2, r = cell * 0.36;
  for (let g = 0; g < s.length; g++) {
    const rows = GLYPHS[s[g]];
    for (let y = 0; y < 7; y++) for (let x = 0; x < 5; x++) {
      const on = rows[y][x] === '1';
      lctx.fillStyle = on ? '#f3f1ee' : 'rgba(243,241,238,.07)';
      lctx.beginPath();
      lctx.arc(ox + (g * 6 + x + .5) * cell, oy + (y + .5) * cell, r, 0, 7);
      lctx.fill();
    }
  }
}

const progress = { lib: 0, atlas: 0, done: false };
let shown = 0, lastDrawn = -1, loaderGone = false, onLoaderGone;
const t0 = performance.now();
function loaderTick(now) {
  // Creep forward while the library downloads (it has no byte progress), then follow real atlas bytes.
  const creep = Math.min(0.35, (now - t0) / 4000);
  const target = progress.done ? 1 : Math.min(0.97, Math.max(creep, progress.lib * 0.35 + progress.atlas * 0.6));
  shown += (target - shown) * (progress.done ? 0.22 : 0.08);
  if (progress.done && shown > 0.995) shown = 1;
  const pct = Math.floor(shown * 100);
  if (pct !== lastDrawn) { drawNum(pct); lastDrawn = pct; }
  if (shown >= 1) return hideLoader();
  requestAnimationFrame(loaderTick);
}
function hideLoader() {
  if (loaderGone) return;
  loaderGone = true;
  $('#loader').classList.add('out');
  document.body.classList.remove('loading');
  onLoaderGone && onLoaderGone();
}
drawNum(0);
requestAnimationFrame(loaderTick);
// Never hold the page hostage: show it after 6s even if the wall isn't ready.
setTimeout(() => { progress.done = true; }, 6000);

/* ---------- wall ---------- */
const hero = $('.hero'), canvas = $('#wall');
function fallback() {
  document.documentElement.classList.add('no-gl');
  const f = document.createElement('div');
  f.className = 'fallback';
  f.innerHTML = PHOTOS.slice(0, 18).map(p => `<img src="assets/v2/${p}-t.webp" alt="" decoding="async">`).join('');
  hero.prepend(f);
  progress.done = true;
}

async function loadAtlas() {
  const res = await fetch('assets/v2/atlas.webp');
  const total = +res.headers.get('content-length') || 400000;
  const reader = res.body && res.body.getReader();
  let blob;
  if (reader) {
    const chunks = []; let got = 0;
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
}

(async () => {
  try {
    const atlasP = loadAtlas();
    const { createWall } = await import('./wall.js');
    progress.lib = 1;
    const img = await atlasP;
    const wall = createWall({ canvas, hero, atlas: img, photos: PHOTOS, caseOfPhoto, cases: CASES, onPick: openCase, reduced });
    if (!wall) return fallback();
    progress.done = true;
    if (loaderGone) wall.intro(); else onLoaderGone = () => wall.intro();
  } catch (e) {
    console.error(e);
    fallback();
  }
})();

/* ---------- works grid ---------- */
$('#works-grid').innerHTML = CASES.map((c, i) => `
  <button class="work rv" type="button" data-case="${i}">
    <img src="assets/photos/${c.photos[0]}.webp" alt="${c.couple} 婚禮" loading="lazy" decoding="async">
    <span class="work-cap"><span><h3>${c.couple}</h3><p>${c.date} · ${c.venue}</p></span><span class="tag${c.svc === '雙機' ? '' : ' dark'}">${c.svc}</span></span>
  </button>`).join('');
$('#works-grid').addEventListener('click', e => {
  const b = e.target.closest('[data-case]');
  if (b) openCase(+b.dataset.case);
});

/* ---------- case modal ---------- */
const modal = $('#case'), zoom = $('#zoom');
let cur = -1, lastFocus = null;
function openCase(i) {
  const c = CASES[i];
  if (!c) return;
  if (cur < 0) lastFocus = document.activeElement;
  cur = i;
  $('#case-title', modal).textContent = c.couple;
  $('.case-intro', modal).textContent = c.intro;
  $('.meta', modal).innerHTML = [['日期', c.date], ['場地', c.venue], ['服務', c.svc], ['賓客', c.guests]]
    .map(([k, v]) => `<div><b>${k}</b>${v}</div>`).join('');
  $('.gal', modal).innerHTML = c.photos.map((p, j) =>
    `<button type="button" data-src="assets/photos/${p}.webp" aria-label="放大第 ${j + 1} 張"><img src="assets/photos/${p}.webp" alt="" decoding="async"></button>`).join('');
  $('[data-next]', modal).textContent = CASES[(i + 1) % CASES.length].couple + ' →';
  modal.scrollTop = 0;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  $('.x', modal).focus({ preventScroll: true });
}
function closeCase() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
  cur = -1;
  lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
}
modal.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) return closeCase();
  if (e.target.closest('[data-next]')) return openCase((cur + 1) % CASES.length);
  const g = e.target.closest('[data-src]');
  if (g) { $('img', zoom).src = g.dataset.src; zoom.classList.add('open'); }
});
zoom.addEventListener('click', () => zoom.classList.remove('open'));
addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (zoom.classList.contains('open')) zoom.classList.remove('open');
  else if (cur >= 0) closeCase();
  else document.body.classList.remove('menu-open');
});

/* ---------- mobile menu ---------- */
const burger = $('.burger');
burger.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  burger.setAttribute('aria-expanded', open);
});
$('#menu').addEventListener('click', e => {
  if (e.target.closest('a')) { document.body.classList.remove('menu-open'); burger.setAttribute('aria-expanded', false); }
});

/* ---------- reveal on scroll ---------- */
if (!reduced && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.rv').forEach((el, i) => { el.style.transitionDelay = (i % 3) * 70 + 'ms'; io.observe(el); });
} else document.querySelectorAll('.rv').forEach(el => el.classList.add('in'));
