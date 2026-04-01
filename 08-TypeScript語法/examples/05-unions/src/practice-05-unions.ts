/**
 * 範例 5：聯合型別與型別窄化 — 網頁練習檔（第二階段）
 *
 * 建議先完成 `tsx-cli/src/05-unions.ts`（npm run 05），再於此檔延續或貼上程式。
 * 執行：此資料夾 `npm install` 後 `npm run dev`。
 * 輸出：瀏覽器 Console 或頁面上「頁面輸出」區塊。
 *
 * ─── 練習步驟（依講義 範例5 完成下列 TODO）─────────────────────
 */

// TODO 步驟1：聯合型別 — 宣告 type Id = string | number，試賦值兩種型別
// type Id = string | number
// let value: Id = "user-1"
// value = 1001
// console.log("Id:", value)

// TODO 步驟2：字面量型別 — 讓值只能是幾個固定字串
// type Theme = "light" | "dark"
// const theme: Theme = "dark"
// console.log("theme:", theme)

// TODO 步驟4：typeof 窄化 — 在 if 分支裡分別使用 .length 與 .toFixed
// function printLength(x: string | number): void {
//   if (typeof x === "string") {
//     console.log("長度:", x.length)
//   } else {
//     console.log("數值:", x.toFixed(2))
//   }
// }
// printLength("hello")
// printLength(3.14)

// TODO 步驟5：null 排除 — 寫 getLength(s: string | null): number
// function getLength(s: string | null): number {
//   if (s === null) return 0
//   return s.length
// }
// console.log(getLength(null), getLength("hi"))

// TODO 步驟6：可區辨聯合 — 用 ok: true/false 區分 Success / Failure
// type Success = { ok: true; data: string }
// type Failure = { ok: false; error: string }
// type Result = Success | Failure
// function handle(r: Result): void { ... }

// TODO 步驟8：綜合練習（貼上並執行講義的 LoadState / describe 範例）

// ─── 小練習 ──────────────────────────────────────────────────────
// 1. 定義 type Role = "guest" | "user" | "admin"，寫 canEdit(role: Role): boolean
// 2. 寫 addOne(x: number | string)：number 直接 +1，string 先 Number() 再 +1
// 3. 建立 type ApiResult = { ok: true; value: number } | { ok: false; reason: string }
//    用 if(result.ok) 分別存取 value 與 reason
