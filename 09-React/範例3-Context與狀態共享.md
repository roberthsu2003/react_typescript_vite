# 範例 3：Context 與狀態共享

## 目標

使用 **React Context** 在元件樹中**跨多層**傳遞資料，避免僅為「傳給深層子元件」而在每一層手動傳遞 props（prop drilling）。

---

## 前置條件

- 已完成 [範例 2：useMemo 與 useCallback](範例2-useMemo與useCallback.md)

---

## 步驟 1：三個角色

1. **`createContext`**：建立一個 Context 物件。  
2. **`<Provider value={...}>`**：在樹上層提供值。  
3. **`useContext(YourContext)`**：在子元件讀取值。

---

## 步驟 2：建立與提供

```tsx
import { createContext, useContext, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<Theme>('light')

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  return (
    <ThemeContext.Provider value={theme}>
      {children}
      <button type="button" onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>
        切換主題
      </button>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
```

---

## 步驟 3：在子元件讀取

```tsx
function DeepChild() {
  const theme = useTheme()
  return <p>目前主題：{theme}</p>
}
```

將 `App` 包在 `<ThemeProvider>` 內，深層子元件即可取得 `theme`，**不需**經過中間層 props。

---

## 步驟 4：注意事項

- **預設值**：`createContext<Theme | null>(null)` 時，子元件要處理 `null` 或提供 Provider。  
- **效能**：Context 的 `value` 改變時，**所有**消費該 Context 的元件都會重繪；可將「常變」與「不常變」拆成多個 Context，或用 `useMemo` 穩定 `value` 物件（進階）。  
- **小型專案**：若只有 2～3 層，仍可直接用 props，更清楚。

---

## 重點整理

| API | 用途 |
|-----|------|
| `createContext` | 建立 Context |
| `Provider` | 注入 `value` |
| `useContext` | 讀取 Context |

---

## 小練習

1. 建立 `LanguageContext`（`'zh' | 'en'`），在 `App` 用 Provider 包住，深層元件顯示目前語言。  
2. 將 `value` 改為每次 render 新建 `{ theme, user }` 物件，觀察子元件是否過度重繪（可搭配 React DevTools Profiler）。

---

## 完成

繼續 [範例 4：自訂 Hooks](範例4-自訂Hooks.md)。

---

[上一範例：範例 2 - useMemo 與 useCallback](範例2-useMemo與useCallback.md) | [下一範例：範例 4 - 自訂 Hooks](範例4-自訂Hooks.md)
