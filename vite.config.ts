/*
 * @Date: 2023-08-25 10:19:49
 * @LastEditTime: 2023-08-27 14:01:22
 * @Description: 
 */
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  },
  server:{
    host:'0.0.0.0',
    proxy:{
      '/user':{
        target:'http://127.0.0.1:3000',
        // target:'http://101.42.9.100:3000',
        changeOrigin:true
      }
    }
  }
})
