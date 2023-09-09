/*
 * @Date: 2023-08-25 10:54:09
 * @LastEditTime: 2023-09-09 22:18:05
 * @Description: 
 */
import { createRouter,createWebHashHistory,RouteRecordRaw } from 'vue-router'

// 用户模块静态路由
import usersRoutes from './user'
// 游戏模块静态路由
import playRoutes from './play'

import { setTitle } from '@/utils/common'

const routes:Array<RouteRecordRaw> = [
  ...usersRoutes,
  ...playRoutes
]

const router = createRouter({
  // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes,
})

console.log(routes);

router.beforeEach((to, from, next)=>{
   setTitle(to.meta.title as string)
   next()
})

export default router