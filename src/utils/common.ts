/*
 * @Date: 2023-09-09 21:34:07
 * @LastEditTime: 2023-09-09 21:44:55
 * @Description: 
 */

import { nextTick } from 'vue'
import { useTitle } from '@vueuse/core'

/**
 * 根据路由 meta.title 设置浏览器标题
 */
export function setTitle(title:string) {
  nextTick(() => {
      const updateTitle = useTitle()
      updateTitle.value = title
  })
}
