# wedding

Snapday 拍日子 — https://ken1130.github.io/wedding/

## 修改網站文字後

首頁有預先渲染的快照（讓畫面在 JS 載入前就顯示）。改了首頁內容後要重新產生，
否則開頁時會先閃一下舊內容：

1. 移除 `index.html` 裡舊的快照（`<div id="dc-pre">` 到它後面的 `</script>`）。
2. 用 Chrome `--dump-dom` 分別以寬度 1280、768、390 存下渲染後的頁面。
3. `python3 tools/prerender.py . dump_1280.html dump_768.html dump_390.html`
