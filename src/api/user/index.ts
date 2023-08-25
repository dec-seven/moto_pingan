import { http } from "@/http";
import { LoginData } from "./types";

export function RequestLogin(data:LoginData){
  return http.post('/user/login',data)
}