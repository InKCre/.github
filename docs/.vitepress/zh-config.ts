import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        siteTitle: "InKCreThing 文档",
        
        // lastUpdated: true,
        lastUpdatedText: '最后更新',
        returnToTopLabel: '返回顶部',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/InKCre/.github/edit/main/docs/:path',
            text: "在GitHub上编辑该页面"
        },

        nav: [
            { text: "主页", link: "/" },
            { text: "我们的成果", link: "/zh-cn/efforts" },
            {
                text: "关于",
                items: [
                    {
                    text: "我们的使命",
                    link: "/zh-cn/about/mission",
                    activeMatch: "/zh-cn/about/mission",
                    },
            
                    {
                    text: "加入我们",
                    link: "/zh-cn/about/join",
                    activeMatch: "/zh-cn/about/join",
                    },
                ]
            }
        ],
        sidebar: [
        ],
        outline: {
            level: "deep", 
            label: "目录", 
        },
        
        i18nRouting: true
    }
}