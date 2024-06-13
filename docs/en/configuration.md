---
title: Environment Variables and Settings
lang: en-US
---

# Environment Variables and Settings

## Environment Variables List

<span style="color:red">*</span> means required

| Variable | Description | Default Value |
|----------|-------------|---------------|
| `MODEL_NAME` | Model names used for Q&A, multiple models separated by `\|` | `llama3-8b-8192\|gpt-3.5-turbo\|gpt-4-1106-preview` |
| `BASE_URL` | Base URLs for the corresponding models' API, multiple URLs separated by `\|` | `https://api.groq.com/openai/v1\|https://api.openai.com/v1\|https://api.openai.com/v1` |
| <span style="color:red">*</span> `API_KEY` | API keys for the corresponding models, multiple keys separated by `\|` | `API_KEY_1\|API_KEY_2\|API_KEY_3` |
| `MAX_CHAT_HISTORY` | Maximum number of chat histories to retain | `5` |
| `EMBEDDING_MODEL` | Model name used for text embedding (please provide the HF model path) | `sentence-transformers/all-MiniLM-L6-v2` |
| `EMBEDDING_DEVICE` | Device to run the text embedding model (cpu or cuda, e.g., cuda:0, cuda:1) | `cpu` |
| <span style="color:red">*</span> `LINE_CHANNEL_ACCESS_TOKEN` | Line Bot access token | `YOUR_LINE_CHANNEL_ACCESS_TOKEN` |
| <span style="color:red">*</span> `LINE_CHANNEL_SECRET` | Line Bot secret | `YOUR_LINE_CHANNEL_SECRET` |
| <span style="color:red">*</span> `LINE_LIFF_ID` | Line LIFF page ID | `YOUR_LINE_LIFF_ID` |
| <span style="color:red">*</span> `LINE_LOGIN_CHANNEL_ID` | Line Login Channel ID for the LIFF page | `YOUR_LINE_LOGIN_CHANNEL_ID` |
| `FILE_MAX_SIZE` | Maximum upload file size allowed | `5MB` |
| `SPACE_PER_USER` | Maximum space available per user | `200MB` |
| `ALLOW_FILE_TYPE` | Allowed file types for upload, multiple types separated by `,` | `pdf,csv,txt` |

## Configuration Methods

### Server or Docker Configuration

You can set environment variables directly on the server or Docker. Refer to the [Installation Guide](./installation.md) for details.

### Local Configuration

1. Copy the `.env.example` file and rename it to `.env`.
   Alternatively, create a `.env` file and paste the following content:

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

2. Set the API keys, model parameters, and other settings.
