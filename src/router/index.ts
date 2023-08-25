/*
 * @Date: 2023-08-25 10:54:09
 * @LastEditTime: 2023-08-25 11:56:56
 * @Description: 
 */
import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'
import usersRoutes from './user'

const routes:Array<RouteRecordRaw> = [
  ...usersRoutes
]

const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router