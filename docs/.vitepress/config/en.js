import { defineConfig } from 'vitepress'
import { version } from '../../../package.json'

export const en = defineConfig({
  lang: 'en',
  description: 'Used for operations such as decimals, fractions...',

  themeConfig: {
    outline: { level: [2, 3] },
    lastUpdated: {
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
    { text: 'Guide', link: '/guide/install', activeMatch: '/guide/' },
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
      text: 'Guide',
      items: [
        { text: 'Installation', link: '/guide/install' },
        { text: 'Quick Start', link: '/guide/start' }
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
