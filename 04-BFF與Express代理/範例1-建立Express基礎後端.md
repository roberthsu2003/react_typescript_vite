# 範例 1：建立 Express 基礎後端

## 目標

在這一個範例中，我們要為 `bff-example` 專案加入後端伺服器的能力。我們將建立一個簡單的 Express 伺服器，並確認它能夠順利啟動跑起來。這會是我們專屬的 API 代理（Proxy）。

> **提示**：如果這一步有順利完成，那就代表你的 Node.js 能順利運行後端程式了！

---

## 步驟 1：建立 server.ts

在我們剛才建立好的 `server` 資料夾裡面，新增一個名為 `server.ts` 的檔案。

請在 `server/server.ts` 中填入以下程式碼：

```typescript
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware 設置
app.use(cors()); // 允許跨域請求 (測試階段非常方便)
app.use(express.json()); // 讓 Express 可以解析來自前端的 JSON 格式資料

// 建立一個簡單的 GET API，用來測試伺服器是否正常運作
app.get('/api/status', (req, res) => {
  res.json({ message: 'BFF 伺服器運作正常！', status: 'OK' });
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`[Server] Express 伺服器已啟動: http://localhost:${PORT}`);
});
```

這段程式碼做的事情很簡單：我們建立了一個 Express 應用程式，並監聽在 `3000` 或是由環境變數指定的 Port 號上，最後暴露了一支 `/api/status` 來回報伺服器狀態。

---

## 步驟 2：加入啟動後端的指令

打開專案根目錄下的 `package.json`，找到 `"scripts"` 區塊。我們需要新增一個專門用來開發階段啟動後端的指令。

你可以加入一條 **`"dev:server": "ts-node server/server.ts"`** 的設定：

```json
  "scripts": {
    "dev": "vite",
    "dev:server": "ts-node server/server.ts",  // 增加這行！
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```

這行指令告訴 npm，當我們執行 `dev:server` 時，請使用 `ts-node`（一個可以不需編譯、直接執行 TypeScript 檔案的工具）去執行我們的 `server.ts`。

---

## 步驟 3：測試啟動伺服器

打開終端機，確保你現在位於 `bff-example` 資料夾內，輸入以下指令：

```bash
npm run dev:server
```

如果一切順利，你應該會在終端機看到類似這樣的啟動訊息：
```text
[Server] Express 伺服器已啟動: http://localhost:3000
```

恭喜！你的後端伺服器已經成功啟動囉。

你可以打開瀏覽器，輸入網址：[http://localhost:3000/api/status](http://localhost:3000/api/status)。
畫面應該會顯示 `{"message":"BFF 伺服器運作正常！","status":"OK"}`，表示你的後端已經成功收到請求並回傳資料了！

確認沒問題後，回到終端機按下 `Ctrl + C` 終止伺服器運作，準備進入下一個範例。

---

[下一範例：範例 2 - 串接 Gemini API 與保護金鑰](範例2-串接GeminiAPI與保護金鑰.md)
