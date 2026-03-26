# 範例 1：`useRef` 與 DOM

## 目標

理解 **`useRef`** 的兩種常見用途：**讀寫 DOM 節點**（例如聚焦輸入框、捲動），以及**保存不觸發重繪的可變值**（例如計時器 id）。

---

## 前置條件

- 已完成 [範例 0：建立進階練習專案](範例0-建立進階練習專案.md)

---

## 步驟 1：為什麼需要 ref？

- `useState` 每次更新會觸發**重新渲染**。  
- 有些需求不需要「每次改變都畫面更新」，例如：  
  - 只想記住「上一個計時器 id」以便清除  
  - 只想在按鈕點擊時**讓輸入框聚焦**  

此時可用 **`useRef`** 保存一個**可變容器**（`.current`），不會因為改變 `.current` 而自動重新渲染。

---

## 步驟 2：綁定 DOM：`inputRef`

```tsx
import { useRef } from 'react'

export function FocusDemo() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="輸入文字" />
      <button
        type="button"
        onClick={() => inputRef.current?.focus()}
      >
        聚焦輸入框
      </button>
    </div>
  )
}
```

- `useRef<HTMLInputElement>(null)`：泛型標註 ref 指向的 DOM 型別。  
- `inputRef.current`：可能為 `null`（尚未掛載），用 **可選鏈** `?.` 呼叫。

---

## 步驟 3：保存可變值（不觸發重繪）

```tsx
import { useRef, useEffect } from 'react'

export function TimerIdDemo() {
  const timerIdRef = useRef<number | null>(null)

  const start = () => {
    if (timerIdRef.current !== null) return
    timerIdRef.current = window.setInterval(() => {
      console.log('tick')
    }, 1000)
  }

  const stop = () => {
    if (timerIdRef.current !== null) {
      clearInterval(timerIdRef.current)
      timerIdRef.current = null
    }
  }

  useEffect(() => () => stop(), [])

  return (
    <div>
      <button type="button" onClick={start}>開始</button>
      <button type="button" onClick={stop}>停止</button>
    </div>
  )
}
```

將 `timerId` 放在 `ref` 可避免 `setState` 造成不必要的重繪；若你**需要**在畫面上顯示「已過幾秒」，仍應搭配 `useState`。

---

## 步驟 4：與 `useState` 的取捨

| 需求 | 建議 |
|------|------|
| 值改變要更新畫面 | `useState` |
| 只存 DOM、計時器 id、上次點擊時間等「輔助」 | `useRef` |

---

## 重點整理

- `const ref = useRef<T>(initial)`，`ref.current` 可讀寫。  
- `ref={inputRef}` 將 DOM 節點賦給 `inputRef.current`。  
- 改變 `ref.current`**不會**觸發重新渲染。

---

## 小練習

1. 做一個 `textarea` 與按鈕「插入今天的日期」：按鈕時用 `ref` 取得 `textarea`，在游標處插入字串（進階：`selectionStart`）。  
2. 用 `useRef` 記錄「按鈕被點擊的次數」，但**不要**在畫面上顯示，只在 `console.log` 印出。

---

## 完成

繼續 [範例 2：useMemo 與 useCallback](範例2-useMemo與useCallback.md)。

---

[上一範例：範例 0 - 建立進階練習專案](範例0-建立進階練習專案.md) | [下一範例：範例 2 - useMemo 與 useCallback](範例2-useMemo與useCallback.md)
