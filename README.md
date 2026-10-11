# wedding

映時 INTIME 婚禮拍貼機・電話留影機 — https://ken1130.github.io/wedding/

- 示意後台：https://ken1130.github.io/wedding/admin/（只存在瀏覽器，不會改到網站）
- 舊版（Snapday 雛型）：https://ken1130.github.io/wedding/v1/

## 頁面

| 網址 | 內容 |
| --- | --- |
| `index.html` | 品牌首頁（three.js 照片牆） |
| `booth.html` / `phone.html` | 拍貼機、電話留影機服務介紹 |
| `works.html`、`works/*.html` | 作品集與 6 個案例頁 |
| `plans.html` | 方案價格、比較表、加購、FAQ |
| `about.html` | 關於映時 |
| `contact.html` | LINE / IG 聯絡、詢問單 |

## 修改內容

根目錄的 `.html` 都是產生出來的，**不要直接改**。改 `src/` 裡的檔案後執行：

    python3 tools/build.py

- `src/data.json`：LINE ID、IG 帳號、GA 評估 ID、網址，以及所有作品案例
- `src/pages/*.html`：各頁內容
- `src/case.html`：案例頁版型
- `src/layout.html`：導覽列、頁尾、手機底部 LINE 按鈕

`build.py` 會一併更新 `sitemap.xml`、`robots.txt`、`assets/v2/data.js`，
並在用到新的中文字時重新下載思源黑體子集（需要網路）。

### 填入 LINE 與 Google Analytics

在 `src/data.json` 的 `contact` 填上 `line_id`（例如 `@intime`）與 `ga_id`（例如 `G-XXXXXXXXXX`），
再執行 build。`line_id` 空白時，LINE 按鈕會先連到聯絡頁。

## 照片牆

- `assets/v2/wall.js`：照片牆本體
- `assets/v2/atlas.webp`：照片牆貼圖，2048 × 2048，6 × 6 格，順序同 `data.json` 的 `photos`
  （每張裁成正方形，由左到右、由上到下排列）
