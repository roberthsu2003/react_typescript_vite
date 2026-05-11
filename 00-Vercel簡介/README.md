# Vercel 簡介：現代化前端與 Serverless 部署平台

[Vercel](https://vercel.com/) 是一個專為前端開發者打造的雲端部署平台。它提供了非常直覺的開發者體驗（Developer Experience, DX），讓您可以輕鬆地將網站與應用程式部署到全球的邊緣節點（Edge Network）上。

## 官方網站連結

🔗 **[點此前往 Vercel 官方網站 (https://vercel.com)](https://vercel.com/)**

---

## 為什麼說 Vercel 也是一種 BaaS (Backend-as-a-Service)？

在現代的網頁開發架構中，Vercel 經常被視為一種輕量級的 **BaaS（後端即服務）** 解決方案，主要歸功於以下幾個核心功能：

1. **Serverless Functions (無伺服器函式)**
   您可以直接在專案的 `api/` 資料夾下撰寫後端程式碼（例如 Node.js 或 Python），Vercel 會自動將這些檔案轉換為獨立的 API 節點。**您完全不需要租用主機、設定作業系統或維護伺服器**，只要專注於寫好商業邏輯即可。

2. **自動化的 CI/CD 工作流程**
   只要將您的 GitHub 儲存庫（Repository）授權並連結給 Vercel，未來您只要把程式碼 Push 到雲端，Vercel 就會**全自動**幫您安裝套件、打包專案，並發佈上線。

3. **安全的環境變數管理**
   開發具有 AI 功能的應用程式時，往往需要使用 API Key（例如 OpenAI API 金鑰）。Vercel 提供了安全的後台設定介面，讓您可以將金鑰儲存在雲端，確保不會外洩到前端網頁或 GitHub 上。

4. **豐富的擴充生態系 (Storage & Integrations)**
   Vercel 也提供了自家的資料庫與儲存解決方案（例如 Postgres、KV、Blob 等），讓開發者能在同一個平台上滿足全端應用的所有需求。

---

## 如何開始？

對於初學者或個人開發者，Vercel 提供了非常慷慨的 **Hobby (免費) 方案**。您只需要前往 [Vercel 官網](https://vercel.com/)，點擊「Sign Up」並使用您的 GitHub 帳號直接登入，就能立刻開始使用！
