# 範例 2：串接 Gemini API 與保護金鑰

## 目標

前面建立的只是一個基礎的伺服器。在這個範例裡，我們要實作 BFF 模式最核心的價值：把呼叫外部 API (Gemini) 的這件事移到後端做，不讓前端直接處理。

我們需要安全地放置 `GEMINI_API_KEY`，並且在 `server.ts` 撰寫一支 `/api/chat`，負責把前端打過來的對話轉交給 Google Gemini API。

---

## 步驟 1：建立與設定 .env 檔案

在專案的**根目錄** `bff-example` 下，新建一個檔案命名為 `.env`。

在這個檔案中，貼上你的 Gemini API 金鑰：

```env
GEMINI_API_KEY=你的_GOOGLE_GEMINI_API_KEY_放在這裡
```

> **非常重要**：
> 1. 請將等號後面的文字換成你真正的 API Key (`AIzaSy...`)。
> 2. 請注意，這裡的變數名稱是 **沒有 `VITE_` 前綴** 的！
> 在 Vite 的設計中，沒有 `VITE_` 前綴的變數是**絕對不會**被打包進前端程式碼中的，這就是我們保護金鑰的終極手段——只有在後端電腦 (即 Express 伺服器) 上，這把鑰匙才會被讀取到。

---

## 步驟 2：在後端實作聊天 API

回到我們剛才的 `server/server.ts`。

既然我們已經有了 `GEMINI_API_KEY`，我們要來把它接上。
準備要在原本的程式碼中加入：
1. 引入 `.env` 解析器
2. 引入 Gemini Client
3. 實作以 POST 方式接收問題的 `/api/chat` 主邏輯。

請用以下程式碼**完整覆蓋** `server/server.ts` 裡面的內容：

```typescript
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config({ path: new URL("../.env", import.meta.url).pathname })

const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);

//Middleware 設置
app.use(cors());
app.use(express.json());

//建立一個簡單的GET API,用來測試伺服器是否正常運作

app.get("/api/status", (req, res) => {
  res.json({ message: "BFF伺服器運作正常!", status: "ok" });
});

app.post("/api/chat", async (req, res) => {
  try {
    //檢查有沒有設定環境變數
    if (!process.env.GEMINI_API_KEY) {
      return res
        .status(500)
        .json({ error: "找不到GEMINI_API_KEY 環境變數設定。" });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const userMessage = req.body.message;
    if (!userMessage) {
      return res.status(400).json({ error: "請提供message欄位。" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
    });

    res.json({
      text: response.text,
    });
  } catch (error) {
    console.error("呼叫Gemini發生錯誤", error);
    res.status(500).json({ error: "伺服器內部發生錯誤,請稍後再試。" });
  }
});

//啟動伺服器
app.listen(PORT, "0.0.0.0", () => {
  console.log(`[Server] Express伺服器已經啟動:http://localhost:${PORT}`);
});

```

在這段程式碼中，我們做了幾個關鍵升級：
1. **隱藏真實 API 金鑰**：最重要的是 `@google/genai` 這個套件只在後端環境運行。前端傳送一個 Request，我們後端就幫助它打電話給 Google，拿到結果後再轉交回前端。這就是 API Proxy 的精神，金鑰再也不會流出給瀏覽器看到。
2. **尋找 `.env` 的位置 (ESM 特性)**：`dotenv.config({ path: new URL(...) })` 這一長串是因為我們使用了現代的 ESM 模組系統，這樣寫能確保不管伺服器從哪裡被啟動，都能精準地在上一層資料夾 (`../.env`) 找到包含密碼的環境變數檔。
3. **轉換型別與綁定 `"0.0.0.0"`**：我們用了 `parseInt` 把字串轉換為嚴謹的整數當作通訊埠；在最後 `app.listen()` 時加上 `"0.0.0.0"` 則能讓伺服器監聽所有的網域與介面，這是日後要放到 Docker 或雲端容器平台部署時的必備技巧！

---

## 步驟 3：測試你的後端對話 API

儲存檔案後，再次啟動後端伺服器：

```bash
npm run dev:server
```

*(接下來這步只是用來驗證，如果你熟悉的話可以跳過這段測試說明)*

你可以打開另一個終端機，使用 `curl` 指令來模擬前端發送問題給它：
```bash
curl -X POST http://localhost:3000/api/chat \
-H "Content-Type: application/json" \
-d '{"message": "請用一句話形容 React"}'
```

如果終端機出現這種類似 JSON 的回覆：
```json
{"text":"React 是一個宣告式、高效且靈活的 JavaScript 函式庫，用於建構使用者介面。"}
```
就代表我們的 BFF 伺服器實作成功了！它已經是一個獨當一面的超酷後端了！

請按下 `Ctrl + C` 終止終端機的伺服器運作，接下來我們終於要回到熟悉的前端，把網頁做出來。

---

[下一範例：範例 3 - 設定 Vite 代理與前端介面實作](範例3-設定Vite代理與前端介面實作.md)
