import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh } from './zh'
import { en } from './en'
const baseURL = process.env.BASE_URL || '/algebra/'

export default defineConfig({
  base: baseURL,
  head: [['link', { rel: 'icon', href: `${baseURL}logo.svg` }]],
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    zh: { label: '简体中文', ...zh }
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString()
            }
          }
        }
      }
    }
  }
})
