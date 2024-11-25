import { fileURLToPath, URL } from 'node:url'

import {ConfigEnv, defineConfig, UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// https://vite.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: '@vue/compat'
    },
  },
  server: {
    port: parseInt(process.env.SERVER_PORT || '8080')
  }
})
