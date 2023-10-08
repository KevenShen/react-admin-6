import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import postcssPreseEnv from 'postcss-preset-env'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
export default defineConfig({
  base: '',
  plugins: [
    react(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
      /**
       * 自定义插入位置
       * @default: body-last
       */
      inject: 'body-first',
      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__'
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [
        postcssPreseEnv({
          stage: 4,
          features: {
            'nesting-rules': true
          }
        })
      ]
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
    host: 'localhost',
    open: true,
    proxy: {
      // '/api': {
      //   target: 'http://116.62.37.172:1102/', // easymock
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      '/api': {
        target: 'http://127.0.0.1:1103/', // easymock
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
