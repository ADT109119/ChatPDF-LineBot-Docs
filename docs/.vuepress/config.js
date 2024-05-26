import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    title: 'ChatPDF-LineBot',
    base: '/ChatPDF-LineBot-Docs/',
  bundler: viteBundler(),
  theme: defaultTheme({
    repo: 'ADT109119/ChatPDF-LineBot',
    docsRepo: 'ADT109119/ChatPDF-LineBot-Docs',
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
  }
  }),

})
