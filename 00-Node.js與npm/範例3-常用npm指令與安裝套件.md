# 範例 3：常用 npm 指令與安裝套件

## 目標

在**同一個練習專案**內，連續完成：

1. 使用 `npm install`、`npm run`、`npm list` 等常用指令  
2. 安裝**正式依賴**（`axios`）與**開發依賴**（`eslint`），並確認 `package.json` 與 `package-lock.json` 的變化  

> **專案位置**：請使用 [範例/練習專案](./範例/練習專案/)（內含起始 `package.json` 與 `index.js`）。終端機請先 `cd` 進入該目錄，**後續指令皆在此目錄執行**。

> **ES Module**：練習專案的 `package.json` 已設定 **`"type": "module"`**，因此 `index.js` 使用 **`import`／`export`**（與瀏覽器、`import` 的 Vite 專案寫法一致），而非 CommonJS 的 `require`。

---

## 步驟 1：`npm install`

```bash
cd 路徑/00-Node.js與npm/範例/練習專案
npm install
```

**說明**：依 `package.json` 安裝依賴。目前尚無第三方套件時，主要會確認環境並產生／更新 **`package-lock.json`**（若尚未有）。

**何時使用**：clone 專案後、或他人新增套件後，先 `npm install` 再開發。

---

## 步驟 2：執行腳本（`npm run`）

```bash
npm run start
```

等同執行 `package.json` 裡 `scripts.start`（本專案為 `node index.js`）。也可試：

```bash
npm run dev
npm run build
```

| 指令 | 本範例用途 |
|------|------------|
| `npm run start` / `npm run dev` | 執行 `index.js` |
| `npm run build` | 教學用假建置，僅示範 `scripts` 可有多個 |

在 **Vite / React** 專案中，常見會是 `npm run dev`、`npm run build`、`npm run preview`，語意與「執行 `scripts` 裡對應指令」相同。

---

## 步驟 3：查看已安裝的套件

```bash
npm list
```

列出目前專案依賴樹與版本。

---

## 步驟 4：安裝正式依賴 — `axios`

**axios 是什麼？** 它是常見的 **HTTP 客戶端**套件，用來在 JavaScript／Node 裡發送請求（GET、POST 等），語法比傳統 `fetch` 或舊版 `http` 模組更簡潔，且支援攔截器、逾時設定等。因為**執行** `index.js` 時就要 `import axios`，所以屬於 **`dependencies`**（正式依賴）。

```bash
npm install axios
```

- 會將 `axios` 寫入 **`dependencies`**（執行時需要）。
- 再次執行 `npm list` 應可看到 `axios`。

接著**將 `index.js` 替換為**下列內容（存檔後再執行 `npm run start`）：

```javascript
import axios from "axios";

async function main() {
  const res = await axios.get("https://httpbin.org/get", { timeout: 8000 });
  console.log("axios 請求成功，HTTP 狀態:", res.status);
}

main().catch((err) => {
  console.error("請確認已執行 npm install axios\n", err.message);
});
```

預期終端機印出成功訊息（需網路連線）。若失敗，請檢查網路或稍後再試。

---

## 步驟 5：安裝開發依賴 — `eslint`

**ESLint 是什麼？** 它是 **JavaScript／TypeScript 的程式碼檢查工具**（Linter），在撰寫或存檔時幫你抓語法問題、風格不一致、常見壞味道；**不會**在執行 `node index.js` 時自動載入，而是給開發者與編輯器／CI 使用，所以通常放在 **`devDependencies`**（開發依賴）。細部概念見 [範例 4：認識 ESLint](範例4-認識ESLint.md)。

```bash
npm install -D eslint
```

- `-D` 等同 `--save-dev`，寫入 **`devDependencies`**（開發工具，例如 Linter、測試框架）。

---

## 步驟 6：確認 `package.json`

開啟 `package.json`，應大致包含（含既有的 **`"type": "module"`**）：

```json
{
  "type": "module",
  "dependencies": {
    "axios": "^…"
  },
  "devDependencies": {
    "eslint": "^…"
  }
}
```

版本號可能與上述不同，屬正常。

---

## 步驟 7：認識 `package-lock.json`

安裝套件後會產生或更新 **`package-lock.json`**：

- 記錄每個套件的**精確版本**，利於團隊與 CI 安裝一致結果  
- **不要手動改**，建議與 `package.json` 一併提交到 Git  

---

## 完成

你已在本專案內完成：**安裝依賴 → 執行腳本 → 安裝正式／開發套件 → 對照設定檔**。接下來 [範例 4：認識 ESLint](範例4-認識ESLint.md) 會說明 **`eslint` 的用途**（你已在步驟 5 安裝）。

---

[回到本章 README](README.md)
