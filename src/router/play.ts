/*
 * @Date: 2023-08-25 11:15:53
 * @LastEditTime: 2023-09-09 22:20:28
 * @Description: 
 */
export default  [
  {
    path:'/play',
    component:() => import('@/views/play/index.vue'),
    children:[
      {
        path:'/drawAndGuess',
        component:() => import('@/views/play/DrawAndGuess/index.vue'),
        meta:{
          title:'你画我猜'
        },
      }
    ]
  }
]