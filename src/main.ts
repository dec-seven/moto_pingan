/*
 * @Date: 2023-08-25 10:19:49
 * @LastEditTime: 2023-08-25 10:43:36
 * @Description: 
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

import router from '@/router/index.ts';


const app = createApp(App)
app.use(ElementPlus)
app.use(router)
// 挂载
app.mount('#app')
