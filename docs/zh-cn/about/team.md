<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const maintainers = [
  {
    avatar: 'https://www.github.com/xiaoland.png',
    name: 'Lan_zhijiang',
    title: '创始人|维护者',
    links: [
      { icon: 'github', link: 'https://github.com/xiaoland' },
      { icon: 'twitter', link: 'https://twitter.com/Lan_zhijiang' }
    ]
  },
  ...
]
</script>

# 我们的团队  

## 维护者

他们是团队的核心维护成员。

<VPTeamMembers size="small" :members="maintainers" />
