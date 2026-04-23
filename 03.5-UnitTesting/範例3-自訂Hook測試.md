# 範例 3：自訂 Hook 測試

## 目標

- 測試自訂 Hook 的狀態變化與回傳值
- 了解「把邏輯抽成純函式」能大幅降低測試成本

---

## 範例：計算折扣價的 Hook

先把核心計算抽成純函式（最容易測）：

```ts
// src/discount.ts
export function calcDiscountPrice(price: number, offPercent: number) {
  const ratio = Math.max(0, Math.min(100, offPercent)) / 100;
  return Math.round(price * (1 - ratio));
}
```

Hook 只負責狀態與組裝：

```ts
// src/useDiscount.ts
import { useMemo, useState } from "react";
import { calcDiscountPrice } from "./discount";

export function useDiscount(initialOffPercent = 0) {
  const [offPercent, setOffPercent] = useState(initialOffPercent);

  const getFinal = useMemo(() => {
    return (price: number) => calcDiscountPrice(price, offPercent);
  }, [offPercent]);

  return { offPercent, setOffPercent, getFinal };
}
```

---

## 測試建議

1) 對 `calcDiscountPrice` 寫純函式測試（覆蓋邊界：<0、>100、四捨五入）
2) 若需要測 Hook，可用 Testing Library 的 `renderHook`（React 18+）：

```bash
npm i -D @testing-library/react
```

```ts
import { describe, expect, it } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useDiscount } from "./useDiscount";

describe("useDiscount", () => {
  it("updates discount percent", () => {
    const { result } = renderHook(() => useDiscount(10));
    expect(result.current.offPercent).toBe(10);
    act(() => result.current.setOffPercent(25));
    expect(result.current.offPercent).toBe(25);
  });
});
```

