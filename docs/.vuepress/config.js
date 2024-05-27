import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'ChatPDF-LineBot',
  base: '/ChatPDF-LineBot-Docs/',
  locales: {
    '/': {
      lang: 'zh',
      description: 'ChatPDF-LineBot 是一個使用 LangChain、FastAPI 和 Vue 構建的 Line Bot，可以自行搭建一個能夠讀取 PDF 內容的 LineBot。',
    },
    '/en/': {
      lang: 'en',
      description: 'ChatPDF-LineBot is a Line Bot built using LangChain, FastAPI, and Vue, allowing you to set up a LineBot capable of reading PDF content.',
    },
  },
  displayAllHeaders: true,
  bundler: viteBundler(),
  theme: defaultTheme({
    repo: 'ADT109119/ChatPDF-LineBot',
    docsRepo: 'ADT109119/ChatPDF-LineBot-Docs',
    docsDir: 'docs',
    locales: {
      '/': {
        selectLanguageName: '中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      },
    },
    sidebar: {
        '/': [
          {
            text: '文件',
            children: [
              {
                text: '介紹',
                link: '/',
              },
              '/usage.md',
              '/installation.md',
              '/configuration.md',
              '/contact.md',
            ],
          },
        ]
        ,
        '/en/': [
          {
            text: 'Documentation',
            children: [
              {
                text: 'Introduction',
                link: '/en/',
              },
              '/en/usage.md',
              '/en/installation.md',
              '/en/configuration.md',
              '/en/contact.md',
            ],
          },
        ]
  }
  }),

})
