/**
 * 範例 1：變數與基本型別 — 網頁練習檔（第二階段）
 *
 * 建議先完成 `tsx-cli/src/01-basics.ts`（npm run 01），再於此檔延續或貼上程式。
 * 執行：此資料夾 `npm install` 後 `npm run dev`。
 * 輸出：瀏覽器 Console 或頁面上「頁面輸出」區塊。
 *
 * ─── 練習步驟（依講義 範例1 完成下列 TODO）─────────────────────
 */

// TODO 步驟1：宣告 const 與 let 並觀察差異
// const pi = 3.14
// let score = 0
// score = 85
// console.log("score:", score)

// TODO 步驟2：為變數加上型別註解（: string / : number / : boolean）
// const userName: string = "你的名字"
// const age: number = 20
// const passed: boolean = true
// console.log(`姓名：${userName}，年齡：${age}，通過：${passed}`)

// TODO 步驟3：型別推斷 — 宣告時有初始值可省略型別
// const title = "Hello"   // TypeScript 推斷為 string
// let total: number       // 先宣告，稍後賦值時需明確標型別
// total = 100
// console.log("total:", total)

// TODO 步驟4（選做）：試寫 bigint 字面量（數字後加 n）
// const big: bigint = 9007199254740993n
// console.log("bigint:", big)

// TODO 步驟5：綜合練習 — 複製並執行講義的 tick() 範例，確認看到兩行輸出
// const appName = "TS 練習"
// let visitCount: number = 0
// function tick() {
//   visitCount = visitCount + 1
//   console.log(`${appName}：第 ${visitCount} 次`)
// }
// tick()
// tick()

// ─── 小練習（完成後取消下方註解驗證）────────────────────────────
// 1. 宣告 const 字串表示你的暱稱，用 console.log 印出
// 2. 宣告 let score: number = 0，再改成 100，確認無型別錯誤
// 3. 故意把 boolean 變數賦值為數字，觀察編輯器的紅色底線
