# 將靜態網頁發佈到 Vercel 教學

本教學將引導你如何將基於 **Vite + React + TypeScript** 開發的純靜態網頁（Single Page Application, SPA）部署到 Vercel 上。

## 為什麼選擇 Vercel？

Vercel 是一個對前端開發者非常友好的雲端部署平台，特別適合用來部署 React、Vue 等靜態網站或全端框架（如 Next.js）。它提供了與 GitHub 無縫整合的 CI/CD（持續整合/持續部署）功能，只要推上程式碼就能自動部署。

---

## 步驟一：確保專案已上傳至 GitHub

在開始部署之前，請確保你的 Vite React 專案已經完成開發，並且推送（Push）到你的 GitHub 儲存庫（Repository）中。

1. 在 GitHub 上建立一個新的儲存庫。
2. 將本機端的程式碼推送到該儲存庫（包含 `package.json`、`vite.config.ts`、`src` 等）。

## 步驟二：登入 Vercel 並匯入專案

1. 前往 [Vercel 官網](https://vercel.com/)。
2. 點擊右上角的 **Log in**，選擇 **Continue with GitHub** 進行登入。
3. 登入後，在 Dashboard 頁面點擊右側的 **Add New...**，選擇 **Project**。
4. 在「Import Git Repository」區塊中，找到你剛剛推送到 GitHub 的 Vite React 專案，點擊右側的 **Import**。
   > **注意**：如果你在列表中找不到專案，可能需要點擊「Adjust GitHub App Permissions」來授權 Vercel 存取你該儲存庫的權限。

## 步驟三：設定部署選項 (Configure Project)

在進入專案設定頁面後，Vercel 通常會自動偵測出你的專案是使用 Vite 建立的。請確認以下設定是否正確：

*   **Project Name**: 你的專案名稱（將作為預設網址的一部分，可自行修改）。
*   **Framework Preset**: 確認自動選取了 **Vite**。
*   **Build and Output Settings** (保持預設即可)：
    *   Build Command: `npm run build`
    *   Output Directory: `dist`
    *   Install Command: `npm install`

確認無誤後，點擊下方的 **Deploy** 按鈕。

## 步驟四：等待部署完成

Vercel 會開始安裝相依套件並進行打包（Build）。這個過程大約需要 1 到 2 分鐘。
當畫面上出現滿天星的動畫，並顯示 **Congratulations!** 時，代表你的網站已經成功上線了！
你可以點擊預覽圖片或是 Visit 按鈕，來查看你剛部署的靜態網頁。

---

## ⚠️ 重要：處理 React Router 的 404 問題 (SPA 路由設定)

如果你的 React 專案有使用 `react-router-dom` 來進行多頁面路由切換（例如有 `/about`, `/products` 等路徑），你會發現在 Vercel 上只要**重新整理**子頁面，或是直接輸入子頁面網址，就會出現 **404 Not Found** 的錯誤。

**為什麼會這樣？**
因為 Vite 打包出來的是單頁應用程式（SPA），實際上的 HTML 檔案只有一個 `index.html`。當 Vercel 伺服器收到對 `/about` 的請求時，它會在伺服器上尋找 `about.html` 檔案，因為找不到所以回傳 404 錯誤。

**解決方法：新增 `vercel.json` 檔案**

我們需要告訴 Vercel：「所有找不到後端檔案的路由請求，都一律導向給前端的 `index.html`，剩下的交由 React Router 去處理即可。」

1. 在專案的**根目錄**（與 `package.json` 檔案同層級）建立一個名為 `vercel.json` 的檔案。
2. 在檔案中貼上以下內容：

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

3. 存檔後，將這個新增的 `vercel.json` 檔案 commit 並推送到 GitHub 上的 main 分支。
4. Vercel 偵測到程式碼更新後會自動觸發重新部署。部署完成後，你的 React Router 重新整理就不會再報錯了！

---

## 🚀 後續維護 (自動化部署 CI/CD)

Vercel 最強大的地方在於它已經為你設定好了 CI/CD 流程。
未來當你修改了專案的程式碼，只要在終端機中執行標準的 Git 指令：

```bash
git add .
git commit -m "更新網站內容"
git push origin main
```

當程式碼被推送到 GitHub 的 main 分支後，Vercel 就會在背景自動抓取最新的程式碼，進行打包並重新發佈。你不需要再手動進 Vercel 後台點擊任何按鈕，網站就會自動更新為最新版本。