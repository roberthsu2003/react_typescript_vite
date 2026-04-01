/**
 * 範例 2：函式與型別 — 指令列練習
 *
 * 執行：npm run 02   或   npx tsx src/02-functions.ts
 * 講義：../範例2-函式與型別.md
 * 網頁版：../examples/02-functions/
 *
 * ─── 使用方式 ───────────────────────────────────────────────────
 *  本檔已附上「示範程式碼」，執行後可看到預期輸出。
 *  建議先閱讀講義，再清空本檔自行重寫，最後對照此示範確認。
 * ────────────────────────────────────────────────────────────────
 */

// ─── 步驟 1：函式宣告與參數型別 ──────────────────────────────
function greet(name: string): string {
  return `你好，${name}`;
}
console.log(greet("小明")); // 你好，小明
// greet(123)  // ❌ 型別錯誤

// ─── 步驟 2：回傳值型別與推斷 ────────────────────────────────
function add(a: number, b: number): number {
  return a + b;
}
console.log("加法:", add(3, 4)); // 加法: 7

// 簡短函式可讓 TypeScript 自動推斷回傳型別
const double = (n: number) => n * 2;
console.log("double:", double(5)); // double: 10

// ─── 步驟 3：箭頭函式 ─────────────────────────────────────────
const multiply = (a: number, b: number): number => a * b;
console.log("multiply:", multiply(3, 6)); // multiply: 18

const clamp = (value: number, min: number, max: number): number => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};
console.log("clamp:", clamp(150, 0, 100)); // clamp: 100

// ─── 步驟 4：選用參數（?）────────────────────────────────────
function introduce(name: string, age?: number): string {
  if (age !== undefined) {
    return `${name}，${age} 歲`;
  }
  return name;
}
console.log(introduce("小明"));        // 小明
console.log(introduce("小華", 20));    // 小華，20 歲

// ─── 步驟 5：預設參數與 void ──────────────────────────────────
function createLabel(text: string, prefix = "標籤"): string {
  return `${prefix}：${text}`;
}
console.log(createLabel("重要"));              // 標籤：重要
console.log(createLabel("警告", "注意"));      // 注意：警告

function logScore(s: number): void {
  console.log(`分數：${s}`);
}
logScore(88); // 分數：88

// ─── 步驟 6：never（選讀）────────────────────────────────────
function fail(message: string): never {
  throw new Error(message);
}
// fail("發生錯誤")  // 取消註解可測試

// ─── 步驟 7：綜合練習 ─────────────────────────────────────────
function formatPrice(amount: number, currency = "TWD"): string {
  return `${currency} ${amount.toFixed(0)}`;
}

function printInvoice(title: string, total?: number): void {
  console.log(`單據：${title}`);
  if (total !== undefined) {
    console.log(formatPrice(total));
  }
}

printInvoice("午餐");           // 單據：午餐
printInvoice("書籍", 350);      // 單據：書籍 \n TWD 350
