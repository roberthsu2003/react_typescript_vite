# 範例 2：React 元件測試（Testing Library）

## 目標

- 在 JSDOM 環境測試 React 元件
- 用 Testing Library 模擬使用者操作（click / input）

---

## 必要套件

```bash
npm i -D vitest jsdom
npm i -D @testing-library/react @testing-library/jest-dom
```

若你是 Vite 專案，請在 `vite.config.ts` 設定：

```ts
export default defineConfig({
  test: { environment: "jsdom", setupFiles: "./src/test/setup.ts" }
});
```

並新增 `src/test/setup.ts`：

```ts
import "@testing-library/jest-dom/vitest";
```

---

## 範例：計數器元件

新增元件：

```tsx
// src/Counter.tsx
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div aria-label="count">{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}
```

新增測試：

```tsx
// src/Counter.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("increments when clicking +1", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    expect(screen.getByLabelText("count")).toHaveTextContent("0");
    await user.click(screen.getByRole("button", { name: "+1" }));
    expect(screen.getByLabelText("count")).toHaveTextContent("1");
  });
});
```

> 若你沒有安裝 `@testing-library/user-event`，請先安裝：
>
> ```bash
> npm i -D @testing-library/user-event
> ```

