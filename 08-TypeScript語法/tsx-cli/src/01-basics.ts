/**
 * 範例 1：變數與基本型別 — 指令列練習
 *
 * 執行：npm run 01   或   npx tsx src/01-basics.ts
 * 講義：../範例1-變數與基本型別.md
 * 網頁版：../examples/01-basics/
 *
 * ─── 使用方式 ───────────────────────────────────────────────────
 *  本檔已附上「示範程式碼」，執行後可看到預期輸出。
 *  建議先閱讀講義，再清空本檔自行重寫，最後對照此示範確認。
 * ────────────────────────────────────────────────────────────────
 */

// ─── 步驟 1：const 與 let ──────────────────────────────────────
const pi = 3.14;
// pi = 3  // ❌ const 不可重新賦值

let score = 0;
score = 85;
console.log("score:", score); // 85

// ─── 步驟 2：型別註解 ─────────────────────────────────────────
const userName: string = "小明";
const age: number = 18;
const passed: boolean = true;

console.log(`姓名：${userName}，年齡：${age}，通過：${passed}`);
// const wrong: number = '一百'  // ❌ 型別不符

// ─── 步驟 3：型別推斷 ─────────────────────────────────────────
const title = "Hello";   // TypeScript 推斷為 string
const count = 10;        // 推斷為 number
const ok = false;        // 推斷為 boolean

// 先宣告、晚賦值時建議明確標型別
let total: number;
total = 0;
total = total + 1;
console.log("total:", total); // 1

// ─── 步驟 4：bigint（選讀）───────────────────────────────────
const big: bigint = 9007199254740993n;
console.log("bigint:", big); // 9007199254740993n

// ─── 步驟 5：綜合範例 ─────────────────────────────────────────
const appName = "TS 練習";
let visitCount: number = 0;

function tick() {
  visitCount = visitCount + 1;
  console.log(`${appName}：第 ${visitCount} 次`);
}

tick(); // TS 練習：第 1 次
tick(); // TS 練習：第 2 次

// ─── 預期輸出 ─────────────────────────────────────────────────
// score: 85
// 姓名：小明，年齡：18，通過：true
// total: 1
// bigint: 9007199254740993n
// TS 練習：第 1 次
// TS 練習：第 2 次
