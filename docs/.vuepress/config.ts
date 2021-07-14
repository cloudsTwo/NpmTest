import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'Hello Vue',
  description: 'Just playing around',
  base: '/',   // 设置站点根路径
  head: [],
  plugins: [],
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/zh/': {
      lang: 'zh-CN',
    },
  },

  themeConfig: {
    darkMode: false,
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [ // 导航栏配置
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '测试',
        children: ['/life/life01.md', '/life/life02.md', '/life/life03.md']
      },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: ['/guide/README.md', '/guide/test1.md'],
        },
      ],
      '/life/': [
        {
          text: 'Life',
          children: ['/life/life01.md', '/life/life02.md','/life/life03.md'],
        },
      ],
    }
  },
})