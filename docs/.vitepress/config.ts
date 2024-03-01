import { defineConfig } from "vitepress"

import { enConfig } from "./en-config.ts"
import { zhConfig } from "./zh-config.ts"

export default defineConfig({
    title: "InKCreThing Document",
    description: "InKCreThing's Knowledge Base",

    locales: {
        root: {
            label: "English",
            lang: "en",
            ...enConfig
        },
        "zh-cn": {
            label: "Simplified Chinese",
            lang: "zh-cn",
            link: "/zh-cn/",
            ...zhConfig
        }
    },

    themeConfig: {
        search: {
            provider: "local",
            options: {
                locales: {
                    zh: {
                        translations: {
                        button: {
                            buttonText: "搜索文档",
                            buttonAriaLabel: "搜索文档"
                        },
                        modal: {
                                noResultsText: "无法找到相关结果",
                                resetButtonTitle: "清除查询条件",
                                footer: {
                                selectText: "选择",
                                navigateText: "切换"
                            }
                        }
                        }
                    }
                }
            }
        }
    },

    // ignoreDeadLinks: true
})
