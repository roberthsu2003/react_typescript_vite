/**
 * 範例 4：陣列與泛型入門 — 網頁練習檔（第二階段）
 *
 * 建議先完成 `tsx-cli/src/04-arrays-generics.ts`（npm run 04），再於此檔延續或貼上程式。
 * 執行：此資料夾 `npm install` 後 `npm run dev`。
 * 輸出：瀏覽器 Console 或頁面上「頁面輸出」區塊。
 *
 * ─── 練習步驟（依講義 範例4 完成下列 TODO）─────────────────────
 */

// TODO 步驟1：陣列型別的兩種寫法 — 試試 number[] 與 Array<string>
// const nums: number[] = [1, 2, 3]
// const tags: Array<string> = ["ts", "vite"]
// console.log(nums, tags)

// TODO 步驟2：物件陣列 — 定義 interface 後宣告 Task[]
// interface Task { id: number; title: string }
// const tasks: Task[] = [
//   { id: 1, title: "寫文件" },
//   { id: 2, title: "寫測試" },
// ]
// console.log(tasks.map(t => t.title))

// TODO 步驟3：唯讀陣列 — 用 readonly 或 ReadonlyArray<T>
// const seq: readonly number[] = [1, 2, 3]
// seq.push(4)  // ← 試著取消這行的註解，觀察錯誤

// TODO 步驟4：泛型函式 — 寫一個 firstItem<T>(items: T[]): T | undefined
// function firstItem<T>(items: T[]): T | undefined {
//   return items[0]
// }
// console.log(firstItem([10, 20]))   // 10
// console.log(firstItem(["a"]))      // a

// TODO 步驟5（選做）：Promise<T> — 宣告回傳 Promise<number> 的 async function
// async function loadId(): Promise<number> { return 42 }
// const id = await loadId()
// console.log("id:", id)

// TODO 步驟7：綜合練習（貼上並執行講義的 Score / average / mapNames 範例）

// ─── 小練習 ──────────────────────────────────────────────────────
// 1. 宣告 const words: string[]，放 3 個英文單字，.map 轉大寫後印出
// 2. 寫 last<T>(items: T[]): T | undefined，回傳最後一個元素
// 3. 把 readonly number[] 傳給有 .push 的函式，觀察型別錯誤
