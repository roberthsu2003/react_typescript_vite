# 範例 3：State（狀態）

## 目標

學會用 `useState` 管理元件內部的資料，當資料改變時畫面會自動更新。完成本範例後，範例 3 的區塊將有可點擊的計數器。

---

## 前置條件

- 已完成 [範例 2：Props](範例2-Props.md)

---

## 步驟 1：認識 useState

`useState` 是 React 的 Hook，用來管理元件內部的狀態：

- `useState(0)`：初始值為 0
- 回傳 `[count, setCount]`：當前值與更新函式
- 呼叫 `setCount` 會觸發重新渲染，畫面自動更新

---

## 步驟 2：引入 useState

在 `Example3State.tsx` 頂端加入：

```tsx
import { useState } from 'react'
```

---

## 步驟 3：修改 Example3State.tsx

開啟 `src/examples/Example3State.tsx`，將**整個檔案內容**替換為：

```tsx
import { useState } from 'react'

function Example3State() {
  const [count, setCount] = useState(0)

  return (
    <div className="example-card">
      <h2>範例 3：State（狀態）</h2>
      <p className="hint">👆 點擊按鈕，觀察數字如何即時更新</p>

      <section>
        <p className="count-display">目前數字：<strong>{count}</strong></p>
        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(count - 1)}>-1</button>
          <button onClick={() => setCount(0)}>歸零</button>
        </div>
      </section>
    </div>
  )
}

export default Example3State
```

---

## 步驟 4：儲存並操作

1. 儲存檔案
2. 在瀏覽器中點選 **「3. State」**
3. **手動操作**：
   - 點擊 **+1**：數字增加
   - 點擊 **-1**：數字減少
   - 點擊 **歸零**：數字回到 0

---

## 重點整理

- `const [count, setCount] = useState(0)`：建立狀態
- `onClick={() => setCount(count + 1)}`：點擊時更新狀態
- State 改變 → 觸發重新渲染 → 畫面更新

---

## 完成

範例 3 已完成！繼續 [範例 4：useEffect](範例4-useEffect.md)。

---

[上一範例：範例 2 - Props](範例2-Props.md) | [下一範例：範例 4 - useEffect](範例4-useEffect.md)
