import { defineConfig } from 'vitepress'
import { version } from '../../../package.json'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '小巧、快速且易用的 JavaScript 数学库',

  themeConfig: {
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

    nav: nav(),
    sidebar: sidebar()
  }
})

function nav() {
  return [
    { text: '指南', link: '/zh/guide/install', activeMatch: '/guide/' },
    { text: 'API', link: '/zh/apis/decimal', activeMatch: '/apis/' },
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
        { text: '安装使用', link: '/zh/guide/install' },
        { text: '快速开始', link: '/zh/guide/start' }
      ]
    },
    {
      text: 'API',
      items: [
        { text: 'Decimal', link: '/zh/apis/decimal' },
        { text: 'Fraction', link: '/zh/apis/fraction' }
      ]
    }
  ]
}

export const search = {
  zh: {
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
