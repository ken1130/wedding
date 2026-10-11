"""Build the static site from src/.

    python3 tools/build.py

Reads src/layout.html, src/pages/*.html, src/case.html and src/data.json,
writes the pages to the repo root (case pages to works/), writes
assets/v2/data.js, and refreshes the Noto Sans TC subset when the page
text uses new characters.

Page files start with a JSON header comment, e.g.
    <!--{"title": "拍貼機", "desc": "...", "nav": "booth"}-->
Optional header keys: "wall" (load the three.js photo wall), "loader"
(show the dot-matrix loader), "nocta" (drop the shared contact block),
"bodyclass", "fulltitle" (use title as-is).

Macros usable in pages and the case template:
    {{root}} {{line}} {{line_target}} {{ig}} {{icon:line}} {{icon:ig}}
    {{cards:featured}} {{cards:all}} {{cards:svc=拍貼機}}
"""
import html, json, os, re, sys, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src')
V2 = os.path.join(ROOT, 'assets', 'v2')

ICONS = {
    'ig': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
    'line': '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.4.1.8.3.9.6.1.3 0 .7 0 1l-.1.9c0 .3-.2 1 .9.5s5.9-3.5 8-6C21.3 14.4 22 12.8 22 11c0-4.4-4.5-8-10-8z"/></svg>',
}

esc = html.escape


def load(p):
    return open(p, encoding='utf-8').read()


def save(p, s):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8', newline='\n') as f:
        f.write(s)


def split_header(s, name):
    m = re.match(r'\s*<!--(\{.*?\})-->\s*', s, re.S)
    if not m:
        sys.exit(f'{name}: missing <!--{{json}}--> header')
    return json.loads(m.group(1)), s[m.end():]


def card(c, root):
    tag = '' if c['svc'] == '雙機' else ' dark'
    return (f'<a class="work rv" href="{root}works/{c["id"]}.html" data-svc="{esc(c["svc"])}">'
            f'<img src="{root}assets/photos/{c["photos"][0]}.webp" alt="{esc(c["couple"])} 婚禮" loading="lazy" decoding="async">'
            f'<span class="work-cap"><span><h3>{esc(c["couple"])}</h3><p>{c["date"]} · {esc(c["venue"])}</p></span>'
            f'<span class="tag{tag}">{esc(c["svc"])}</span></span></a>')


def cards(spec, data, root):
    cs = data['cases']
    if spec == 'featured':
        cs = [c for c in cs if c.get('featured')]
    elif spec.startswith('svc='):
        want = spec[4:]
        cs = [c for c in cs if c['svc'] in (want, '雙機')]
    elif spec != 'all':
        sys.exit(f'unknown cards spec: {spec}')
    return '\n'.join(card(c, root) for c in cs)


def macros(s, data, root):
    contact = data['contact']
    if contact.get('line_id'):
        line = 'https://line.me/R/ti/p/' + urllib.parse.quote(contact['line_id'])
        target = ' target="_blank" rel="noopener"'
    else:
        line, target = root + 'contact.html#line', ''
    s = re.sub(r'\{\{cards:([^}]+)\}\}', lambda m: cards(m.group(1), data, root), s)
    s = re.sub(r'\{\{icon:(\w+)\}\}', lambda m: ICONS[m.group(1)], s)
    return (s.replace('{{line}}', line).replace('{{line_target}}', target)
             .replace('{{ig}}', f'https://www.instagram.com/{contact["ig"]}/')
             .replace('{{root}}', root))


