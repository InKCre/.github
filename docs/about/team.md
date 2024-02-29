<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const maintainers = [
  {
    avatar: 'https://www.github.com/xiaoland.png',
    name: 'Lan_zhijiang',
    title: 'Founder|Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/xiaoland' },
      { icon: 'twitter', link: 'https://twitter.com/Lan_zhijiang' }
    ]
  },
  ...
]
</script>

# Our Team  

## Maintainers

They are the core members of our team.

<VPTeamMembers size="small" :members="maintainers" />
