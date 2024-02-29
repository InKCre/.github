import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "InKCreThing Document",
  description: "InKCreThing's Knowledge Base",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Efforts', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/InKCre' }
    ],

    i18nRouting: true
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'Simplified Chinese',
      lang: 'zh-cn', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh-cn/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    }
  }
})
