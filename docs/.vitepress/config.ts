import { defineConfig } from 'vitepress'

import { enConfig } from './en-config.ts'
import { zhConfig } from './zh-config.ts'

export default defineConfig({
    title: "InKCreThing Document",
    description: "InKCreThing's Knowledge Base",

    locales: {
        root: {
            label: 'English',
            lang: 'en',
            ...enConfig
        },
        fr: {
            label: 'Simplified Chinese',
            lang: 'zh-cn',
            link: '/zh-cn/',
            ...zhConfig
        }
    }
})
