import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    //设置路径别名
    alias: {
      '@': resolve(__dirname, 'src/'),
      'views/*': resolve(__dirname, 'src/views'),
      '@icons': resolve(__dirname, 'src/assets/svg/'),
      'components/*': resolve(__dirname, 'src/components'),
      '*': resolve('')
    }
  },
  server: {
    port: 1102,
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:1103/', // easymock
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
