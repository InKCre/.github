import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        lastUpdatedText: 'Last Updated',
        returnToTopLabel: 'Back to Top',
        docFooter: {
            prev: 'Previous',
            next: 'Next'
        },

        nav: [
            { text: "Home", link: "/" },
            { text: "Efforts", link: "/efforts" },
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
            label: "Content", 
        },
        
        i18nRouting: true
    }
}