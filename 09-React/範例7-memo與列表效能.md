# 範例 7：`memo`、key 與列表效能

## 目標

認識 **`React.memo`** 如何減少**不必要的子元件重繪**，以及列表渲染時 **`key`** 的正確使用；並建立簡單的**效能除錯**觀念（Profiler 選讀）。

---

## 前置條件

- 已完成 [範例 6：children 與組合模式](範例6-children與組合模式.md)  
- 建議已讀 [範例 2：useMemo 與 useCallback](範例2-useMemo與useCallback.md)

---

## 步驟 1：`React.memo`

```tsx
import { memo } from 'react'

type Props = { id: number; label: string }

export const Row = memo(function Row({ id, label }: Props) {
  console.log('render Row', id)
  return <li>{label}</li>
})
```

- 包裝後，若 **props 淺比較** 與上次相同，**不會**重繪該元件。  
- 若 props 傳入**每次新建**的物件或函式，`memo` 仍會視為改變 → 可搭配 `useCallback` / `useMemo`（見範例 2）。

---

## 步驟 2：列表與 `key`

```tsx
function List({ items }: { items: { id: number; text: string }[] }) {
  return (
    <ul>
      {items.map((item) => (
        <Row key={item.id} id={item.id} label={item.text} />
      ))}
    </ul>
  )
}
```

- **`key` 必須穩定**且在列表中**唯一**：協助 React 對應「哪一筆資料」對應哪一個元件實例。  
- **不要用陣列索引**當 `key`（若列表會排序、插入、刪除），否則狀態可能錯亂。  
- `key` 不會傳進子元件 props，僅供 React 使用。

---

## 步驟 3：何時需要 `memo`？

| 情況 | 建議 |
|------|------|
| 子元件很重、父常重繪 | 考慮 `memo` + 穩定 props |
| 子元件極輕量 | 不必過度優化 |
| 過度使用 | 程式變難讀，先以 Profiler 確認瓶頸 |

---

## 步驟 4：React DevTools Profiler（選讀）

安裝 [React Developer Tools](https://react.dev/learn/react-developer-tools)，使用 **Profiler** 錄製互動，查看「哪個元件 render 了幾次」，再決定是否加 `memo`/`useCallback`。

---

## 重點整理

| 主題 | 重點 |
|------|------|
| `memo` | props 未變則跳過重繪 |
| `key` | 穩定、唯一，不要用 index（若列表會變動） |
| `key` | 不會傳入子元件 |

---

## 小練習

1. 父元件每秒 `setState` 更新「時間字串」，子列表用 `memo` 包裝，確認 `Row` 是否在 props 未變時不重繪。  
2. 故意用 `index` 作 `key` 並在列表**開頭插入**新項目，觀察輸入框狀態是否錯位（若 `Row` 內有 input）。

---

## 完成

**恭喜！你已完成 09 - React 單元（進階）的範例 0～7。**

建議搭配 [08 - TypeScript 語法](../08-TypeScript語法/主題.md) 為 Props 與 Hook 回傳值加上型別，並在實際專案中透過 [06 - Remix](../06-remix/主題.md)、[07 - Next.js](../07-Next.js/主題.md) 驗證所學。

---

[上一範例：範例 6 - children 與組合模式](範例6-children與組合模式.md) | [回到本章主題](主題.md)