def render(layout, data, meta, body, root, page):
    head = ''
    if meta.get('wall'):
        head = (f'<link rel="modulepreload" href="{root}assets/v2/three.module.min.js">\n'
                f'<link rel="preload" href="{root}assets/v2/atlas.webp" as="fetch" crossorigin>\n')
    contact = data['contact']
    url = contact['site_url'] + ('' if page == 'index' else (('works/' if root else '') + page + '.html'))
    head += f'<link rel="canonical" href="{url}">\n<meta property="og:url" content="{url}">\n'
    head += f'<meta property="og:image" content="{contact["site_url"]}assets/photos/{meta.get("image", "p22")}.webp">\n'
    if contact.get('ga_id'):
        g = contact['ga_id']
        head += (f'<script async src="https://www.googletagmanager.com/gtag/js?id={g}"></script>\n'
                 f"<script>window.dataLayer=window.dataLayer||[];function gtag(){{dataLayer.push(arguments)}}gtag('js',new Date());gtag('config','{g}');</script>\n")
    if page == 'index':
        ld = {'@context': 'https://schema.org', '@type': 'LocalBusiness', 'name': '映時 INTIME',
              'description': meta['desc'], 'url': contact['site_url'],
              'image': contact['site_url'] + 'assets/photos/p22.webp',
              'areaServed': ['北部', '中部', '南部', 'Taiwan'],
              'sameAs': [f'https://www.instagram.com/{contact["ig"]}/']}
        head += '<script type="application/ld+json">' + json.dumps(ld, ensure_ascii=False) + '</script>\n'
    loader = ''
    if meta.get('loader'):
        loader = ('<div id="loader" aria-hidden="true"><canvas id="ld-num" width="336" height="96"></canvas>'
                  '<div class="ld-cap">INTIME · WEDDING PHOTO BOOTH</div></div>')
    out = layout
    if meta.get('nocta'):
        out = re.sub(r'<!--cta-->.*?<!--/cta-->', '', out, flags=re.S)
    out = out.replace('<!--cta-->', '').replace('<!--/cta-->', '')
    title = meta['title'] if meta.get('fulltitle') else f'{meta["title"]}｜映時 INTIME'
    nav = meta.get('nav', '')
    out = re.sub(r'\{\{nav:(\w+)\}\}', lambda m: ' class="on" aria-current="page"' if m.group(1) == nav else '', out)
    cls = ' '.join(x for x in [meta.get('bodyclass', ''), 'loading' if meta.get('loader') else ''] if x)
    out = (out.replace('{{title}}', esc(title)).replace('{{desc}}', esc(meta['desc']))
              .replace('{{head}}', head).replace('{{loader}}', loader)
              .replace('{{bodyclass}}', cls).replace('{{page}}', page)
              .replace('{{body}}', body.strip()))
    return macros(out, data, root)


def case_page(tpl, data, i):
    cs = data['cases']
    c, prev, nxt = cs[i], cs[i - 1], cs[(i + 1) % len(cs)]
    gallery = '\n'.join(
        f'<button type="button" data-zoom="{{{{root}}}}assets/photos/{p}.webp" aria-label="放大第 {j + 1} 張">'
        f'<img src="{{{{root}}}}assets/photos/{p}.webp" alt="{esc(c["couple"])} 婚禮照片 {j + 1}" decoding="async"{" loading=\"lazy\"" if j > 2 else ""}></button>'
        for j, p in enumerate(c['photos']))
    svc_link = {'拍貼機': 'booth.html', '電話留影機': 'phone.html'}.get(c['svc'], 'plans.html')
    rep = {
        'couple': esc(c['couple']), 'venue': esc(c['venue']), 'date': c['date'], 'svc': esc(c['svc']),
        'style': esc(c['style']), 'guests': esc(c['guests']), 'intro': esc(c['intro']), 'city': esc(c['city']),
        'story': '\n'.join(f'<p>{esc(p)}</p>' for p in c['story']),
        'gallery': gallery, 'svc_link': svc_link,
        'prev_id': prev['id'], 'prev_couple': esc(prev['couple']),
        'next_id': nxt['id'], 'next_couple': esc(nxt['couple']),
        'cover': c['photos'][0],
    }
    meta, body = split_header(tpl, 'case.html')
    for k, v in rep.items():
        body = body.replace('{{%s}}' % k, v)
    meta = {k: (v.replace('{{couple}}', c['couple']).replace('{{intro}}', c['intro']) if isinstance(v, str) else v)
            for k, v in meta.items()}
    return meta, body


FONTS = [  # (Google Fonts family spec, local file stem, which text it must cover)
    ('Noto+Sans+TC:wght@400..900', 'noto-tc', 'all'),
    ('Noto+Serif+TC:wght@600..900', 'noto-serif-tc', 'display'),
]

