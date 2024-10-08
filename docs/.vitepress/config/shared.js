import { defineConfig } from 'vitepress'
import { search as zhSearch } from './zh'

export const shared = defineConfig({
  base: '/algebra/',
  title: 'Algebra',
  rewrites: {
    'en/:rest*': ':rest*'
  },
  head: [['link', { rel: 'icon', href: '/algebra/logo.svg' }]],
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
      options: {
        locales: {
          ...zhSearch
        }
      }
    },

    footer: {
      message:
        'Powered by <a href="https://vitepress.dev/zh" target="_blank" style="text-decoration: none;">VitePress</a>',
      copyright: `© 2024-${new Date().getFullYear()} MIT <a href="https://mopsite.github.io/" target="_blank" style="text-decoration: none;">Paul</a>`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mop233/algebra' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@mop233/algebra' }
    ]
  },

  markdown: {
    math: true
  }
})
