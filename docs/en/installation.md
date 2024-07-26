---
title: Installation & Deployment
lang: en-US
---

# Installation & Deployment
::: tip
If using [Docker](#using-docker) or [Hugging Face Space](#deploy-with-hugging-face-space), you can skip directly to step 5
:::

## 1. Clone the repository:
```sh
git clone https://github.com/ADT109119/ChatPDF-LineBot-Docs.git
```

## 2. Install server dependencies:
```sh
cd ChatPDF-LineBot
pip install -r requirements.txt
```

Consider running in a virtual environment. Here are the commands for creating a virtual environment using Python's built-in venv:

```sh
cd ChatPDF-LineBot
python -m venv .\venv
.\venv\Scripts\activate
pip install -r requirements.txt
```

## 3. Install Node dependencies:
```sh
cd ChatPDF-LineBot/View
npm install
```

## 4. Build the frontend:
```sh
cd View
npm install
npm run build
```

## 5. Log in to the LINE platform
   * Create a Line Bot.
      * Add a new provider, e.g., "My Provider".
      * Under "My Provider", create a new channel of type "Messaging API", e.g., "My AI Assistant".
      * Go to the "My AI Assistant" channel page, select the "Messaging API" tab, and generate a channel access token.
   * Create a LIFF page.
      * Under the same `Provider` (e.g., "My Provider"), create a new channel of type "Line Login", e.g., "My LIFF Page".
      * Go to the "My LIFF Page" channel page, select the "LIFF" tab, and create a new LIFF page.
      * For the `Endpoint URL`, enter `https://<your-domain-or-IP-address>/liff` (you can change this later).
      * For `Scopes`, select "chat_message.write" and "openid".
      * Click `Add` to create.

## 6. Log in to OpenAI or Groq platform (or other platforms)
* Generate an OpenAI API key.
* Optionally generate other platform API keys (e.g., Groq), but ensure the API is compatible with OpenAI and remember to update `BASE_URL` in the next step.

## 7. Set environment variables

You can set environment variables directly on the server or Docker.

If running on a local machine, copy the `.env.example` file, rename it to `.env`, and set the API keys, models, and other parameters.

See [Environment Variables List](./configuration.html) for details

## 8. Run the server

### Using Docker

![Docker Image Size (tag)](https://img.shields.io/docker/image-size/adt109119/chatpdf-linebot/latest)

```sh
docker run -d \
--name chatpdf-linebot \
-p 8000:8000 \
-v /local/file/store/path:/app/db \
-e LINE_CHANNEL_ACCESS_TOKEN=YOUR_LINE_CHANNEL_ACCESS_TOKEN \
-e LINE_CHANNEL_SECRET=YOUR_LINE_CHANNEL_SECRET \
-e LINE_LIFF_ID=YOUR_LINE_LIFF_ID \
-e LINE_LOGIN_CHANNEL_ID=YOUR_LINE_LOGIN_CHANNEL_ID \
-e MODEL_NAME=YOUR_MODELS \
-e BASE_URL=BASE_URLS \
-e API_KEY=API_KEYS \
adt109119/chatpdf-linebot
```

### Running locally

If steps 1-4 were completed without issues, simply run the following command to start the server:

The default `PORT` is `8000`

```sh
python .\main.py
```

### Deploy with Hugging Face Space

This project can be quickly deployed on Hugging Face Space.

Supports custom URLs with CloudFlare Tunnel.

[![](https://huggingface.co/datasets/huggingface/badges/resolve/main/deploy-on-spaces-lg-dark.svg)](https://huggingface.co/spaces/ADT109119/ChatPDF-LineBot?duplicate=true)

::: warning
If you haven't purchased permanent storage from Hugging Face,

files will be lost every time you update or change environment variable.
:::

## 9. Finalize LINE settings
* Line Bot settings
  * Go to the "My AI Assistant" channel page, select the "Messaging API" tab, set the "Webhook URL" to your app URL followed by the `/callback` path, e.g., `https://line.the-walking.fish.com/callback`, and click the "Update" button.
  * Click the "Verify" button to ensure the webhook is working.
  * Enable the "Use webhook" feature.
  * Disable the "Auto-reply messages" feature.
  * Disable the "Greeting messages" feature.

* Line LIFF page settings
  * Go to the "LIFF" tab.
  * If the `Endpoint URL` was initially set to a placeholder, update it to the official LIFF page URL with the `/liff` path, e.g., `https://line.the-walking.fish.com/liff`.
  * Go back to the "LIFF" tab and copy the "LIFF URL".

* Rich menu settings
  * Go to the "LINE Official Account Manager".
  * In the sidebar, find "Rich menu".
  * Click "Create".
  * Fill in the name, template, etc., as desired.
  * For "Action", choose "Link" and enter the LIFF URL copied in the previous step.
  * Click "Save".
