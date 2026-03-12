# 範例 4：useEffect

## 目標

學會用 `useEffect` 處理副作用，例如計時器、API 呼叫。完成本範例後，範例 4 的區塊將顯示每秒遞增的計時器。

---

## 前置條件

- 已完成 [範例 3：State](範例3-State.md)

---

## 步驟 1：認識 useEffect

`useEffect` 用來處理「副作用」：計時器、訂閱、API 呼叫等。

- **第一個參數**：要執行的函式
- **第二個參數 `[]`**：空陣列表示只在元件掛載時執行一次
- **return 的函式**：元件卸載時執行，用來清理（如清除計時器）

---

## 步驟 2：修改 Example4UseEffect.tsx

開啟 `src/examples/Example4UseEffect.tsx`，將**整個檔案內容**替換為：

```tsx
import { useState, useEffect } from 'react'

function Example4UseEffect() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="example-card">
      <h2>範例 4：useEffect</h2>
      <p className="hint">👆 觀察秒數每秒自動增加（useEffect 啟動計時器）</p>

      <section>
        <p className="timer-display">已經過了 <strong>{seconds}</strong> 秒</p>
      </section>
    </div>
  )
}

export default Example4UseEffect
```

---

## 步驟 3：儲存並觀察

1. 儲存檔案
2. 在瀏覽器中點選 **「4. useEffect」**
3. **手動操作**：觀察秒數是否每秒自動增加

---

## 重點整理

- `setInterval(..., 1000)`：每 1000 毫秒（1 秒）執行一次
- `setSeconds((prev) => prev + 1)`：用函式形式更新，避免閉包問題
- `return () => clearInterval(timer)`：元件卸載時清除計時器，避免記憶體洩漏

---

## 完成

範例 4 已完成！繼續 [範例 5：事件處理](範例5-事件處理.md)。

---

[上一範例：範例 3 - State](範例3-State.md) | [下一範例：範例 5 - 事件處理](範例5-事件處理.md)
