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

## 步驟 3：執行建置並觀看打包體積分析圖

打開您的終端機，執行以下指令：
```bash
cd vite-advanced-demo
npm run build
```

**您將會觀察到兩件事：**

1. **實體檔案分離**：在專案輸出的 `dist/assets` 資料夾中，除了本來的檔案外，多出了一個 `react-vendor-[hash].js` 的獨立檔案。這代表我們成功將 React 核心獨立分拆出來了。
2. **自動瀏覽分析圖**：終端機會自動透過瀏覽器開啟 `stats.html`（若無自動打開，也可在專案根目錄手動點擊開啟）。

> **💡 如何看懂這個圖表（視覺化分析圖）？**
> 
> 雖然有時這被俗稱為雷達圖，但它通常呈現為**彩色方塊圖（Treemap）**或**同心圓（Sunburst）**。您只需要掌握一個核心觀念：**「區塊的面積越大，代表這個套件佔用的檔案容量越大」**。
> - **揪出肥大套件**：如果某個套件佔據了一半以上的圖表，這就代表它太過肥大，可能會導致網頁載入緩慢。
> - **優化依據**：藉由觀察這張圖表，我們可以找出佔用空間最多的程式碼，進而決定是否要替換更輕量的套件或是使用「懶加載 (Lazy Loading)」進行優化。

---

## 完成

學會建置優化與 Chunk 分割後，您就具備了將專案從「能動」提升為「能高效上線服役」的專業能力！

[上一範例：範例 3 - 跨域代理](範例3-跨域代理.md) | [回到主題](主題.md)
