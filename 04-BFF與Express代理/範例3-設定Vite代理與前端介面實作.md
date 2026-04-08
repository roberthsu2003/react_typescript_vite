# 範例 3：設定 Vite 代理與前端介面實作

## 目標

前面我們已經把後端準備好了，現在要來寫前端（React）了！

你可能會想：我是不是直接在 React 用 `fetch('http://localhost:3000/api/chat')` 就好？
答案是：**不行**。因為你的 React 是開在前端開發伺服器（通常是 `http://localhost:5173`），所以如果你去打 `http://localhost:3000`，馬上會踩到前端最常見的**地雷 —— CORS（跨域請求阻擋）**。

因此，我們要設定 Vite 的 `proxy`（代理），讓 Vite 開發伺服器收到 `/api` 開頭的請求時，幫我們「轉交」給在 `3000` port 上的 Express 伺服器。對瀏覽器來說，它以為前端程式跟 API 都在同一個原本（`5173`），CORS 就奇蹟般地消失了！

---

## 步驟 1：修改 vite.config.ts 設定 Proxy

請打開專案根目錄下的 `vite.config.ts`，並修改成如下設定：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 增加這裡的 proxy 區塊！
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 你的 Express 後端網址
        changeOrigin: true,
      }
    }
  }
})
```

加了這段之後，當我們的 React 程式執行 `fetch('/api/chat')` 的時候，Vite 會乖乖把它送到 `http://localhost:3000/api/chat` 去。

---

## 步驟 2：實作前端的 AI 聊天畫面

現在打開 `src/App.tsx`，我們要將原本的假畫面換成一個真正會發送資料到後端的聊天介面。

請**完全覆蓋** `src/App.tsx` 的程式碼：

```tsx
import { useState } from 'react'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('');
  const [reply, setReply] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsLoading(true);
    setErrorMsg(null);
    setReply(null);

    try {
      // 這裡最重要！注意我們不是打 http://localhost:3000
      // 而是直接打 '/api/chat'，然後讓 Vite Proxy 幫我們轉發
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      if (!response.ok) {
        throw new Error('伺服器回應發生錯誤！');
      }

      const data = await response.json();
      setReply(data.text);
      
    } catch (err: any) {
      setErrorMsg(err.message || '發生未知的錯誤。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Gemini 一句話問答</h1>
      <p>完全由我們自己的 Express 後端代為呼叫 API，前端看不見金鑰！</p>

      <form onSubmit={handleSubmit} className="chat-form">
        <textarea 
          placeholder="請輸入你想問 Gemini 的問題..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !inputText.trim()}>
          {isLoading ? '處理中...' : '送出'}
        </button>
      </form>

      {errorMsg && <div className="error-box">{errorMsg}</div>}
      
      {reply && (
        <div className="reply-box">
          <p><strong>Gemini 回覆：</strong></p>
          <p>{reply}</p>
        </div>
      )}
    </div>
  )
}

export default App
```

---

## 步驟 3：加上一點 CSS 樣式 (選修)

如果想要畫面好看一點，請將 `src/App.css` 的內容替換成：

```css
.app-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem;
  font-family: sans-serif;
}

.chat-form textarea {
  width: 100%;
  height: 100px;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  resize: vertical;
  font-size: 1rem;
}

.chat-form button {
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
}

.chat-form button:disabled {
  background-color: #94a3b8;
  cursor: not-allowed;
}

.reply-box {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8fafc;
  border-left: 4px solid #3b82f6;
  border-radius: 4px;
}

.error-box {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fef2f2;
  color: #ef4444;
  border: 1px solid #fca5a5;
  border-radius: 4px;
}
```

---

## 步驟 4：怎麼跑起來同時測試？

重點來了，現在我們要讓兩包伺服器「同時」跑起來：
1. Vite 負責提供開發階段的 React 畫面（Port `5173`）
2. Express 負責提供 API Proxy 服務（Port `3000`）

你必須開**兩個**終端機：
- 終端機 A：`npm run dev:server` (負責後端)
- 終端機 B：`npm run dev` (負責前端)

然後打開 `http://localhost:5173`，輸入問題按下送出，你就會看到完美的 BFF 運作畫面了！

不過... 每次都要開兩個終端機實在太麻煩了，對吧？
而且如果我們要把這個專案丟上雲端，我們該怎麼打指令？

不用擔心，在下一個範例中，我們會教你如何用**一個終端機**搞定這件事！

---

[下一範例：範例 4 - 編譯整合與雲端部署準備](範例4-編譯整合與雲端部署準備.md)
