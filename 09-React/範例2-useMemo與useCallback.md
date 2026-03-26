# 範例 2：`useMemo` 與 `useCallback`

## 目標

理解 **`useMemo`**（快取「計算結果」）與 **`useCallback`**（快取「函式參考」）的用途，以及**依賴陣列**的意義；避免過早使用，先以「昂貴計算」與「子元件 `memo`」為主場景。

---

## 前置條件

- 已完成 [範例 1：useRef 與 DOM](範例1-useRef與DOM.md)

---

## 步驟 1：為什麼會重算？

元件每次 render 時，函式內的變數與**內部函式**都會**重新建立**。若你把「內部函式」傳給子元件，子元件可能認為 props 變了而重繪。

```tsx
function Parent() {
  const [n, setN] = useState(0)

  const handleClick = () => setN((x) => x + 1)  // 每次 render 都是新的函式參考

  return <Child onClick={handleClick} />
}
```

---

## 步驟 2：`useCallback` 快取函式

```tsx
import { useCallback, useState } from 'react'

function Parent() {
  const [n, setN] = useState(0)

  const handleClick = useCallback(() => {
    setN((x) => x + 1)
  }, []) // 依賴為空：此函式參考在每次 render 保持相同（若依賴無變）

  return <Child onClick={handleClick} />
}
```

- 第二個參數是**依賴陣列**：若陣列中的值與上次 render 相同，則回傳**同一個**函式參考。  
- 若 `handleClick` 需要讀取 `userId`，應把 `userId` 放入依賴：`[userId]`。

---

## 步驟 3：`useMemo` 快取計算結果

當某個值由**昂貴計算**或**大型資料轉換**得到，且只在依賴變化時才需重算：

```tsx
import { useMemo, useState } from 'react'

function Report({ items }: { items: number[] }) {
  const [filter, setFilter] = useState(0)

  const sum = useMemo(() => {
    return items.filter((x) => x >= filter).reduce((a, b) => a + b, 0)
  }, [items, filter])

  return <output>總和：{sum}</output>
}
```

> 若只是 `a + b` 等極輕量運算，**不需要** `useMemo`；過度使用會讓程式難讀。

---

## 步驟 4：與 `React.memo` 搭配

子元件用 `memo` 包裝後，只有 **props 淺比較** 變了才重繪。此時父元件傳入的**函式**若每次 render 都是新參考，會讓 `memo` 失效——`useCallback` 常與此搭配。

---

## 重點整理

| Hook | 用途 |
|------|------|
| `useMemo(() => value, [deps])` | 快取計算結果 |
| `useCallback(fn, [deps])` | 快取函式參考 |
| 依賴陣列 | 與 `useEffect` 類似，**列出會影響結果的值** |

---

## 小練習

1. 寫一個父元件有 `count` 與 `name`，子元件只顯示 `name`；用 `memo` + `useCallback` 讓改變 `count` 時子元件**不重繪**（提示：傳給子元件的 callback 不要每次新建）。  
2. 故意在 `useMemo` 依賴陣列漏掉某個變數，觀察結果是否過時。

---

## 完成

繼續 [範例 3：Context 與狀態共享](範例3-Context與狀態共享.md)。

---

[上一範例：範例 1 - useRef 與 DOM](範例1-useRef與DOM.md) | [下一範例：範例 3 - Context 與狀態共享](範例3-Context與狀態共享.md)
