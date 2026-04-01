/**
 * 範例 5：聯合型別與型別窄化 — 指令列練習
 *
 * 執行：npm run 05   或   npx tsx src/05-unions.ts
 * 講義：../範例5-聯合型別與型別窄化.md
 * 網頁版：../examples/05-unions/
 *
 * ─── 使用方式 ───────────────────────────────────────────────────
 *  本檔已附上「示範程式碼」，執行後可看到預期輸出。
 *  建議先閱讀講義，再清空本檔自行重寫，最後對照此示範確認。
 * ────────────────────────────────────────────────────────────────
 */

// ─── 步驟 1：聯合型別（A | B）────────────────────────────────
type Id = string | number;

let value: Id;
value = "user-1";
console.log("Id (string):", value);
value = 1001;
console.log("Id (number):", value);
// value = true  // ❌ boolean 不在 Id 內

// ─── 步驟 2：字面量型別 ───────────────────────────────────────
type Theme = "light" | "dark";
type Size = "S" | "M" | "L";

const theme: Theme = "dark";
const size: Size = "M";
console.log("theme:", theme, "size:", size);
// const bad: Theme = 'blue'  // ❌ 不在聯合裡

// ─── 步驟 3 & 4：typeof 窄化 ──────────────────────────────────
function printLength(x: string | number): void {
  if (typeof x === "string") {
    console.log("string 長度:", x.length);   // 此區塊 x 是 string
  } else {
    console.log("number toFixed:", x.toFixed(2)); // 此區塊 x 是 number
  }
}
printLength("hello");   // string 長度: 5
printLength(3.14159);   // number toFixed: 3.14

// ─── 步驟 5：null 排除 ────────────────────────────────────────
function getLength(s: string | null): number {
  if (s === null) return 0;
  return s.length;
}
console.log("getLength(null):", getLength(null));     // 0
console.log("getLength('hi'):", getLength("hi"));     // 2

// ─── 步驟 6：可區辨聯合（Discriminated Union）────────────────
type Success = { ok: true; data: string };
type Failure = { ok: false; error: string };
type Result = Success | Failure;

function handle(result: Result): void {
  if (result.ok) {
    console.log("成功:", result.data);   // 成功時才有 .data
  } else {
    console.log("失敗:", result.error);  // 失敗時才有 .error
  }
}
handle({ ok: true, data: "使用者資料" });  // 成功: 使用者資料
handle({ ok: false, error: "401" });      // 失敗: 401

// ─── 步驟 7：in 運算子（選讀）────────────────────────────────
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function speak(pet: Cat | Dog): void {
  if ("meow" in pet) {
    pet.meow();
  } else {
    pet.bark();
  }
}
speak({ meow: () => console.log("喵～") }); // 喵～
speak({ bark: () => console.log("汪！") }); // 汪！

// ─── 步驟 8：綜合練習 ─────────────────────────────────────────
type LoadState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; items: string[] }
  | { status: "error"; message: string };

function describe(state: LoadState): string {
  switch (state.status) {
    case "idle":    return "尚未開始";
    case "loading": return "載入中…";
    case "success": return `共 ${state.items.length} 筆`;
    case "error":   return `錯誤：${state.message}`;
  }
}

console.log(describe({ status: "success", items: ["a", "b"] })); // 共 2 筆
console.log(describe({ status: "error", message: "timeout" }));  // 錯誤：timeout
