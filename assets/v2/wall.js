import * as THREE from './three.module.min.js';

// Infinite, draggable photo wall. Every tile is one instance of a single
// plane; its position wraps inside the vertex shader, so the CPU only feeds
// a few uniforms per frame and the whole wall is one draw call.

const VERT = /* glsl */`
  attribute vec2 aCell;
  attribute float aIdx;
  attribute float aRand;
  attribute float aHover;
  uniform vec2 uOff;
  uniform vec2 uPeriod;
  uniform vec2 uView;
  uniform float uPitch;
  uniform float uTile;
  uniform float uScale;
  uniform float uBend;
  uniform float uIntro;
  varying vec2 vUv;
  varying float vIdx;
  varying float vHover;
  varying float vShade;

  void main() {
    vec2 c = aCell * uPitch + uOff;
    c = mod(c + uPeriod * 0.5, uPeriod) - uPeriod * 0.5;

    // Intro: tiles flip up from below, rippling out from the centre.
    float d = length(c / uView);
    float t = clamp((uIntro - d * 0.9 - aRand * 0.25) / 0.7, 0.0, 1.0);
    t = 1.0 - pow(1.0 - t, 3.0);
    float ang = (1.0 - t) * 1.35;

    vec3 p = vec3(position.xy * uTile * (1.0 + 0.04 * aHover), 0.0);
    p = vec3(p.x, p.y * cos(ang), p.y * sin(ang) - (1.0 - t) * 260.0);
    p.xy += c;
    p.xy *= uScale;

    // Lens bend while dragging: the edges fall away from the camera.
    vec2 q = p.xy / uView;
    p.z -= dot(q, q) * uBend;

    vUv = uv;
    vIdx = aIdx;
    vHover = aHover;
    vShade = t * (1.0 - smoothstep(0.35, 0.95, length(q)) * 0.55);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const FRAG = /* glsl */`
  uniform sampler2D uAtlas;
  uniform float uRadius;
  uniform float uAny;
  varying vec2 vUv;
  varying float vIdx;
  varying float vHover;
  varying float vShade;

  float sdRound(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }

  void main() {
    vec2 p = vUv - 0.5;
    float d = sdRound(p, vec2(0.5), uRadius);
    float aa = fwidth(d);
    float a = 1.0 - smoothstep(-aa, aa, d);

    // Gentle zoom inside the frame on hover.
    vec2 uv = (vUv - 0.5) * (1.0 - 0.07 * vHover) + 0.5;
    uv = uv * 0.985 + 0.0075;
    // Varyings arrive as e.g. 29.9999; snap before deriving the atlas cell.
    float id = floor(vIdx + 0.5);
    float col = mod(id, 6.0), row = floor(id / 6.0);
    vec2 auv = vec2((col + uv.x) / 6.0, 1.0 - (row + 1.0 - uv.y) / 6.0);
    vec3 c = texture2D(uAtlas, auv).rgb;

    // When something is hovered, everything else steps back.
    float dim = mix(1.0, 0.55, uAny * (1.0 - vHover));
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(c, vec3(l), 0.35 * uAny * (1.0 - vHover));
    c *= dim * vShade;
    gl_FragColor = vec4(c, a);
  }
