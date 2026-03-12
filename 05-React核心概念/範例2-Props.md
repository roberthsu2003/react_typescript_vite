# 範例 2：Props（屬性）

## 目標

學會從父元件傳入參數給子元件，並定義型別。完成本範例後，範例 2 的區塊將顯示使用 Props 的 Greeting 元件。

---

## 前置條件

- 已完成 [範例 1：JSX 基礎](範例1-JSX基礎.md)

---

## 步驟 1：認識 Props

Props 是父元件傳給子元件的參數，讓元件可以接收不同資料、達到重複使用。使用 `interface` 可定義 Props 型別，`age?` 表示可選屬性。

---

## 步驟 2：修改 Example2Props.tsx

開啟 `src/examples/Example2Props.tsx`，將**整個檔案內容**替換為：

```tsx
interface GreetingProps {
  name: string
  age?: number
}

function Greeting({ name, age }: GreetingProps) {
  return (
    <div className="greeting-box">
      <h3>你好，{name}！</h3>
      {age !== undefined && <p>今年 {age} 歲</p>}
    </div>
  )
}

function Example2Props() {
  return (
    <div className="example-card">
      <h2>範例 2：Props（屬性）</h2>
      <p className="hint">👆 觀察同一個 Greeting 元件，傳入不同參數會顯示不同內容</p>

      <section>
        <h3>有傳 name 和 age</h3>
        <Greeting name="小明" age={18} />
      </section>

      <section>
        <h3>只傳 name（age 為可選）</h3>
        <Greeting name="小華" />
      </section>
    </div>
  )
}

export default Example2Props
```

---

**重點**：`Greeting` 是子元件，`Example2Props` 是父元件，透過 `name`、`age` 傳遞參數。

---

## 步驟 3：儲存並觀察

1. 儲存檔案
2. 在瀏覽器中點選 **「2. Props」**
3. 確認畫面顯示：
   - 第一個區塊：「你好，小明！」、「今年 18 歲」
   - 第二個區塊：只有「你好，小華！」（無年齡）

---

## 重點整理

- `interface GreetingProps`：定義 Props 型別，`age?` 表示可選
- `<Greeting name="小明" age={18} />`：傳入字串用 `"`，數字用 `{}`
- `{age !== undefined && <p>...</p>}`：有 age 才顯示

---

## 完成

範例 2 已完成！繼續 [範例 3：State](範例3-State.md)。

---

[上一範例：範例 1 - JSX 基礎](範例1-JSX基礎.md) | [下一範例：範例 3 - State](範例3-State.md)
