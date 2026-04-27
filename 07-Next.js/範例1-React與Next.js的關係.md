# 範例 1：React 與 Next.js 的關係

## 目標

理解 React 與 Next.js 的關係，以及 Next.js 提供的全端能力與伺服器端執行模型。

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

## 步驟 3：Next.js 也是 Web Server

使用 Next.js 時，不要只把它想成「會產生前端畫面」的工具。Next.js 也是一個 Web server（網頁伺服器），會負責接收瀏覽器請求、執行伺服器端程式、產生 HTML（超文字標記語言）或回傳資料。

在 App Router 中，元件大致可以先用這個方式理解：

- **Server Component（伺服器元件）**：預設元件類型，程式碼在伺服器端執行，可以安全讀取環境變數、呼叫後端服務、查詢資料庫，結果再變成 HTML 或資料傳給瀏覽器。
- **Client Component（客戶端元件）**：檔案最上方加上 `"use client"`，會在瀏覽器端執行，適合處理點擊、輸入、`useState`、`useEffect` 等互動行為。
- **Static Rendering（靜態渲染）**：如果頁面不依賴每次請求才知道的資料，Next.js 可以在建置時或快取後產生靜態結果，使用者請求時直接回傳。

常見畫面會是「外層 Server Component（伺服器元件）負責讀資料與組版，內層 Client Component（客戶端元件）負責互動」：

```tsx
// Server Component：可直接查資料庫，不會把 token（權杖）暴露到瀏覽器
export default async function Page() {
  const products = await db.product.findMany();

  return <ProductList products={products} />;
}
```

```tsx
"use client";

// Client Component：只處理瀏覽器互動
export function ProductList({ products }) {
  // 這裡可以使用 useState、onClick 等互動邏輯
}
```

### 重要觀念：不是所有後端邏輯都一定要放在 `/api`

如果資料只是在「伺服器端產生頁面時」使用，例如查資料庫後直接渲染商品列表，可以放在 Server Component（伺服器元件）裡，不一定要先寫 `/api` 再從自己的頁面呼叫自己的 API。

需要放在 `/api` 或 `route.ts` 的情況通常是：

- 這個端點要給瀏覽器用 `fetch()` 主動呼叫。
- 這個端點要給外部系統呼叫，例如 webhook（外部事件通知）。
- 這段程式本質上是在提供 JSON API（回傳 JSON 的 API），而不是直接產生頁面。

所以「要保護 token（權杖）或查資料庫」不等於一定要寫在 `/api`。更精準的判斷是：如果程式碼只需要在伺服器端渲染頁面時使用，可以放在 Server Component；如果你需要一個可被 HTTP（超文字傳輸協定）請求呼叫的 API（應用程式介面）端點，才放在 Route Handler（路由處理函式）。

---

## 步驟 4：兩者關係圖

```
React（UI 函式庫）
    ↑
Next.js（全端框架）
```

**簡單說**：Next.js 是「React 的全端解決方案」，內建路由、渲染、建置等。

---

## 步驟 5：與 React Router v7（Remix）的差異與選擇

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
