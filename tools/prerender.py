# Inject static snapshots of the rendered home page so text and layout paint
# before React boots. One snapshot per layout breakpoint (phone <640,
# tablet <900, desktop); an inline script picks one by viewport width and
# drops it the moment the live #dc-root renders.
import re, sys, os
site, d_desk, d_tab, d_phone = sys.argv[1:5]
def grab(path):
    r = open(path, encoding='utf-8').read()
    head = r[:r.find('<body')]
    styles = []
    for s in re.findall(r'<style[^>]*>(.*?)</style>', head, re.S):
        if s.strip() and s not in styles and 'x-dc{display:none' not in s:
            styles.append(s)
    i = r.find('<div id="dc-root"'); j = r.find('<script type="text/x-dc"')
    root = r[i:j].strip()
    assert root.endswith('</div>') and root.count('id="dc-root"') == 1
    root = root.replace('id="dc-root"', 'id="dc-pre-root"', 1)
    return styles, root
sd, rd = grab(d_desk); st, rt = grab(d_tab); sp, rp = grab(d_phone)
css = []
for s in sd + st + sp:
    if s not in css: css.append(s)
css = '\n'.join(css).replace('</style', '<\\/style')
block = ('<div id="dc-pre"><style>' + css + '</style></div>'
         '<template id="dc-pre-d">' + rd + '</template>'
         '<template id="dc-pre-t">' + rt + '</template>'
         '<template id="dc-pre-p">' + rp + '</template>'
         '<script>(function(){var w=innerWidth,pre=document.getElementById("dc-pre");'
         'pre.appendChild(document.getElementById(w<640?"dc-pre-p":w<900?"dc-pre-t":"dc-pre-d").content.cloneNode(true));'
         'function done(){var r=document.getElementById("dc-root");return r&&r.firstElementChild}'
         'new MutationObserver(function(m,o){if(done()){pre.remove();o.disconnect()}}).observe(document.documentElement,{childList:true,subtree:true})})()</script>')
p = os.path.join(site, 'index.html'); t = open(p, encoding='utf-8').read()
assert 'id="dc-pre"' not in t and t.count('<x-dc>') == 1
t = t.replace('<x-dc>', block + '<x-dc>', 1)
open(p, 'w', encoding='utf-8').write(t)
print('css', len(css), 'snapshots', len(rd), len(rt), len(rp), 'index', len(t.encode()))
