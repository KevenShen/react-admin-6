import react from '@vitejs/plugin-react'
import path, { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite' // 自动引入组件
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
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
    }),
    AutoImport({
      imports: [
        'react',
        {
          antd: ['Button', 'Layout', 'Card', 'Col', 'Row', 'Statistic', 'Carousel']
        }
      ],
      dts: true,
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    },
    postcss: './postcss.config.js'
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
  },
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        sourcemap: true
      }
    }
  }
})
