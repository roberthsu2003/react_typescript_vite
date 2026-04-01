/**
 * 範例 3：interface 與 type — 網頁練習檔（第二階段）
 *
 * 建議先完成 `tsx-cli/src/03-interfaces.ts`（npm run 03），再於此檔延續或貼上程式。
 * 執行：此資料夾 `npm install` 後 `npm run dev`。
 * 輸出：瀏覽器 Console 或頁面上「頁面輸出」區塊。
 *
 * ─── 練習步驟（依講義 範例3 完成下列 TODO）─────────────────────
 */

// TODO 步驟1：用 interface 描述物件（User：id、name、email）
// interface User {
//   id: number
//   name: string
//   email: string
// }
// const u: User = { id: 1, name: "小明", email: "ming@example.com" }
// console.log("User:", u.name)

// TODO 步驟2：在 interface 中加入 readonly 與選用屬性（?）
// interface Product {
//   readonly sku: string
//   title: string
//   discount?: number
// }
// const p: Product = { sku: "A-001", title: "筆記本" }
// console.log("Product:", p.title, p.discount ?? "無折扣")

// TODO 步驟3：extends — 讓新 interface 繼承已有的 interface
// interface Named { name: string }
// interface Member extends Named { memberSince: number }
// const m: Member = { name: "小華", memberSince: 2024 }
// console.log("Member:", m.name, m.memberSince)

// TODO 步驟4：用 type 定義物件結構，並試試聯合與交集
// type Point = { x: number; y: number }
// type ID = string | number
// type Admin = User & { role: "admin" }

// TODO 步驟6：綜合練習（貼上並執行講義的 Todo / summarize 範例）
// interface Todo { id: number; title: string; done: boolean }
// function summarize(items: Todo[]): string { ... }
// const list: Todo[] = [...]
// console.log(summarize(list))

// ─── 小練習 ──────────────────────────────────────────────────────
// 1. 定義 interface Book（title, author, year?），建立一個符合的常數
// 2. 定義 type Point3D，在 Point 基礎上加入 z: number（用交集 &）
// 3. 讓某函式接受 interface 參數，故意少傳一個必填屬性，觀察錯誤
