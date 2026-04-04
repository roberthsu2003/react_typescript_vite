# 補充：React + TypeScript + Vite 專案結構說明

使用 **`npm create vite@latest … -- --template react-ts`** 建立專案後，目錄內會有一組內建檔案。以下說明各檔案／資料夾的**常見用途**。

> **版本差異**：`create-vite` 不同版本產生的檔案可能略有增刪（例如 `public/` 圖示檔名、`src/assets` 內圖片）。**以你專案實際目錄為準**；若某檔不存在，略過對應說明即可。

---

## 進入點

### `index.html`

整個網頁的**起點**，瀏覽器最先載入這個檔案。

- 通常內含 **`<div id="root"></div>`**（或類似 id），React 會把應用程式畫面**掛載**到這個節點。
- 以 **`<script type="module" src="/src/main.tsx">`**（路徑依模板）載入 TypeScript／JSX 的進入點。

### `src/main.tsx`

**JavaScript／TypeScript 的進入點**。

- 使用 **`createRoot`**（React 18+）把根元件（多為 `<App />`）掛載到 `index.html` 裡的 **`#root`**。
- 外層常包 **`StrictMode`**：開發模式下協助偵測潛在問題（不影響正式環境行為的語意，細節見 [React 文件](https://react.dev/reference/react/StrictMode)）。

---

## React 元件

### `src/App.tsx`

應用程式的**根元件**（入口元件），預設模板通常包含：

- 示範用 **`useState`** 的計數按鈕
- React／Vite Logo 與簡單版面
- 連結至官方文件等區塊

本單元 [範例 0：建立專案](範例0-建立專案.md) 會請你**改寫** `App.tsx` 以載入各範例；之後學習 React 時，這裡也會是你常修改的檔案之一。

---

## 樣式

### `src/index.css`

**全域** CSS，通常套用在整個應用程式。

- 常見內容：重置／基本排版、**CSS 變數**（顏色、字型）。
- 部分模板會加上 **`prefers-color-scheme: dark`** 等，做簡易深色模式示範。

### `src/App.css`

主要給 **`App.tsx`** 使用的樣式（元件範圍），例如按鈕、區塊排版、Hero 區等。

---

## 靜態資源

### `public/`

放在 **`public/`** 下的檔案會**原樣**提供給瀏覽器，路徑多以 **`/`** 開頭引用（例如 `/vite.svg`）。

- 常見檔案：**網站圖示**（如 `vite.svg`）、`favicon` 等，依模板而定。

### `src/assets/`

放在 **`src/assets/`** 的圖片、SVG 等，會經由 **Vite** 處理（例如檔名加上 hash 利於快取更新）。

- 預設模板幾乎都有 **`react.svg`**、**`vite.svg`**。
- 部分版本或自訂模板可能有更多圖片（例如主視覺圖）；**若目錄中沒有對應檔案，無需強求**。

---

## 設定檔

### `vite.config.ts`

**Vite** 設定檔。

- 幾乎一定會有 **`plugins: [react()]`**（由 `@vitejs/plugin-react` 提供）：處理 **JSX**、**HMR**（熱模組替換）等。
- **`base`**、**`build.outDir`**：預設模板可能未特別設定；若要部署到子路徑或自訂輸出目錄再補上即可（見 [02 - Vite 入門](../02-Vite入門/主題.md)）。

### `package.json`

專案中繼資料與 **npm 指令**：

- **`npm run dev`**：開發伺服器  
- **`npm run build`**：建置正式版（輸出多為 `dist/`）  
- **`npm run preview`**：預覽建置結果  
- **`npm run lint`**：執行 ESLint（若模板有設定）

**相依套件**：`react`、`react-dom` 為執行時依賴；`typescript`、`vite`、`@vitejs/plugin-react` 等多為開發依賴。

### `tsconfig.json`

TypeScript 的**總設定**，常會 **`references`** 或 extend 子設定檔（依模板而異）。

### `tsconfig.app.json`

針對 **`src/`** 內應用程式碼的設定（常見於官方模板）。

- **`"jsx": "react-jsx"`**：讓 TypeScript 正確檢查 **JSX** 語法。
- **`"strict": true`**：嚴格型別檢查。

### `tsconfig.node.json`

給 **Node 環境**下執行的檔案用（例如 **`vite.config.ts`**），與瀏覽器端 `tsconfig.app.json` 分開。

### `eslint.config.js`（或 `eslint.config.mjs`）

**ESLint** 設定（新版多為 **flat config**）。常啟用 TypeScript、React Hooks、React Refresh 等規則，協助維持程式品質。

### `.gitignore`

列出**不要**納入 Git 的項目，例如 **`node_modules/`**、**`dist/`**、編輯器設定等。

---

## 開發指令

```bash
npm run dev      # 啟動開發伺服器（熱更新）
npm run build    # 建置正式版
npm run preview  # 預覽建置結果
npm run lint     # 程式碼檢查（若 package.json 有定義）
```

---

## 與本單元的關係

完成 [範例 0：建立專案](範例0-建立專案.md) 後，你會在 **`examples/`** 內得到與上述類似的結構；若已依範例 0 新增 **`src/examples/`** 等檔案，目錄會再多出本單元專用的元件檔，屬正常現象。

---

[回到：範例 0 - 建立專案](範例0-建立專案.md) | [下一範例：範例 1 - JSX 基礎](範例1-JSX基礎.md)
