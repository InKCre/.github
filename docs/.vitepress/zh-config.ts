import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        siteTitle: "翰墨化机团队文档",
        
        // lastUpdated: true,
        lastUpdatedText: '最后更新',
        returnToTopLabel: '返回顶部',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        editLink: {
            pattern: 'https://github.com/InKCre/.github/edit/main/docs/:path',
            text: "在GitHub上编辑该页面"
        },

        nav: [
            { text: "主页", link: "/" },
            { text: "成果", link: "/zh-cn/efforts" },
            {
                text: "关于",
                items: [
                    {
                        text: "使命",
                        link: "/zh-cn/about/mission",
                        activeMatch: "/zh-cn/about/mission",
                    },
            
                    {
                        text: "加入我们",
                        link: "/zh-cn/about/join",
                        activeMatch: "/zh-cn/about/join",
                    },

                    {
                        text: "我们是谁",
                        link: "/zh-cn/about/who-are-we",
                        activeMatch: "/zh-cn/about/who-are-we"
                    },
                ]
            }
        ],
        sidebar: [
            {
                text: "成果",
                link: "/zh-cn/efforts",
                items: [
                ]
            },
            {
                text: "关于",
                items: [
                    { text: "我们的使命", link: '/zh-cn/about/mission' },
                    { text: "我们是谁", link: '/zh-cn/about/who-are-we' },
                    { text: "我们的团队", link: '/zh-cn/about/team' },
                    { text: "加入我们", link: '/zh-cn/about/join' }
                ]
            },
        ],
        outline: {
            level: "deep", 
            label: "页面目录", 
        },
        
        i18nRouting: true
    }
}