`;

export function createWall({ canvas, hero, atlas, photos, caseOfPhoto, cases, onPick, reduced }) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance' });
  } catch (e) {
    return null;
  }
  const coarse = matchMedia('(pointer: coarse)').matches;
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, coarse ? 1.75 : 2));
  renderer.setClearColor(0x131313, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 10, 20000);
  const tex = new THREE.Texture(atlas);
  tex.anisotropy = 1;
  tex.needsUpdate = true;

  const uniforms = {
    uAtlas: { value: tex },
    uOff: { value: new THREE.Vector2() },
    uPeriod: { value: new THREE.Vector2() },
    uView: { value: new THREE.Vector2() },
    uPitch: { value: 1 },
    uTile: { value: 1 },
    uScale: { value: 1 },
    uBend: { value: 0 },
    uIntro: { value: reduced ? 9 : 0 },
    uRadius: { value: 0.06 },
    uAny: { value: 0 }
  };
  const material = new THREE.ShaderMaterial({
    uniforms, vertexShader: VERT, fragmentShader: FRAG,
    transparent: true, depthTest: false, depthWrite: false
  });

  let mesh = null, cols = 0, rows = 0, W = 0, H = 0, tile = 0, pitch = 0;
  let cells = [], idx = [], hoverAttr = null, hoverVal = null;

  // Assign photos so no tile matches the one left of or above it (wrap included).
  function layout() {
    const n = cols * rows, bag = [];
    idx = new Array(n);
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      const avoid = new Set([
        c > 0 ? idx[i - 1] : -1, r > 0 ? idx[i - cols] : -1,
        c === cols - 1 ? idx[r * cols] : -1, r === rows - 1 ? idx[c] : -1
      ]);
      if (!bag.length) bag.push(...shuffle([...photos.keys()]));
      let k = bag.findIndex(v => !avoid.has(v));
      if (k < 0) k = 0;
      idx[i] = bag.splice(k, 1)[0];
    }
  }

  function build() {
    const r = hero.getBoundingClientRect();
    W = canvas.clientWidth; H = canvas.clientHeight;
    if (!W || !H) return;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    camera.position.z = (H / 2) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    camera.updateProjectionMatrix();

    tile = W < 640 ? W / 2.25 : W < 900 ? W / 3.3 : Math.min(320, Math.max(200, W / 5.3));
    const gap = Math.max(6, Math.round(tile * 0.028));
    pitch = tile + gap;
    const nc = Math.ceil(W / pitch) + 3, nr = Math.ceil(H / pitch) + 3;
    uniforms.uView.value.set(W / 2, H / 2);
    uniforms.uPitch.value = pitch;
    uniforms.uTile.value = tile;
    uniforms.uRadius.value = Math.min(0.5, (W < 900 ? 14 : 18) / tile);
    if (nc === cols && nr === rows && mesh) return;

    cols = nc; rows = nr;
    uniforms.uPeriod.value.set(cols * pitch, rows * pitch);
    layout();
    if (mesh) { scene.remove(mesh); mesh.geometry.dispose(); }

    const n = cols * rows;
    const g = new THREE.InstancedBufferGeometry();
    const base = new THREE.PlaneGeometry(1, 1);
    g.index = base.index;
    g.setAttribute('position', base.getAttribute('position'));
    g.setAttribute('uv', base.getAttribute('uv'));
    const aCell = new Float32Array(n * 2), aIdx = new Float32Array(n), aRand = new Float32Array(n);
    cells = [];
    for (let r2 = 0; r2 < rows; r2++) for (let c = 0; c < cols; c++) {
      const i = r2 * cols + c;
      // Centre the grid on the origin; rows grow downward on screen.
      const cx = c - (cols - 1) / 2, cy = -(r2 - (rows - 1) / 2);
      aCell[i * 2] = cx; aCell[i * 2 + 1] = cy;
      cells.push([cx, cy]);
      aIdx[i] = idx[i];
      aRand[i] = Math.random();
    }
    hoverVal = new Float32Array(n);
    hoverAttr = new THREE.InstancedBufferAttribute(hoverVal, 1);
    hoverAttr.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('aCell', new THREE.InstancedBufferAttribute(aCell, 2));
    g.setAttribute('aIdx', new THREE.InstancedBufferAttribute(aIdx, 1));
    g.setAttribute('aRand', new THREE.InstancedBufferAttribute(aRand, 1));
    g.setAttribute('aHover', hoverAttr);
    g.instanceCount = n;
    mesh = new THREE.Mesh(g, material);
    mesh.frustumCulled = false;
    scene.add(mesh);
    hovered = -1;
  }

  // Same wrap the shader does, for picking.
  const wrap = (v, p) => ((v + p / 2) % p + p) % p - p / 2;
  function pick(px, py) {
    const s = uniforms.uScale.value;
    const wx = (px - W / 2) / s, wy = (H / 2 - py) / s;
    const P = uniforms.uPeriod.value, o = uniforms.uOff.value;
    for (let i = 0; i < cells.length; i++) {
      const cx = wrap(cells[i][0] * pitch + o.x, P.x), cy = wrap(cells[i][1] * pitch + o.y, P.y);
      if (Math.abs(wx - cx) < tile / 2 && Math.abs(wy - cy) < tile / 2) return i;
    }
    return -1;
  }

  /* ---------- interaction ---------- */
  const off = new THREE.Vector2(), target = new THREE.Vector2();
  let dragging = false, moved = 0, last = null, vel = new THREE.Vector2(), hovered = -1, pointer = null;
  let scrollBase = scrollY;
  const tip = document.createElement('div');
  tip.className = 'tip';
  document.body.appendChild(tip);

  canvas.addEventListener('pointerdown', e => {
    dragging = true; moved = 0;
    last = { x: e.clientX, y: e.clientY, t: performance.now() };
    vel.set(0, 0);
    if (e.pointerType === 'mouse') canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', e => {
    const rect = canvas.getBoundingClientRect();
    pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top, cx: e.clientX, cy: e.clientY, type: e.pointerType };
    if (!dragging) return;
    const dx = e.clientX - last.x, dy = e.clientY - last.y;
    moved += Math.abs(dx) + Math.abs(dy);
    if (moved > 6) canvas.classList.add('drag');
    const s = uniforms.uScale.value;
    target.x += dx / s; target.y -= dy / s;
    const dt = Math.max(1, performance.now() - last.t);
    vel.set(dx / dt * 16, -dy / dt * 16);
    last = { x: e.clientX, y: e.clientY, t: performance.now() };
  });
  const end = e => {
    if (!dragging) return;
    dragging = false;
    canvas.classList.remove('drag');
    if (e.type === 'pointerup' && moved < 8) {
      const rect = canvas.getBoundingClientRect();
      const i = pick(e.clientX - rect.left, e.clientY - rect.top);
      if (i >= 0) onPick(caseOfPhoto[photos[idx[i]]]);
      return;
    }
    // Throw: carry the release velocity forward.
    target.x += vel.x * 14; target.y += vel.y * 14;
  };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);
  canvas.addEventListener('pointerleave', () => { pointer = null; });

  /* ---------- loop ---------- */
  let running = false, visible = true, prev = performance.now(), introStart = -1;
  const drift = reduced ? 0 : 0.35;

  function frame(now) {
    if (!running) return;
    const dt = Math.min(50, now - prev) / 16.667;
    prev = now;

    if (!dragging && !reduced) { target.x -= drift * dt; target.y += drift * 0.45 * dt; }
    // Page scroll pushes the wall up a little faster than the page: parallax.
    const sy = (scrollY - scrollBase) * 0.35;
    const k = 1 - Math.pow(1 - 0.09, dt);
    const px = off.x, py = off.y;
    off.x += (target.x - off.x) * k;
    off.y += (target.y + sy - off.y) * k;
    uniforms.uOff.value.copy(off);

    const speed = Math.hypot(off.x - px, off.y - py) / dt;
    const m = Math.min(1, Math.max(0, speed - 1.2) / 30);
    uniforms.uScale.value += ((1 - 0.05 * m) - uniforms.uScale.value) * 0.12 * dt;
    uniforms.uBend.value += (m * 170 - uniforms.uBend.value) * 0.12 * dt;

    if (introStart >= 0) uniforms.uIntro.value = Math.min(9, (now - introStart) / 900);

    // Hover (mouse only, not mid-drag).
    let h = -1;
    if (pointer && pointer.type === 'mouse' && !dragging && uniforms.uIntro.value > 2) h = pick(pointer.x, pointer.y);
    if (h !== hovered) {
      hovered = h;
      canvas.classList.toggle('hov', h >= 0);
      if (h >= 0) {
        const c = cases[caseOfPhoto[photos[idx[h]]]];
        tip.innerHTML = `${c.couple}<small>${c.date} · ${c.svc}</small>`;
      }
      tip.classList.toggle('on', h >= 0);
    }
    if (h >= 0) tip.style.transform = `translate3d(${pointer.cx + 16}px, ${pointer.cy + 16}px, 0)`;
    let dirty = false;
    for (let i = 0; i < hoverVal.length; i++) {
      const goal = i === h ? 1 : 0, v = hoverVal[i];
      if (v !== goal) {
        hoverVal[i] = Math.abs(goal - v) < 0.01 ? goal : v + (goal - v) * 0.16 * dt;
        dirty = true;
      }
    }
    if (dirty) hoverAttr.needsUpdate = true;
    uniforms.uAny.value += ((h >= 0 ? 1 : 0) - uniforms.uAny.value) * 0.12 * dt;

    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }
  function setRunning(on) {
    if (on === running) return;
    running = on;
    if (on) { prev = performance.now(); requestAnimationFrame(frame); }
  }
  const sync = () => setRunning(visible && !document.hidden);
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync(); }).observe(hero);
  document.addEventListener('visibilitychange', sync);

  // Mobile browser bars change the height on scroll; only rebuild for real resizes.
  let lastW = innerWidth;
  addEventListener('resize', () => {
    if (innerWidth === lastW && Math.abs(canvas.clientHeight - H) < 120) return;
    lastW = innerWidth;
    build();
  });

  build();
  renderer.render(scene, camera);
  sync();

  return {
    intro() { if (introStart < 0) introStart = reduced ? -1 : performance.now(); }
  };
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
