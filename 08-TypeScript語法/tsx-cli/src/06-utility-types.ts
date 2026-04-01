/**
 * 範例 6：常用工具型別與型別斷言 — 指令列練習
 *
 * 執行：npm run 06   或   npx tsx src/06-utility-types.ts
 * 講義：../範例6-工具型別與型別斷言.md
 *
 * ─── 使用方式 ───────────────────────────────────────────────────
 *  本檔已附上「示範程式碼」，執行後可看到預期輸出。
 *  建議先閱讀講義，再清空本檔自行重寫，最後對照此示範確認。
 * ────────────────────────────────────────────────────────────────
 */

// ─── 基礎介面（步驟 1～4 共用）──────────────────────────────
interface User {
  id: number;
  name: string;
  email: string;
}

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;
}

// ─── 步驟 1：Partial<T> ───────────────────────────────────────
type PartialUser = Partial<User>;
// 等同於：{ id?: number; name?: string; email?: string }

function updateUser(id: number, changes: Partial<User>): void {
  console.log(`更新 id=${id}：`, changes);
}

updateUser(1, { name: "小明" });                          // 只傳 name
updateUser(2, { name: "小華", email: "x@x.com" });        // 傳兩個欄位

// ─── 步驟 2：Required<T> ──────────────────────────────────────
interface Config {
  host?: string;
  port?: number;
}

type StrictConfig = Required<Config>;
// 等同於：{ host: string; port: number }

const cfg: StrictConfig = { host: "localhost", port: 3000 };
console.log("Config:", cfg.host, cfg.port);

// ─── 步驟 3：Pick<T, K> ───────────────────────────────────────
type ArticlePreview = Pick<Article, "id" | "title" | "author">;

const preview: ArticlePreview = {
  id: 1,
  title: "TypeScript 入門",
  author: "小明",
};
console.log("ArticlePreview:", preview.title, "by", preview.author);

// ─── 步驟 4：Omit<T, K> ───────────────────────────────────────
type NewArticle = Omit<Article, "id" | "createdAt">;

const draft: NewArticle = {
  title: "Vite 快速上手",
  content: "Vite 是下一代前端工具…",
  author: "小華",
};
console.log("NewArticle（無 id/createdAt）:", draft.title);

// ─── 步驟 5：as const ─────────────────────────────────────────
const DIRECTIONS = {
  up: "UP",
  down: "DOWN",
  left: "LEFT",
  right: "RIGHT",
} as const;

type Direction = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
// Direction = "UP" | "DOWN" | "LEFT" | "RIGHT"

function move(dir: Direction): void {
  console.log("移動：", dir);
}
move(DIRECTIONS.up);    // UP
move(DIRECTIONS.left);  // LEFT
// move("DIAGONAL")     // ❌ 不在 Direction 裡

// ─── 步驟 6：型別斷言（as）───────────────────────────────────
const raw = JSON.parse('{"id":1,"role":"admin"}') as { id: number; role: string };
console.log("JSON as：id =", raw.id, "role =", raw.role);

// ─── 步驟 7：非空斷言（!）────────────────────────────────────
// 建議優先用可選鏈或 if 判斷，但以下示範 ! 的語法：
const names = ["小明", "小華"];
const first: string = names[0]!; // 確定第 0 個一定存在
console.log("first:", first);

// ─── 步驟 8：unknown vs any ───────────────────────────────────
function processAny(value: any) {
  // TypeScript 不阻止，但若 value 不是字串，執行期會炸
  // console.log(value.toUpperCase())
  console.log("any value:", value);
}

function processUnknown(value: unknown) {
  if (typeof value === "string") {
    console.log("unknown string:", value.toUpperCase()); // 型別安全
  } else {
    console.log("unknown 非字串：", typeof value);
  }
}

processAny(42);
processUnknown("hello");    // HELLO
processUnknown(123);        // unknown 非字串：number

// ─── 預期輸出 ─────────────────────────────────────────────────
// 更新 id=1： { name: '小明' }
// 更新 id=2： { name: '小華', email: 'x@x.com' }
// Config: localhost 3000
// ArticlePreview: TypeScript 入門 by 小明
// NewArticle（無 id/createdAt）: Vite 快速上手
// 移動： UP
// 移動： LEFT
// JSON as：id = 1 role = admin
// first: 小明
// any value: 42
// unknown string: HELLO
// unknown 非字串： number
