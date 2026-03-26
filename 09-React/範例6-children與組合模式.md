# 範例 6：`children` 與組合模式

## 目標

運用 **`children`** 與**組合**（Composition）組裝 UI：把「外框、標題、內容」拆開，讓父元件決定內容，而非在子元件內寫死所有變體。

---

## 前置條件

- 已完成 [範例 5：表單與受控元件進階](範例5-表單與受控元件進階.md)

---

## 步驟 1：`children` 是什麼？

在元件的 props 中，`children` 代表**標籤內部的內容**：

```tsx
function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="card">
      {children}
    </section>
  )
}

// 使用
<Card>
  <h2>標題</h2>
  <p>說明文字</p>
</Card>
```

`React.ReactNode` 可涵蓋字串、元素、陣列、`null` 等，適合當 `children` 型別。

---

## 步驟 2：多個插槽（Slots）

若需要「標題區」與「內容區」分開：

```tsx
type Props = {
  title: React.ReactNode
  children: React.ReactNode
}

function Panel({ title, children }: Props) {
  return (
    <article>
      <header>{title}</header>
      <div>{children}</div>
    </article>
  )
}
```

或沿用 `children` + `title` prop，依專案命名習慣選擇。

---

## 步驟 3：與「繼承很多變體」的比較

| 做法 | 說明 |
|------|------|
| 一個元件用 `variant="a|b|c"` 分支 | 變體一多時難維護 |
| **組合**：小元件 + `children` | 彈性高，符合 React 常見實務 |

React 官方文件亦推廣 **composition over inheritance**。

---

## 重點整理

- `children`：把內容交給父層決定。  
- 型別用 `React.ReactNode` 即可涵蓋多數情況。  
- 複雜版面可拆成多個 props（`header`、`footer`）傳入 `ReactNode`。

---

## 小練習

1. 實作 `Modal`：`title`、`children`、底部「關閉」按鈕。  
2. 用 `Card` 包兩段不同內容，觀察是否無需修改 `Card` 本身。

---

## 完成

繼續 [範例 7：memo、key 與列表效能](範例7-memo與列表效能.md)。

---

[上一範例：範例 5 - 表單與受控元件進階](範例5-表單與受控元件進階.md) | [下一範例：範例 7 - memo 與列表效能](範例7-memo與列表效能.md)
