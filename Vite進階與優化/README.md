# 寫給程式設計師：Vite 進階配置與優化

在先前的「Vite入門」章節中，我們學會了如何透過指令 (`npm run dev`, `npm run build`) 啟動和打包專案，並認識了基本的 `vite.config.ts` 以及部署用的設定 (`base`, `outDir`)。

當您的專案規模逐漸變大，從「玩具專案」進化為「產品級應用」或「企業級專案」時，您將無可避免地遇到以下問題：
- **環境變數管理**：如何分開測試機和正式機的 API 網址，並保護敏感資料？
- **路徑地獄**：`import Button from '../../../../components/Button'` 愈來愈長怎麼辦？
- **跨域問題 (CORS)**：開發階段一直遇到後端 API CORS 阻擋？
- **打包肥大**：全部的套件都包進同一個 `index.js`，導致網頁第一次載入超慢？

本章節將為您一次打通這四個開發痛點的任督二脈。

---

## 範例專案參考

我們提供了一個包含所有進階配置並**寫滿詳細註解**的獨立範例專案：
👉 **[vite-advanced-demo](./vite-advanced-demo)**

請進入該目錄下，跟隨 `vite.config.ts` 內的註解與本篇講義互相對照學習。

```bash
cd Vite進階與優化/vite-advanced-demo
npm install
npm run dev
```

---

## 第一階段：環境變數管理 (.env)

在 Vite 中處理環境變數非常安全但也有一套規則：

1. **建立檔案**：在專案根目錄建立 `.env.development` (開發用) 與 `.env.production` (打包正式機用)。
2. **變數前綴限制**：為了防止不小心把資料庫密碼或雲端主機金鑰打包出前端，Vite 規定**只有以 `VITE_` 開頭的變數**，才會暴露給前端程式碼。
3. **在程式中使用**：透過 `import.meta.env.VITE_VARIABLES_NAME` 來取得。

👉 *請參考範例專案中的 `.env.development` 與 `.env.production`，並觀察 `App.tsx` 中如何讀取。*

> **⚠️ 重大資安提醒：** 絕對不要把 Gemini API Key 或 OpenAI Key 直接寫在前端的 `.env` 裡！這些 Key 一旦跟著打包送到瀏覽器，將可被任何人看見並盜刷（請參考 [BFF + Express API Proxy](../BFF+Express_API_proxy/README.md) 架構）。前端的 `VITE_` 變數通常只用來儲存單純的 API 進入點網址 (e.g. `VITE_API_URL`)。

---

## 第二階段：拒絕點點地獄 - 路徑別名 (Aliases)

當資料夾結構變深，我們希望能用 `@` 代表專案的根目錄 `src/`。
例如將 `import x from '../../components/x'` 變成 `import x from '@/components/x'`。

這需要**兩邊**同時設定，常常是新手卡關的地方：

1. **讓打包工具 (Vite) 認得**：
   修改 `vite.config.ts` 加入 `resolve.alias`。
   *(注意：需要安裝 `@types/node` 才能在 `vite.config.ts` 中使用 `path.resolve`)*
2. **讓編輯器 (TypeScript) 認得**：
   修改 `tsconfig.json` 或 `tsconfig.app.json` 加入 `compilerOptions.paths`。

👉 *請參考範例專案中的 `vite.config.ts` 與 `tsconfig.app.json` 關於別名的設定。*

---

## 第三階段：跨域代理 (Development Proxy)

前端呼叫後端 API 最常遇到 `CORS policy` 錯誤。在開發階段，與其去要求後端修改設定，我們可以用 Vite 開發伺服器當作「代理人」。

1. 您向它發送 `/api/users` 請求。
2. 它偷偷幫您發向 `http://localhost:3000/api/users`。
3. 這樣對瀏覽器來說就是同網域請求，不會有 CORS 問題。

```typescript
// vite.config.ts 片段
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000', // 目標後端網址
      changeOrigin: true, // 必設：改變請求頭的 host，欺騙後端這是一個真請求
      rewrite: (path) => path.replace(/^\/api/, ''), // 將 /api 移除
    },
  },
}
```

👉 *請參考範例專案 `vite.config.ts` 中詳細的 Proxy 設定與註解。*

---

## 第四階段：建置優化與 Chunk 分割

當專案完成，我們執行 `npm run build` 時，Vite 底層會使用 Rollup 進行打包。
如果專案很小，Vite 會把所有 JavaScript 包成一個大檔案 (`index-[hash].js`)。但如果檔案高達好幾 MB，每次部署就算只改了一行字，使用者的瀏覽器都要重新下載這好幾 MB。

**解決方案：** 利用手動 Chunk 分片，把不常變動的第三方套件 (如 React 本身) 切出去 (`vendor.js`)。這會讓快取機制更有效。

同時，我們也可以安裝 `rollup-plugin-visualizer`，幫我們產出打包後的體積分析圖，一眼看出是哪個套件讓專案變肥！

👉 *請參考範例專案 `vite.config.ts` 中匯入 `visualizer` 以及 `build.rollupOptions` 的實際設定。可以在範例專案下執行 `npm run build`，觀察產生的資料夾內是否成功將 `react` 等套件獨立切割，並打開生成的 `stats.html` 觀看雷達圖。*
