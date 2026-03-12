# 範例 1：React 與 Remix 的關係

## 目標

理解 React、Remix、React Router 三者的關係，以及 React Router v7 的演進。

---

## 步驟 1：React 是什麼？

**React** 是 UI 函式庫，負責：

- 元件化介面
- 虛擬 DOM 與渲染
- 狀態管理（useState、useEffect 等）

React **不包含**路由、伺服器渲染、表單處理等「全端」功能。

---

## 步驟 2：Remix 是什麼？

**Remix** 是建構在 React 之上的**全端框架**，提供：

- 檔案路由
- Loader（伺服器端載入資料）
- Action（表單提交處理）
- SSR（伺服器端渲染）

Remix 讓 React 應用能處理路由、資料載入、表單等完整 Web 需求。

---

## 步驟 3：React Router v7 的演進

2024 年起，**Remix 與 React Router 合併**：

| 項目 | 說明 |
|------|------|
| **合併** | Remix 團隊將 Remix 整合進 React Router |
| **React Router v7** | 即「Remix 的進化版」，包含所有 Remix 功能 |
| **建議** | 新專案使用 React Router v7，既有 Remix 專案可升級 |

---

## 步驟 4：三者關係圖

```
React（UI 函式庫）
    ↑
Remix（全端框架，已整合進 React Router）
    ↑
React Router v7（路由 + 全端框架）
```

**簡單說**：React Router v7 = React Router + Remix，是目前的推薦選擇。

---

## 完成

理解關係後，繼續 [範例 2：認識專案結構](範例2-認識專案結構.md)。

---

[上一範例：範例 0 - 建立專案](範例0-建立專案.md) | [下一範例：範例 2 - 認識專案結構](範例2-認識專案結構.md)
