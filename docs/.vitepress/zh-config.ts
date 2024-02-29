import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        lastUpdatedText: '最后更新',
        returnToTopLabel: '返回顶部',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },

        nav: [
            { text: "主页", link: "/" },
            { text: "我们的成果", link: "/efforts" },
            {
                text: "关于",
                items: [
                    {
                    text: "我们的使命",
                    link: "/about/mission",
                    activeMatch: "/about/mission",
                    },
            
                    {
                    text: "加入我们",
                    link: "/about/join",
                    activeMatch: "/about/join",
                    },
                ]
            }
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
        outline: {
            level: "deep", 
            label: "目录", 
        },
        
        i18nRouting: true
    }
}