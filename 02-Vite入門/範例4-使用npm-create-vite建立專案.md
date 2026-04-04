# 範例 4：使用 `npm create vite@latest` 建立專案

## 目標

學會用官方推薦的 **`npm create vite@latest`** 指令建立 Vite 專案，並能區分 **純 TypeScript（vanilla-ts）** 與 **TypeScript + React（react-ts）** 等模板。

---

## 前置條件

- 已安裝 [Node.js](https://nodejs.org/)（建議 LTS），終端機可使用 `node -v`、`npm -v`。

---

## 步驟 1：`npm create vite@latest` 在做什麼？

**`npm create vite@latest`**（與 **`npm create vite`** 類似，會使用最新的 `create-vite`）會：

1. 下載（或沿用快取）官方腳本 **`create-vite`**
2. 依你選的**模板**在指定資料夾產生專案骨架（`index.html`、`package.json`、`vite.config.ts`、`src/` …）
3. **不會**自動幫你執行 `npm install`，需要進入專案後自行安裝依賴

專案名稱可放在指令最後，或使用互動式精靈逐步選擇。

---

## 步驟 2：互動式建立（精靈）

在**想建立專案的上一層目錄**執行：

```bash
npm create vite@latest
```

依提示輸入：

1. **Project name**：專案資料夾名稱（例如 `my-vite-app`）
2. **Framework**：選 **Vanilla** 或 **React** 等
3. **Variant**：選 **TypeScript** 或 **JavaScript**（選 TypeScript 才會是 `.ts` / `.tsx`）

完成後：

```bash
cd my-vite-app
npm install
npm run dev
```

瀏覽器開啟終端機顯示的本機網址（預設多為 `http://localhost:5173`）。

---

## 步驟 3：非互動式建立（一次指定模板）

適合寫進文件、腳本或 CI，**不必**逐步回答問題。

### 純 TypeScript（Vanilla + TS）

無 UI 框架，只有 HTML + TypeScript，適合先練 **Vite + TS**、再銜接 React：

```bash
npm create vite@latest my-vanilla-ts -- --template vanilla-ts
cd my-vanilla-ts
npm install
npm run dev
```

- 進入點多為 `index.html` 與 `src/main.ts`。

### TypeScript + React

使用 **React** 且主程式為 **`.tsx`**：

```bash
npm create vite@latest my-react-ts -- --template react-ts
cd my-react-ts
npm install
npm run dev
```

- 內含 React、`src/App.tsx`、`src/main.tsx` 等。

### 變體：React + TypeScript + SWC（較快編譯）

若模板列表中有 **React + TypeScript + SWC**，可選：

```bash
npm create vite@latest my-react-swc -- --template react-swc-ts
```

行為與 `react-ts` 類似，開發時以 **SWC** 轉譯（細節見該模板說明）。

---

## 步驟 4：常見模板對照（與本講義相關）

| 模板名稱（`--template`） | 說明 |
|--------------------------|------|
| **`vanilla-ts`** | 純 **TypeScript**，無 React／Vue |
| **`react-ts`** | **React 18+** + **TypeScript**（`.tsx`） |
| **`react-swc-ts`** | 同上，編譯器為 **SWC**（可選） |

其他還有 `vue-ts`、`svelte-ts` 等，可依需求在 [Vite 官方模板列表](https://github.com/vitejs/vite/tree/main/packages/create-vite) 查最新名稱。

---

## 步驟 5：建立後專案裡會有什麼？

不同模板略有差異，通常包含：

| 檔案／資料夾 | 用途 |
|--------------|------|
| `package.json` | 依賴與 `scripts`（`dev`、`build`、`preview`） |
| `vite.config.ts` | Vite 設定（見 [範例 2](範例2-認識vite.config.md)） |
| `tsconfig.json` | TypeScript 編譯器選項（見 [03 - TypeScript 配置](../03-TypeScript配置/主題.md)） |
| `index.html` | 入口 HTML，會載入 `src/main.ts` 或 `src/main.tsx` |
| `src/` | 主要程式碼 |

---

## 步驟 6：與本講義其他章節的關係

- 建立專案後，日常開發仍使用 **`npm run dev`**、建置使用 **`npm run build`**（見 [範例 3](範例3-開發與建置流程.md)）。
- **`vanilla-ts`** 較接近「只學 Vite + TS」；**`react-ts`** 則對應本講義後續 **React** 章節。

---

## 小結

| 需求 | 建議指令（節錄） |
|------|------------------|
| 只要 **TypeScript**，先不帶 React | `npm create vite@latest 專案名 -- --template vanilla-ts` |
| **TypeScript + React** | `npm create vite@latest 專案名 -- --template react-ts` |
| 想邊問邊選 | `npm create vite@latest`（互動式） |

---

## 完成

你已能用官方指令建立 **TypeScript** 或 **TypeScript + React** 的 Vite 專案。接下來可深入 [03 - TypeScript 配置](../03-TypeScript配置/主題.md) 閱讀 `tsconfig`，或進入 [05 - React 核心概念](../05-React核心概念/主題.md) 學習元件。

---

[上一範例：範例 3 - 開發與建置流程](範例3-開發與建置流程.md) | [下一章：03 - TypeScript 配置](../03-TypeScript配置/主題.md)
