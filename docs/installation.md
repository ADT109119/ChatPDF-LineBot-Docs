---
title: 安裝步驟
lang: zh-TW
description: text
---

# 安裝步驟
> 使用 Docker 的人可直接跳至第 5 步

## 1. 複製存儲庫:
```
git clone https://github.com/your-repo/line-pdf-bot.git
```

## 2. 安裝伺服器依賴:
```
cd ChatPDF-LineBot
pip install -r requirements.txt
```
可考慮在虛擬環境中執行，這裡提供 Python 內建的虛擬環境指令:
```
cd ChatPDF-LineBot
python -m venv .\venv
.\venv\Scripts\activate
pip install -r requirements.txt
```

## 3. 安裝 Node 依賴:
```
cd ChatPDF-LineBot/View
npn install
```

## 4. Build 前端網頁
```
cd View
npm install
npm run build
```

## 5. 登入 LINE 平台
   * 創建 Line Bot。
      * 新增一個提供者（Provider），例如「My Provider」。
      * 在「My Provider」新增一個類型為「Messaging API」的頻道（Channel），例如「My AI Assistant」。
      * 進到「My AI Assistant」頻道頁面，點選「Messaging API」頁籤，生成一個頻道的 channel access token。
   * 創建 LIFF 網頁。
      * 在與「Messaging API」同一個 `Provider` 內(例如:「My Provider」)新增一個類型為「Line Login」的頻道（Channel），例如「My LIFF Page」。
      * 進到「My LIFF Page」頻道頁面，點選「LIFF」頁籤，創建一個新的 LIFF 網頁。
      * `Endpoint URL` 填入 `https://<你的網域或IP地址>/liff`(可先隨便填後續再來改)。
      * `Scopes` 選項請勾選「chat_message.write」、「openid」。
      * 點選 `Add` 創建。

## 6. 登入 OpenAI、Groq 平台(或其他平台)
* 生成一個 OpenAI 的 API key。
* 也可以生成其他平台的API Key(例如 Groq)，只是該平台的 API 必須與 OpenAI 兼容，且要記得在下一步改`BASE_URL`

## 7. 設定環境變數

伺服器或 Docker 可直接設定環境變數

自己電腦上跑的話可複製 `.env.example` 文件，並改名為 `.env`，接著設定 API Key、模型等參數。

詳見 `環境變數列表` `*` 

## 8. 運行伺服器

### 使用 Docker

```
docker run -d \
--name chatpdf-linebot \
-p 8000:8000 \
-v /local/file/store/path:/app/db
-e LINE_CHANNEL_ACCESS_TOKEN=YOUR_LINE_CHANNEL_ACCESS_TOKEN \
-e LINE_CHANNEL_SECRET=YOUR_LINE_CHANNEL_SECRET \
-e LINE_LIFF_ID=YOUR_LINE_LIFF_ID \
-e LINE_LOGIN_CHANNEL_ID=YOUR_LINE_LOGIN_CHANNEL_ID \
-e MODEL_NAME=YOUR_MODELS \
-e BASE_URL=BASE_URLS \
-e API_KEY=API_KEYS \
adt109119/chatpdf-linebot
```

### 本機直接運行

若 1. ~ 4. 步的安裝接無問題，僅需直接執行一以下指令便可開啟伺服器

預設使用 `PORT` `8000`
```
python .\main.py
```

## 9. 回到 LINE 設定
* Line Bot 設定
  * 進到「My AI Assistant」頻道頁面，點選「Messaging API」頁籤，設置「Webhook URL」，填入應用程式網址並加上「/callback」路徑，例如 `https://line.the-walking.fish.com/callback`，點選「Update」按鈕。
  * 點選「Verify」按鈕，驗證是否呼叫成功。
  * 將「Use webhook」功能開啟。
  * 將「Auto-reply messages」功能關閉。
  * 將「Greeting messages」功能關閉。
  
* Line LIFF 網頁設定
  * 進到「LIFF」頁籤
  * 若原本`Endpoint URL` 隨便填的，現在請正式填入 LIFF 網頁網址，路徑為「/liff」，例如 `https://line.the-walking.fish.com/liff`。
  * 回到「LIFF」頁籤，複製「LIFF URL」
 
* 圖文選單設定
  * 進到「LINE Official Account Manager」
  * 在側邊欄找到「圖文選單」
  * 點選「建立」
  * 名稱、版型等可照自己的喜好填寫
  * 在「動作」選擇「連結」，並填入上一部複製的 LIFF URL
  * 按「儲存」