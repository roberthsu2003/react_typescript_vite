# React + TypeScript + Vite 初學者講義

專為初學者設計的**講義**，幫助你在 vibe coding 時理解程式碼在做什麼。

每一章節都有**主題**和**步驟化範例**，學生可依序學習。

---

## 講義結構

```
├── 01-環境建置/       # 主題 + 4 個範例
├── 02-Vite入門/       # 主題 + 3 個範例
├── 03-TypeScript配置/  # 主題 + 3 個範例（專案設定）
├── 04-npm入門/        # 主題 + 4 個範例
├── 05-React核心概念/  # 主題 + 6 個範例（含建立專案）
├── 06-remix/          # 主題 + 6 個範例（React Router v7）
├── 07-Next.js/        # 主題 + 6 個範例（Next.js）
├── 08-TypeScript語法/ # 深度：TypeScript 語法與型別系統
└── 09-React/          # 深度：React 進階（ref、Context、自訂 Hook 等 8 範例）
```

每章包含：

- **主題.md**：本章學習目標與範例導覽
- **範例N-xxx.md**：步驟化範例，一步一步跟著做

---

## 學習路徑（主線）

建議依序完成 **01～07**。

| 章節 | 主題 | 範例數 |
|------|------|--------|
| [01 - 環境建置](01-環境建置/主題.md) | Node、npm、專案結構 | 4 |
| [02 - Vite 入門](02-Vite入門/主題.md) | Vite 是什麼、vite.config、dev/build | 3 |
| [03 - TypeScript 配置](03-TypeScript配置/主題.md) | tsconfig、型別基礎 | 3 |
| [04 - npm 入門](04-npm入門/主題.md) | package.json、套件安裝、ESLint | 4 |
| [05 - React 核心概念](05-React核心概念/主題.md) | JSX、Props、State、Hooks、事件 | 6 |
| [06 - Remix](06-remix/主題.md) | React Router v7、Remix、路由、Loader、Action | 6 |
| [07 - Next.js](07-Next.js/主題.md) | App Router、Server Component、Server Action | 6 |

---

## 深度學習（TypeScript 與 React）

以下單元**不在主線編號內**，內容較深，可依需求與 [03 - TypeScript 配置](03-TypeScript配置/主題.md)、[05 - React 核心概念](05-React核心概念/主題.md) 搭配閱讀。

| 單元 | 說明 | 範例數 |
|------|------|--------|
| [TypeScript 語法](08-TypeScript語法/主題.md) | 變數、函式、`interface`、泛型、聯合型別與窄化 | 6 |
| [React 單元（進階）](09-React/主題.md) | `useRef`、效能 Hook、Context、自訂 Hook、表單進階、組合、`memo`／`key`；**入門仍請先讀 [05](05-React核心概念/主題.md)** | 8 |

> **React**：入門在 [05 - React 核心概念](05-React核心概念/主題.md)；進階範例與練習專案說明在 [09-React](09-React/主題.md)。

---

## 使用方式

1. 從 [01 - 環境建置](01-環境建置/主題.md) 開始，依主線完成 **01～07**
2. 需要加強型別或 React 時，再開啟上表 **深度學習**（React 進階請在讀完 05 後再讀 09）
3. 每個範例都是 **Markdown 檔案**，內含步驟與程式碼，可一步一步跟著操作

---

## 學習對象

- 程式初學者
- vibe coding 使用者，想了解 AI 產生的程式碼在做什麼
