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
            { text: "计划", link: "/zh-cn/plans/index" },
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
                text: "计划",
                link: "/zh-cn/plans/index",
                items: [
                    { text: "战略", link: '/zh-cn/plans/strategy' },
                    { text: "战术", link: '/zh-cn/plans/tactics/index' }
                ]
            },
            {
                text: "开发",
                link: "/zh-cn/development/index",
                items: [
                ]
            },
            {
                text: "管理",
                link: "/zh-cn/management/index",
                items: [
                ]
            },
            {
                text: "运营",
                link: "/zh-cn/operation/index",
                items: [
                ]
            },
            {
                text: "关于",
                items: [
                    { text: "我们的使命", link: '/zh-cn/about/mission' },
                    { text: "起源", link: '/zh-cn/about/origin' },
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

        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "full",
                timeStyle: "medium"
            }
        },
        
        i18nRouting: true
    }
}
