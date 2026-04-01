/**
 * 範例 4：陣列與泛型入門 — 指令列練習
 *
 * 執行：npm run 04   或   npx tsx src/04-arrays-generics.ts
 * 講義：../範例4-陣列與泛型入門.md
 * 網頁版：../examples/04-arrays-generics/
 *
 * ─── 使用方式 ───────────────────────────────────────────────────
 *  本檔已附上「示範程式碼」，執行後可看到預期輸出。
 *  建議先閱讀講義，再清空本檔自行重寫，最後對照此示範確認。
 * ────────────────────────────────────────────────────────────────
 */

// ─── 步驟 1：陣列型別的兩種寫法 ──────────────────────────────
const nums: number[] = [1, 2, 3];
const tags: Array<string> = ["ts", "vite"];

console.log("nums:", nums);   // [1, 2, 3]
console.log("tags:", tags);   // ["ts", "vite"]

const scores: number[] = [];  // 空陣列要明確標型別，否則推斷為 never[]
scores.push(95);
console.log("scores:", scores);

// ─── 步驟 2：物件陣列 ─────────────────────────────────────────
interface Task {
  id: number;
  title: string;
}

const tasks: Task[] = [
  { id: 1, title: "寫文件" },
  { id: 2, title: "寫測試" },
];
console.log("tasks[0]:", tasks[0].title);

// ─── 步驟 3：唯讀陣列 ─────────────────────────────────────────
const seq: readonly number[] = [1, 2, 3];
// seq.push(4)  // ❌ readonly 陣列不能 push
console.log("seq:", seq);

const labels: ReadonlyArray<string> = ["a", "b"];
console.log("labels:", labels);

// ─── 步驟 4：泛型函式 ─────────────────────────────────────────
function firstItem<T>(items: T[]): T | undefined {
  return items[0];
}

const n = firstItem([10, 20, 30]);   // T 推斷為 number
const s = firstItem(["a", "b"]);     // T 推斷為 string
console.log("firstItem(number):", n); // 10
console.log("firstItem(string):", s); // a

// ─── 步驟 5：Promise<T>（選讀）───────────────────────────────
async function loadId(): Promise<number> {
  return 42;
}
const id = await loadId();
console.log("loadId:", id); // 42

// ─── 步驟 6：Record（選讀）───────────────────────────────────
type Locale = "zh" | "en";

const greetings: Record<Locale, string> = {
  zh: "你好",
  en: "Hello",
};
console.log("greetings:", greetings);

// ─── 步驟 7：綜合練習 ─────────────────────────────────────────
interface Score {
  name: string;
  value: number;
}

function average(scoreList: number[]): number {
  if (scoreList.length === 0) return 0;
  const sum = scoreList.reduce((a, b) => a + b, 0);
  return sum / scoreList.length;
}

function mapNames(rows: Score[]): string[] {
  return rows.map((r) => r.name);
}

const data: Score[] = [
  { name: "國文", value: 80 },
  { name: "數學", value: 92 },
];

console.log("平均:", average(data.map((d) => d.value)));   // 86
console.log("科目:", mapNames(data));                       // ["國文", "數學"]
