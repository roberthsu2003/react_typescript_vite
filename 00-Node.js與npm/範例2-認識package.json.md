# 範例 2：認識 package.json

## 目標

了解 `package.json` 的結構與各欄位意義，並在**本章共用的練習專案**中對照真實檔案。

---

## 步驟 1：開啟練習專案內的 `package.json`

本 repo 已提供 **[範例/練習專案](./範例/練習專案/)**（專案代號可視為 `npm-lab`）。請用編輯器開啟該目錄下的 **`package.json`**。

> 之後 [範例 3](範例3-常用npm指令與安裝套件.md)、[範例 4](範例4-認識ESLint.md) 都會**在同一目錄**內操作，無須另建新專案。

---

## 步驟 2：認識基本欄位

對照你開啟的檔案，常見欄位如下（教學示意）：

```json
{
  "name": "npm-lab",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "description": "…"
}
```

| 欄位 | 說明 |
|------|------|
| **name** | 專案／套件名稱 |
| **version** | 版本號 |
| **private** | `true` 表示不發布到 npm 公開註冊表 |
| **type** | 設為 **`"module"`** 時，專案內 `.js` 以 **ES Module** 解析（`import`／`export`），與 Vite／現代前端常見寫法一致 |
| **description** | 簡短說明（選填） |

---

## 步驟 3：認識 `scripts`

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "node index.js",
    "build": "echo …"
  }
}
```

- 用 **`npm run start`**（或 **`npm start`**，因 `start` 有 npm 捷徑）執行對應指令  
- 其他名稱一律 **`npm run 指令名`**  

在 Vite 專案中常見為 `"dev": "vite"`、`"build": "vite build"`，概念相同。

---

## 步驟 4：認識 `dependencies` 與 `devDependencies`

範例 3 安裝套件後，你的 `package.json` 會出現類似：

```json
{
  "dependencies": {
    "axios": "^…"
  },
  "devDependencies": {
    "eslint": "^…"
  }
}
```

| 欄位 | 說明 |
|------|------|
| **dependencies** | 執行時需要的套件（例如執行 `index.js` 時 **`import`** 的模組） |
| **devDependencies** | 開發／建置時需要的工具（例如 ESLint、TypeScript、Vite） |

---

## 完成

理解 `package.json` 後，請在 **練習專案** 目錄繼續 [範例 3：常用 npm 指令與安裝套件](範例3-常用npm指令與安裝套件.md)，依序完成安裝與執行。
