# Vercel 簡介：現代化前端與 Serverless 部署平台

[Vercel](https://vercel.com/) 是一個專為前端開發者打造的雲端部署平台。它提供了非常直覺的開發者體驗（Developer Experience, DX），讓您可以輕鬆地將網站與應用程式部署到全球的邊緣節點（Edge Network）上。

## 為什麼 Vercel 被視為一種 BaaS (Backend-as-a-Service)？

在現代的網頁開發架構中，Vercel 經常被視為一種輕量級的 **BaaS（後端即服務）** 解決方案。它不只負責託管靜態網頁，更內建了強大的後端能力與整合服務。

對於初學者或個人開發者，Vercel 提供了非常慷慨的 **Hobby (免費) 方案**。以下是我們在後續專案（包含 Serverless 後端與 Next.js 雲端生態系）中會重點使用到的 **免費核心功能**：

### 1. Serverless Functions (無伺服器函式)
您可以直接在專案的 `api/` 資料夾下撰寫後端程式碼（例如 Node.js 或 Python），Vercel 會自動將這些檔案轉換為獨立的 API 節點。
- **免費優勢**：您完全不需要租用主機、設定作業系統或維護伺服器。Hobby 方案每月提供充足的運算時數與 API 呼叫次數，對於學習與小型專案綽綽有餘。

### 2. Edge Runtime (邊緣運算)
相較於傳統的 Node.js 伺服器，Edge Runtime 會將您的程式碼部署在離使用者實體距離最近的伺服器節點（CDN 邊緣節點）上執行。
- **免費優勢**：享有極低的延遲與超快的啟動速度（無冷啟動延遲），大幅提升全端應用的反應時間。

### 3. Vercel Storage (Blob 與擴充資料庫)
Vercel 官方以及其合作夥伴提供了一系列可以直接無縫整合的資料儲存方案：
- **Vercel Blob**：提供簡單的物件儲存空間，適合用來存放網頁圖片或使用者上傳的靜態檔案。
- **Upstash Redis**：內建的 Redis 整合服務，可輕鬆實現高頻次存取的「計數器」或是「API 限流 (Rate Limiting)」。
- **免費優勢**：Hobby 方案皆有提供基礎的免費額度，無需額外綁定信用卡即可直接從 Vercel 後台一鍵建立並開通。

### 4. Image Optimization (圖片最佳化)
如果搭配 Next.js 使用，Vercel 會在雲端自動對圖片進行壓縮、轉換格式（如 WebP）與快取，不需要您手動處理圖片。
- **免費優勢**：每月免費提供 1,000 張來源圖片的自動最佳化處理，不僅節省伺服器頻寬，更能大幅提升網頁載入速度。

### 5. 自動化的 CI/CD 與 Vercel CLI 工具
- **GitHub 自動部署**：只要將您的 GitHub 儲存庫授權給 Vercel，未來您只要把程式碼 Push 到雲端，Vercel 就會全自動幫您安裝套件、打包專案，並發佈上線。
- **Vercel CLI**：透過終端機指令（如 `vercel dev`），您可以在本機完美模擬雲端的 Serverless 環境與環境變數，進行測試與除錯。

---

## 安全的環境變數管理

開發具有 AI 功能的應用程式時，往往需要使用 API Key（例如 OpenAI 金鑰）。Vercel 提供了安全的後台設定介面，讓您可以將金鑰儲存在雲端（並自動注入至 Serverless 函式），確保機密資訊不會外洩到前端網頁或 GitHub 程式碼中。

---

## 如何開始？

您只需要前往 [Vercel 官網](https://vercel.com/)，點擊右上角的「Sign Up」並使用您的 **GitHub 帳號直接登入**，就能立刻開通並使用上述所有免費功能！
