import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        siteTitle: "InKCreThing Document",

        // lastUpdated: true,
        lastUpdatedText: 'Last Updated',
        returnToTopLabel: 'Back to Top',
        docFooter: {
            prev: 'Previous',
            next: 'Next'
        },
        editLink: {
            pattern: 'https://github.com/InKCre/.github/edit/main/docs/:path',
            text: "Edit this page on GitHub"
        },

        nav: [
            { text: "Home", link: "/" },
            { text: "Efforts", link: "/efforts" },
            { text: "Plans", link: "/plans/index" },
            {
                text: "About",
                items: [
                    {
                        text: "Our Mission",
                        link: "/about/mission",
                        activeMatch: "/about/mission",
                    },
            
                    {
                        text: "Join Us",
                        link: "/about/join",
                        activeMatch: "/about/join",
                    },

                    {
                        text: "About Us",
                        link: "/about/who-are-we",
                        activeMatch: "/about/who-are-we"
                    },
                ]
            }
        ],
        sidebar: [
            {
                text: "Efforts & Results",
                link: "/efforts",
                items: [
                ]
            },
            {
                text: "Plans",
                link: "/plans/index",
                items: [
                    { text: "Strategy", link: '/plans/strategy' },
                    { text: "The Launch Stage", link: '/plans/launch-stage/index' }
                ]
            },
            {
                text: "Development",
                link: "/development/index",
                items: [
                ]
            },
            {
                text: "Management",
                link: "/management/index",
                items: [
                ]
            },
            {
                text: "Operation",
                link: "/operation/index",
                items: [
                ]
            },
            {
                text: "About",
                items: [
                    { text: "Our Mission", link: '/about/mission' },
                    { text: "Who Are We", link: '/about/who-are-we' },
                    { text: "Our Team", link: '/about/team' },
                    { text: "Join Us", link: '/about/join' }
                ]
            }
        ],
        outline: {
            level: "deep", 
            label: "Content", 
        },
        
        i18nRouting: true
    }
}