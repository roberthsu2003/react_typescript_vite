# 範例 4：useEffect

## 目標

學會用 `useEffect` 處理副作用，例如計時器、API 呼叫。完成本範例後，範例 4 的區塊將顯示每秒遞增的計時器。

---

## 先搞懂：`useEffect` 是什麼？

### 一句話

**`useEffect` 是 React 提供的 Hook，用來在「畫面依某次狀態更新完之後」，另外執行一段你指定的程式。**

它處理的不是「畫面上要長什麼樣子」（那是 `return` 裡的 JSX），而是：**跟外部世界有關、或會隨時間持續發生的事**——例如開計時器、向伺服器要資料、訂閱事件等。這類事情在文件裡常叫做**副作用**（side effect）：除了「算出這一版的畫面」以外，還多做了別的事。

### 跟 `useState`、元件本體差在哪？

| | 在做什麼？ |
|---|------------|
| **`useState`** | 記住「會變的資料」，讓畫面可以跟著變。 |
| **元件函式裡的 `return (...)`** | 描述**這一刻**畫面上要有什麼（UI）。 |
| **`useEffect`** | 在 React **把這次畫面處理好之後**，去執行：**開計時器、打 API、加監聽** 等；必要時還能在元件卸載時**清掉**這些東西。 |

可以想成：

- **State + JSX**：負責「**顯示什麼**」。
- **useEffect**：負責「**在背景跟外界互動、或定時做事**」，而且由 React 幫你決定**什麼時機執行、什麼時機清乾淨**。

### 為什麼不直接把 `setInterval` 寫在元件函式最上面？

元件函式**每次狀態一改、需要重畫**，就會再執行一次。若把 `setInterval` 直接寫在函式裡、沒有 `useEffect` 包起來，等於**每重畫一次就再開一個新的計時器**，會變成很多個計時器同時跑，秒數也會怪、還浪費資源。

`useEffect` 搭配 **`[]` 依賴**（見下方），可以表達：**「只在元件第一次出現在畫面上時」開一次計時器**，並在離開時關掉——這正是本範例要做的事。

### 本範例在幹嘛？（對照程式）

1. **`useState`** 存「已經過了幾秒」這個數字，畫面顯示它。  
2. **`useEffect(..., [])`**：元件掛載後**只執行一次**，裡面 `setInterval` 每秒把秒數 +1。  
3. **`return () => clearInterval(timer)`**：元件被卸載（或 effect 要重跑前）時**清掉計時器**，避免背景還在跑。

---

## 前置條件

- 已完成 [範例 3：State](範例3-State.md)

---

## 步驟 1：再談「為何用 useEffect？」（進階一點的說法）

### 為何要使用 useEffect？

React 希望元件在**描述畫面**時盡量是**純的**（同樣的 state，同樣的畫面意圖）——這樣比較好推論與除錯。但實際開發中，我們還需要：

- **計時器**：`setInterval`、`setTimeout`
- **API 呼叫**：從伺服器取得資料
- **訂閱**：WebSocket、事件監聽
- **DOM 操作**：手動 focus、捲動

若直接在元件函式內執行這些操作，會造成：

1. **每次重新渲染都執行**：可能重複發送 API、建立多個計時器
2. **渲染與副作用混雜**：難以預測、除錯困難
3. **無法正確清理**：元件卸載時計時器或訂閱可能未清除，導致記憶體洩漏

`useEffect` 讓 React 在**適當的時機**（掛載後、更新後、卸載前）執行副作用，並支援清理邏輯，是處理這類需求的標準方式。

---

### useEffect() 的參數與 return 說明

```ts
useEffect(setup, dependencies?)
```

| 項目 | 說明 |
|------|------|
| **第一個參數（setup）** | 要執行的函式。React 會在 DOM 更新後、瀏覽器繪製前呼叫它。 |
| **第二個參數（dependencies）** | 依賴陣列，可選。 |
| **return 值** | 可選的**清理函式**。React 會在元件卸載時、或下次 effect 執行前呼叫。 |

**依賴陣列的行為：**

| 依賴陣列 | 執行時機 |
|----------|----------|
| 不傳或省略 | 每次渲染後都執行 |
| `[]` 空陣列 | 只在元件**掛載時**執行一次 |
| `[a, b]` 有值 | 當 `a` 或 `b` 改變時才重新執行 |

**return 清理函式：**

- 用於清除計時器、取消訂閱、移除事件監聽等
- 若 effect 有 return 函式，React 會在**卸載元件**或**下次執行 effect 前**先呼叫它
- 不 return 則不需要清理

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

- **`useEffect`**：在畫面更新流程之後執行「副作用」（計時器、API 等），並可附**清理函式**。
- `setInterval(..., 1000)`：每 1000 毫秒（1 秒）執行一次。
- `setSeconds((prev) => prev + 1)`：用函式形式更新，避免閉包問題。
- `return () => clearInterval(timer)`：元件卸載（或 effect 重跑前）清除計時器，避免記憶體洩漏。

---

## 完成

範例 4 已完成！繼續 [範例 5：事件處理](範例5-事件處理.md)。

---

[上一範例：範例 3 - State](範例3-State.md) | [下一範例：範例 5 - 事件處理](範例5-事件處理.md)
