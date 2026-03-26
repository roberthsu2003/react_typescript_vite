# 範例 4：自訂 Hooks

## 目標

將 **可重複使用的狀態邏輯**抽成 **自訂 Hook**（函式名稱以 `use` 開頭），讓多個元件共用同一份邏輯，並保持程式碼整潔。

---

## 前置條件

- 已完成 [範例 3：Context 與狀態共享](範例3-Context與狀態共享.md)

---

## 步驟 1：規則

- 自訂 Hook 是**一般函式**，內部呼叫其他 Hook（`useState`、`useEffect` 等）。  
- 名稱必須以 **`use`** 開頭（例如 `useToggle`、`useCounter`），方便辨識與遵守 [Rules of Hooks](https://react.dev/reference/rules/rules-of-hooks)。  
- **不可**在條件式、迴圈內隨機呼叫 Hook（與內建 Hook 相同規則）。

---

## 步驟 2：範例 `useToggle`

```tsx
import { useCallback, useState } from 'react'

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial)
  const toggle = useCallback(() => setValue((v) => !v), [])
  return [value, toggle] as const
}
```

使用：

```tsx
function Panel() {
  const [open, toggle] = useToggle(false)
  return (
    <div>
      <button type="button" onClick={toggle}>{open ? '關閉' : '開啟'}</button>
      {open && <p>內容</p>}
    </div>
  )
}
```

---

## 步驟 3：範例 `useLocalStorage`（簡化版）

與 `localStorage` 同步（僅在客戶端、簡化錯誤處理）：

```tsx
import { useEffect, useState } from 'react'

export function useLocalStorage(key: string, initial: string) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ?? initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, value)
    } catch {
      /* ignore */
    }
  }, [key, value])

  return [value, setValue] as const
}
```

---

## 步驟 4：與 Context 搭配

自訂 Hook 常封裝 `useContext`，例如 `useTheme()` 內部呼叫 `useContext(ThemeContext)`，對外只暴露簡潔 API。

---

## 重點整理

| 概念 | 說明 |
|------|------|
| `useXxx` | 把邏輯抽成函式，多元件共用 |
| `as const` | 讓回傳的 tuple 型別更精確（選用） |

---

## 小練習

1. 實作 `useCounter(step: number)`，回傳 `[count, inc, dec, reset]`。  
2. 將範例 3 的 `useTheme` 獨立成 `hooks/useTheme.ts` 並在兩個元件中使用。

---

## 完成

繼續 [範例 5：表單與受控元件進階](範例5-表單與受控元件進階.md)。

---

[上一範例：範例 3 - Context 與狀態共享](範例3-Context與狀態共享.md) | [下一範例：範例 5 - 表單與受控元件進階](範例5-表單與受控元件進階.md)
