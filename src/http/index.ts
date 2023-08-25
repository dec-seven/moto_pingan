import axios, { AxiosInstance, AxiosRequestConfig,AxiosResponse,AxiosError } from 'axios'
import { ElMessage } from 'element-plus'

// 创建Axios实例
const service:AxiosInstance = axios.create({
  baseURL:'/ton',
  timeout:30000
})

// 响应拦截器
service.interceptors.response.use(
  (response:AxiosResponse) => {
    return response.data
  },
  (error:AxiosError) => {
    // 处理HTTP网络错误
    let message = ''
    // HTTP 状态码
    const status = error.response?.status 
    switch (status) {
      case 401:
      message = '登录失效，请重新登录！'
      break
    }
    ElMessage.error(message)
    return Promise.reject(error)
  }
)


// 导出封装的请求方法
export const http = {
  get(url:string,config?:AxiosRequestConfig){
    return service.get(url,config)
  },
  post(url:string,data:object,config?:AxiosRequestConfig){
    return service.post(url,data,config)
  }
}

interface Result {
  code:number,
  message:string,
  data:object
}
