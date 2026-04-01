/**
 * 範例 2：函式與型別 — 網頁練習檔（第二階段）
 *
 * 建議先完成 `tsx-cli/src/02-functions.ts`（npm run 02），再於此檔延續或貼上程式。
 * 執行：此資料夾 `npm install` 後 `npm run dev`。
 * 輸出：瀏覽器 Console 或頁面上「頁面輸出」區塊。
 *
 * ─── 練習步驟（依講義 範例2 完成下列 TODO）─────────────────────
 */

// TODO 步驟1：宣告一個函式，參數與回傳值都標上型別
// function greet(name: string): string {
//   return `你好，${name}`
// }
// console.log(greet("小明"))

// TODO 步驟2：回傳值型別 — 試著省略後讓 TypeScript 自動推斷
// function add(a: number, b: number) {   // 回傳型別由 TypeScript 推斷
//   return a + b
// }
// console.log("add:", add(3, 4))

// TODO 步驟3：用箭頭函式改寫 greet 或 add
// const multiply = (a: number, b: number): number => a * b
// console.log("multiply:", multiply(6, 7))

// TODO 步驟4：選用參數 — 在參數後加 ? 使其可省略
// function introduce(name: string, age?: number): string {
//   if (age !== undefined) return `${name}，${age} 歲`
//   return name
// }
// console.log(introduce("小明"))
// console.log(introduce("小華", 20))

// TODO 步驟5：預設參數與 void 回傳型別
// function createLabel(text: string, prefix = "標籤"): string {
//   return `${prefix}：${text}`
// }
// console.log(createLabel("重要"))
// console.log(createLabel("警告", "注意"))

// TODO 步驟7：綜合練習（貼上並執行講義的 formatPrice / printInvoice）
// function formatPrice(amount: number, currency = "TWD"): string {
//   return `${currency} ${amount.toFixed(0)}`
// }
// function printInvoice(title: string, total?: number): void {
//   console.log(`單據：${title}`)
//   if (total !== undefined) console.log(formatPrice(total))
// }
// printInvoice("午餐")
// printInvoice("書籍", 350)

// ─── 小練習 ──────────────────────────────────────────────────────
// 1. 寫 isPassing(score: number): boolean，>= 60 時回傳 true
// 2. 寫 repeat(text: string, times = 1): string，回傳重複字串
// 3. 讓某函式宣告回傳 number 但有路徑沒有 return，觀察 TypeScript 的警告
