/*
 * @Date: 2023-08-25 12:12:57
 * @LastEditTime: 2023-08-27 14:52:21
 * @Description: 
 */
import { http } from "@/http";
import { LoginData } from "./types";

// 登录接口
export function RequestLogin(data:LoginData){
  return http.post('/user/login',data)
}

// 发送邮箱验证码接口
export function RequestSendVerifyEmail(data:{userEmail:string}){
  return http.post('/user/sendVerifyEmail',data)
}

