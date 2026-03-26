# React 進階 — 範例專案

本資料夾用於 [09 - React 單元（進階）](../主題.md) 的**實作練習**。

## 建立方式

依 [範例 0：建立進階練習專案](../範例0-建立進階練習專案.md)，在此目錄建立 Vite + React + TypeScript 專案：

```bash
cd 09-React
npm create vite@latest examples -- --template react-ts
cd examples
npm install
npm run dev
```

## 與 05 的關係

- **[05-React核心概念](../../05-React核心概念/examples/)**：入門互動範例（JSX、Props、State 等）。  
- **本目錄**：進階範例 1～7 的練習程式建議放在 `src/components/`、`src/hooks/` 等，依各範例 Markdown 操作。

兩者可用**不同專案資料夾**，避免互相覆蓋；若你已熟悉 05 的專案，也可在該專案內新增進階檔案，自行取捨。
