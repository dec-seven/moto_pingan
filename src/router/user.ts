/*
 * @Date: 2023-08-25 11:15:53
 * @LastEditTime: 2023-09-09 22:17:35
 * @Description: 
 */
export default  [
  { 
    path: '/user/login', 
    component: () => import('@/views/user/login/index.vue'),
    meta:{
      title:'登录'
    }
  },
  {
    path:'/user/home',
    component:() => import('@/views/user/home/index.vue'),
    meta:{
      title:'娱乐大厅'
    }
  },
]