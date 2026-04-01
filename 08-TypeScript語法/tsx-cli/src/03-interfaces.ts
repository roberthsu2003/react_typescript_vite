/**
 * 範例 3：interface 與 type — 指令列練習
 *
 * 執行：npm run 03   或   npx tsx src/03-interfaces.ts
 * 講義：../範例3-interface與type.md
 * 網頁版：../examples/03-interfaces/
 *
 * ─── 使用方式 ───────────────────────────────────────────────────
 *  本檔已附上「示範程式碼」，執行後可看到預期輸出。
 *  建議先閱讀講義，再清空本檔自行重寫，最後對照此示範確認。
 * ────────────────────────────────────────────────────────────────
 */

// ─── 步驟 1：用 interface 描述物件 ───────────────────────────
interface User {
  id: number;
  name: string;
  email: string;
}

const u: User = {
  id: 1,
  name: "小明",
  email: "ming@example.com",
};
console.log("User:", u.name, u.email);

// ─── 步驟 2：選用屬性與唯讀 ──────────────────────────────────
interface Product {
  readonly sku: string;
  title: string;
  discount?: number;
}

const p: Product = { sku: "A-001", title: "筆記本" };
console.log("Product:", p.title, "折扣:", p.discount ?? "無"); // 無
// p.sku = 'x'  // ❌ readonly 不可指定

// ─── 步驟 3：extends 繼承 ────────────────────────────────────
interface Named {
  name: string;
}

interface Member extends Named {
  memberSince: number;
}

const m: Member = { name: "小華", memberSince: 2024 };
console.log("Member:", m.name, "since", m.memberSince);

// ─── 步驟 4：type 別名 ────────────────────────────────────────
type Point = {
  x: number;
  y: number;
};

type ID = string | number;

type Admin = User & { role: "admin" };

const admin: Admin = { id: 99, name: "管理員", email: "admin@x.com", role: "admin" };
console.log("Admin role:", admin.role);

// ─── 步驟 5：interface vs type — 簡要對比 ────────────────────
// interface ：物件結構、可 extends、可合併宣告 → 多用於 Props / Entity
// type      ：聯合、交集、條件型別等更廣用途 → 多用於 ID = string | number

// ─── 步驟 6：綜合練習 ─────────────────────────────────────────
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

function summarize(items: Todo[]): string {
  const left = items.filter((t) => !t.done).length;
  return `共 ${items.length} 筆，未完成 ${left} 筆`;
}

const list: Todo[] = [
  { id: 1, title: "寫作業", done: false },
  { id: 2, title: "買菜", done: true },
];

console.log(summarize(list)); // 共 2 筆，未完成 1 筆
