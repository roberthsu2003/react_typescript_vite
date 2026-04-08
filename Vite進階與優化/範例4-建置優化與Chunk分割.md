# 範例 4：建置優化與 Chunk 分割

## 目標

了解如何分割打包檔案，避免單一檔案過大，提升網頁首次載入速度。

---

## 步驟 1：為什麼要分割 Chunk？

當執行 `npm run build` 時，Vite 底層會使用 Rollup 進行打包。如果專案很大，Vite 預設可能會將您的程式碼跟所有的第三方套件包成一個巨大的 `index-[hash].js`。如此一來，如果您只改了一行程式碼，使用者部署後依然需要重新下載好幾 MB 的大檔案，造成載入緩慢。

**解決方案**：進行手動 Chunk 分片，把很少變動的套件 (例如 React 核心模組) 獨立切出去，變成 `vendor-[hash].js`。這有助於瀏覽器長期快取這些龐大的第三方庫。

---

## 步驟 2：觀察視覺化與分片設定

開啟 `vite-advanced-demo/vite.config.ts`。

1. **體積分析**：尋找 `visualizer` 設定，這能幫我們產出打包後的體積分析圖。
   ```typescript
   import { visualizer } from 'rollup-plugin-visualizer';
   // ...
   plugins: [
     // ...
     visualizer({ open: true }), // 打包完成後自動在瀏覽器開啟分析圖
   ]
   ```

2. **手動分片**：尋找 `build.rollupOptions` 區塊，這是 Rollup 的底層設定：
   ```typescript
   build: {
     rollupOptions: {
       output: {
         manualChunks: {
           // 將 'react' 和 'react-dom' 獨立打包成一個名為 react-vendor 的檔案
           'react-vendor': ['react', 'react-dom'],
         },
       },
     },
   }
   ```

---

## 步驟 3：執行建置並觀看雷達圖

打開您的終端機，執行以下指令：
```bash
cd vite-advanced-demo
npm run build
```

**您將會觀察到兩件事：**
1. 在專案輸出的 `dist/assets` 資料夾中，除了本來的檔案外，多出了一個 `react-vendor-[hash].js` 的獨立檔案。
2. 終端機會自動透過瀏覽器開啟 `stats.html`（或也可在專案根目錄手動尋找並點擊），在雷達圖中您可以清楚看出哪些套件最佔據空間，便於後續優化。

---

## 完成

學會建置優化與 Chunk 分割後，您就具備了將專案從「能動」提升為「能高效上線服役」的專業能力！

[上一範例：範例 3 - 跨域代理](範例3-跨域代理.md) | [回到主題](主題.md)
