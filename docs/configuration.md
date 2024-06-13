---
title: 環境變數和設定
lang: zh-TW
---
# 環境變數和設定

## 環境變數列表

<span style="color:red">*</span> 號代表必填

| 變數 | 說明 | 預設值 |
|------|------|------|
| `MODEL_NAME` | 用於問答的模型名稱,多個模型以`\|`分隔 | `llama3-8b-8192\|gpt-3.5-turbo\|gpt-4-1106-preview` |
| `BASE_URL` | 對應模型的 API 基礎 URL,多個 URL 以`\|`分隔 | `https://api.groq.com/openai/v1\|https://api.openai.com/v1\|https://api.openai.com/v1` |
| <span style="color:red">*</span> `API_KEY` | 對應模型的 API 密鑰,多個密鑰以`\|`分隔 | `API_KEY_1\|API_KEY_2\|API_KEY_3` |
| `MAX_CHAT_HISTORY` | 保留的最大聊天記錄數 | `5` |
| `EMBEDDING_MODEL` | 用於文本嵌入的模型名稱(請填入HF模型路徑) | `sentence-transformers/all-MiniLM-L6-v2` |
| `EMBEDDING_DEVICE` | 運行文本嵌入模型的設備(cpu或cuda，可用cuda:0、cuda:1選擇顯卡) | `cpu` |
| <span style="color:red">*</span> `LINE_CHANNEL_ACCESS_TOKEN` | Line Bot 的access token | `YOUR_LINE_CHANNEL_ACCESS_TOKEN` |
| <span style="color:red">*</span> `LINE_CHANNEL_SECRET` | Line Bot 的secret | `YOUR_LINE_CHANNEL_SECRET` |
| <span style="color:red">*</span> `LINE_LIFF_ID` | Line LIFF 網頁 ID | `YOUR_LINE_LIFF_ID` |
| <span style="color:red">*</span> `LINE_LOGIN_CHANNEL_ID` | Line LIFF 所在的 LINE Login Channel ID | `YOUR_LINE_LOGIN_CHANNEL_ID` |
| `FILE_MAX_SIZE` | 允許上傳的最大文件大小 | `5MB` |
| `SPACE_PER_USER` | 每個用戶可用的最大空間大小 | `200MB` |
| `ALLOW_FILE_TYPE` | 允許上傳的文件類型,多個類型以`,`分隔 | `pdf,csv,txt` |

## 設定方法

### 伺服器或 Docker 設定

伺服器或 Docker 可直接設定環境變數，詳見[安裝指引](./installation.md)。

### 本機設定

1. 複製 `.env.example` 文件，並改名為 `.env`。
或是創建一個 `.env` 文件，貼上以下內容

```env
MODEL_NAME=llama3-8b-8192|gpt-3.5-turbo|gpt-4-1106-preview
BASE_URL=https://api.groq.com/openai/v1|https://api.openai.com/v1|https://api.openai.com/v1
API_KEY=API_KEY_1|API_KEY_2|API_KEY_3

MAX_CHAT_HISTORY=5
EMBEDDING_MODEL="sentence-transformers/all-MiniLM-L6-v2"
EMBEDDING_DEVICE="cpu"

LINE_CHANNEL_ACCESS_TOKEN=YOUR_LINE_CHANNEL_ACCESS_TOKEN
LINE_CHANNEL_SECRET=YOUR_LINE_CHANNEL_SECRET
LINE_LIFF_ID=YOUR_LINE_LIFF_ID
LINE_LOGIN_CHANNEL_ID=YOUR_LINE_LOGIN_CLIENT_ID

FILE_MAX_SIZE=5MB
SPACE_PER_USER=200MB

ALLOW_FILE_TYPE=pdf,csv,txt
```

2. 設定 API Key、模型等參數。
