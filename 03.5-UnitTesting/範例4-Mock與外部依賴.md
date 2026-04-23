# 範例 4：Mock fetch 與外部依賴

## 目標

- 測試「會呼叫 API」的函式，但不真的打網路
- 熟悉 Vitest 的 Mock（spy / mockImplementation）

---

## 範例：包一層資料存取函式

```ts
// src/api.ts
export async function getProfile(userId: string) {
  const res = await fetch(`/api/users/${userId}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<{ id: string; name: string }>;
}
```

---

## 測試：Mock `fetch`

```ts
// src/api.test.ts
import { describe, expect, it, vi } from "vitest";
import { getProfile } from "./api";

describe("getProfile", () => {
  it("returns profile json", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        return new Response(JSON.stringify({ id: "u1", name: "Ada" }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      })
    );

    await expect(getProfile("u1")).resolves.toEqual({ id: "u1", name: "Ada" });
  });

  it("throws when response is not ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response("bad", { status: 500 }))
    );

    await expect(getProfile("u2")).rejects.toThrow("HTTP 500");
  });
});
```

> 若你的執行環境沒有 `Response`（極少數情況），可改用 `undici` 或改寫為「注入 fetch」的設計。

