import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
       '/api':{
        target: 'http://localhost:9096', // 目标服务器地址
        changeOrigin: true, // 是否改变请求源
       // rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
      },
    },
  },
})