# Elements set in the serif display face (keep in sync with --display in site.css).
DISPLAY_RE = re.compile(
    r'<(h1|h2|h3)\b[^>]*>(.*?)</\1>'
    r'|<(\w+) class="(?:big|big-text|price-band rv|occasions rv)"[^>]*>(.*?)</\3>', re.S)


def display_text(pages):
    out = []
    for page in pages:
        for m in DISPLAY_RE.finditer(page):
            out.append(m.group(2) or m.group(4) or '')
    return ''.join(out)


def refresh_font(texts, display):
    ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'
    msgs = []
    for family, stem, cover in FONTS:
        src = texts if cover == 'all' else display
        chars = sorted({ch for t in src for ch in t if ord(ch) > 0x7F} | set('０１２３４５６７８９'))
        want = ''.join(chars)
        stamp = os.path.join(V2, stem + '.chars')
        if os.path.exists(stamp) and set(load(stamp)) >= set(want):
            msgs.append(f'{stem}: up to date')
            continue
        q = f'https://fonts.googleapis.com/css2?family={family}&display=swap&text=' + urllib.parse.quote(want)
        try:
            css = urllib.request.urlopen(urllib.request.Request(q, headers={'User-Agent': ua}), timeout=30).read().decode()
            url = re.findall(r'url\((https://[^)]+)\)', css)[0]
            data = urllib.request.urlopen(url, timeout=30).read()
        except Exception as e:  # offline: keep the old subset, new characters fall back to system fonts
            msgs.append(f'WARNING: {stem} not refreshed ({e})')
            continue
        open(os.path.join(V2, stem + '.woff2'), 'wb').write(data)
        save(stamp, want)
        msgs.append(f'{stem}: refreshed, {len(chars)} chars, {len(data) // 1024} KB')
    return '\n'.join(msgs)


def main():
    data = json.loads(load(os.path.join(SRC, 'data.json')))
    layout = load(os.path.join(SRC, 'layout.html'))
    written = []

    for name in sorted(os.listdir(os.path.join(SRC, 'pages'))):
        if not name.endswith('.html'):
            continue
        meta, body = split_header(load(os.path.join(SRC, 'pages', name)), name)
        out = render(layout, data, meta, body, '', name[:-5])
        save(os.path.join(ROOT, name), out)
        written.append((name, out))

    tpl = load(os.path.join(SRC, 'case.html'))
    for i, c in enumerate(data['cases']):
        meta, body = case_page(tpl, data, i)
        meta['image'] = c['photos'][0]
        out = render(layout, data, meta, body, '../', c['id'])
        save(os.path.join(ROOT, 'works', c['id'] + '.html'), out)
        written.append(('works/' + c['id'] + '.html', out))

    js = ('// Generated by tools/build.py from src/data.json. Do not edit.\n'
          '// Atlas order: photo k sits at column k % 6, row floor(k / 6) of atlas.webp.\n'
          f'export const PHOTOS = {json.dumps(data["photos"])};\n'
          'export const CASES = ' + json.dumps(
              [{k: c[k] for k in ('id', 'couple', 'date', 'svc', 'photos')} for c in data['cases']],
              ensure_ascii=False) + ';\n')
    save(os.path.join(V2, 'data.js'), js)

    base = data['contact']['site_url']
    urls = [base + ('' if n == 'index.html' else n) for n, _ in written]
    save(os.path.join(ROOT, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n'
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
         + ''.join(f'  <url><loc>{u}</loc></url>\n' for u in urls) + '</urlset>\n')
    save(os.path.join(ROOT, 'robots.txt'), f'User-agent: *\nDisallow: /wedding/admin/\nDisallow: /wedding/v1/\nSitemap: {base}sitemap.xml\n')

    texts = [o for _, o in written] + [js, load(os.path.join(V2, 'site.js')), load(os.path.join(ROOT, 'admin', 'index.html'))]
    for name, _ in written:
        print('wrote', name)
    # Couple names come from data.js at runtime too (wall tooltip), so include them.
    display = [display_text(o for _, o in written), ''.join(c['couple'] for c in data['cases'])]
    print(refresh_font(texts, display))


if __name__ == '__main__':
    main()
