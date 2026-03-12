# 範例 1：React 與 Next.js 的關係

## 目標

理解 React 與 Next.js 的關係，以及 Next.js 提供的全端能力。

---

## 步驟 1：React 是什麼？

**React** 是 UI 函式庫，負責：

- 元件化介面
- 虛擬 DOM 與渲染
- 狀態管理（useState、useEffect 等）

React **不包含**路由、伺服器渲染、建置工具等「全端」功能。

---

## 步驟 2：Next.js 是什麼？

**Next.js** 是建構在 React 之上的**全端框架**，由 Vercel 維護，提供：

- **App Router**：檔案式路由
- **Server Components**：預設在伺服器端渲染
- **Server Actions**：伺服器端處理表單
- **SSR / SSG**：伺服器端渲染、靜態生成
- **API Routes**：後端 API

Next.js 讓 React 應用能處理路由、資料載入、表單等完整 Web 需求。

---

## 步驟 3：兩者關係圖

```
React（UI 函式庫）
    ↑
Next.js（全端框架）
```

**簡單說**：Next.js 是「React 的全端解決方案」，內建路由、渲染、建置等。

---

## 步驟 4：與 React Router v7（Remix）的差異與選擇

Next.js 與 React Router v7（整合 Remix）都是 React 全端框架，差異如下：

### 主要差異

| 項目 | Next.js | React Router v7（Remix） |
|------|---------|--------------------------|
| **資料載入** | Server Component（元件層級 async） | Loader（路由層級） |
| **表單處理** | Server Actions | Action |
| **路由方式** | 檔案即路由（`app/` 資料夾） | `routes.ts` 設定 |
| **部署** | 原生支援 Vercel，也可自部署 | 可部署至任意 Node 環境 |
| **生態** | 生態完整、模板多 | 輕量、彈性高 |

### 適合的專案類型

| 選擇 Next.js | 選擇 React Router v7 |
|-------------|---------------------|
| 需要快速部署、Vercel 生態 | 需要高度自訂、自架伺服器 |
| 偏好檔案式路由、Server Components | 偏好 Loader/Action 模式 |
| 新專案、重視 SEO 的內容站 | 既有 React Router 專案升級 |
| 以 App Router 為主的全端應用 | 多策略路由（SPA / SSR 切換） |

兩者皆可勝任多數全端需求，可依團隊熟悉度與部署環境選擇。詳見 [06 - Remix](../06-remix/主題.md) 的對應比較。

---

## 完成

理解關係後，繼續 [範例 2：認識專案結構](範例2-認識專案結構.md)。

---

[上一範例：範例 0 - 建立專案](範例0-建立專案.md) | [下一範例：範例 2 - 認識專案結構](範例2-認識專案結構.md)
