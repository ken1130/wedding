# wedding

映時 INTIME 婚禮拍貼機・電話留影機 — https://ken1130.github.io/wedding/

舊版（Snapday 雛型）保留在 https://ken1130.github.io/wedding/v1/

## 結構

- `index.html`：頁面內容（服務、方案、流程、聯絡都直接寫在這裡）
- `assets/v2/site.css`：樣式
- `assets/v2/site.js`：載入動畫、作品集資料（`CASES`）、作品彈窗、手機選單
- `assets/v2/wall.js`：首頁 three.js 照片牆（可拖曳、無限循環）
- `assets/v2/atlas.webp`：照片牆用的拼圖貼圖，6 × 6 格，順序同 `site.js` 的 `PHOTOS`
- `assets/v2/noto-tc.woff2`：只含頁面用字的思源黑體子集

## 換照片

1. 照片放進 `assets/photos/`（webp，長邊約 1000px）。
2. 改 `site.js` 的 `PHOTOS` 與每組 `CASES[].photos`。
3. 重新產生 `atlas.webp`：36 張照片各裁成正方形，依 `PHOTOS` 順序由左到右、由上到下排進 2048 × 2048 的 6 × 6 格。

## 改了中文文字後

`noto-tc.woff2` 只含目前用到的字，新加的字會先用系統字型顯示。要重新產生：
收集 `index.html`、`site.js` 裡所有非 ASCII 字元，用
`https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400..900&text=<字元>`
下載回傳的 woff2，覆蓋 `assets/v2/noto-tc.woff2`。
