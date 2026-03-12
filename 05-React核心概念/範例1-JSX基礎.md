# 範例 1：JSX 基礎

## 目標

學會 JSX 語法，以及用 `{}` 大括號插入 JavaScript 表達式。完成本範例後，範例 1 的區塊將顯示變數、運算與函式呼叫的結果。

---

## 前置條件

- 已完成 [範例 0：建立專案](範例0-建立專案.md)
- 專案可正常執行（`npm run dev`）

---

## 步驟 1：認識 JSX

JSX 是 JavaScript 的擴充語法，讓你在程式碼中直接寫類似 HTML 的標籤。用 `{}` 大括號可以插入任何 JavaScript 表達式。

---

## 步驟 2：開啟並修改 Example1JSX.tsx

開啟 `src/examples/Example1JSX.tsx`，將**整個檔案內容**替換為：

```tsx
function Example1JSX() {
  const userName = '小明'
  const score = 85

  return (
    <div className="example-card">
      <h2>範例 1：JSX 基礎</h2>
      <p className="hint">👆 試著觀察畫面上如何用 <code>{'{}'}</code> 顯示變數與運算結果</p>

      <section>
        <h3>插入變數</h3>
        <p>你好，{userName}！</p>
      </section>

      <section>
        <h3>插入運算（三元運算子）</h3>
        <p>分數 {score}，及格了嗎？{score >= 60 ? '是 ✓' : '否 ✗'}</p>
      </section>

      <section>
        <h3>插入函式呼叫</h3>
        <p>大寫名字：{userName.toUpperCase()}</p>
      </section>
    </div>
  )
}

export default Example1JSX
```

---

## 步驟 3：儲存並觀察

1. 儲存檔案（Vite 會自動重新載入）
2. 在瀏覽器中點選 **「1. JSX 基礎」**
3. 確認畫面顯示：
   - 「你好，小明！」
   - 「分數 85，及格了嗎？是 ✓」
   - 「大寫名字：小明」（應為大寫）

---

## 重點整理

| 語法 | 說明 |
|------|------|
| `{userName}` | 插入變數值 |
| `{score >= 60 ? '是' : '否'}` | 插入運算結果（三元運算子） |
| `{userName.toUpperCase()}` | 插入函式呼叫結果 |

**記住**：用 `{}` 包住 JavaScript 表達式，就能在 JSX 中顯示結果。

---

## 完成

範例 1 已完成！繼續 [範例 2：Props](範例2-Props.md)。

---

[上一範例：範例 0 - 建立專案](範例0-建立專案.md) | [下一範例：範例 2 - Props](範例2-Props.md)
