# npm 練習專案（`npm-lab`）

本目錄為 **[00 - Node.js 與 npm](../../README.md)** 中 **範例 2～4** 共用的專案：請在終端機 **`cd` 進入本目錄**（或複製整份到你習慣的路徑），依 [範例 2：認識 package.json](../../範例2-認識package.json.md) 起往後完成。

- 所有 **`npm` 指令**請在本目錄下執行。
- 依範例步驟會逐步修改 `package.json`、`index.js`，並安裝套件；**不必**另建新專案。
- 本專案使用 **ES Module**（`package.json` 內 **`"type": "module"`**），`index.js` 請用 **`import`／`export`** 撰寫。若你另建資料夾練習卻**沒有**在 `package.json` 加這一行，執行含 `import` 的程式時，Node 可能出現 `MODULE_TYPELESS_PACKAGE_JSON` 警告——請補上 `"type": "module"` 或直接使用本目錄完整檔案（說明見 [範例 3](../範例3-常用npm指令與安裝套件.md) 內「疑難排解：`MODULE_TYPELESS_PACKAGE_JSON`」一節）。
