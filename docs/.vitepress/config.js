import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/algebra/',
  title: 'Algebra',
  description: '小巧、快速且易用的 JavaScript 数学库',
  head: [['link', { rel: 'icon', href: '/algebra/logo.svg' }]],
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    outline: { label: '本页目录', level: [2, 3] },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细列表',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    footer: {
      message:
        'Powered by <a href="https://vitepress.dev/zh" target="_blank" style="text-decoration: none;">VitePress</a>',
      copyright: `© 2024-${new Date().getFullYear()} MIT <a href="https://mopsite.github.io/" target="_blank" style="text-decoration: none;">猛吃雪糕</a>`
    },

    nav: nav(),
    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mop233/algebra' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@mop233/algebra' }
    ]
  },
  markdown: {
    math: true
  }
})

function nav() {
  return [
    { text: '指南', link: '/guide/install', activeMatch: '/guide/' },
    { text: 'API', link: '/apis/decimal', activeMatch: '/apis/' },
    {
      text: version,
      link: 'https://github.com/mop233/algebra/blob/main/CHANGELOG.md'
    }
  ]
}

function sidebar() {
  return [
    {
      text: '指南',
      items: [
        { text: '安装使用', link: '/guide/install' },
        { text: '快速开始', link: '/guide/start' }
      ]
    },
    {
      text: 'API',
      items: [
        { text: 'Decimal', link: '/apis/decimal' },
        { text: 'Fraction', link: '/apis/fraction' }
      ]
    }
  ]
}
