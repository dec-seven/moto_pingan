<!--
 * @Date: 2023-08-25 10:53:20
 * @LastEditTime: 2023-08-27 17:12:16
 * @Description: 
-->
<template>
  登录
  <el-input v-model="userName" placeholder="Please input " />
  <el-input v-model="userPassword" placeholder="Please input" />
  <el-button type="primary" @click="handleLogin">登录</el-button>


  
  <el-input v-model="userEmail" placeholder="请输入邮箱" />
  <el-input v-model="userPassword" placeholder="请输入密码" />
  <el-button type="primary" @click="handleSendVerifyCode">发送验证码</el-button>

  <el-input v-model="verifyCode" placeholder="请输入验证码" />
  <el-button type="primary" @click="handleSignIn">注册</el-button>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RequestLogin } from '@/api/user'
import { ElMessage } from 'element-plus';
import { RequestSendVerifyEmail } from '../../../.history/src/api/user/index_20230827145257';
const userName = ref('')
const userPassword = ref('')

const handleLogin = async () => {
  console.log("开始登录",{userName:userName.value,userPassword:userPassword.value});
  
  const res = await RequestLogin({userName:userName.value,userPassword:userPassword.value})
  console.log("登录结果",res);
  switch (res.code) {
    case 0:
      // 登陆成功
      ElMessage({
        message: '登陆成功！',
        type: 'success',
      })
      break;
    default:
      // 登录失败
      ElMessage({
        message:res.message,
        type: 'warning',
      })
      break;
  }
  
}

const verifyCode = ref('')
const handleSignIn = async () => {

}

const userEmail = ref('')
const handleSendVerifyCode = async () => {
    if(!userEmail.value){
      console.log("不能为空");
    }
  const res = await RequestSendVerifyEmail({userEmail:userEmail.value})
  switch (res.code){
    case 0 :
      ElMessage({
        message: res.message,
        type: 'success',
      })
      break;
    default:
      ElMessage({
        message:res.message,
        type: 'warning',
      })
      break;
  }

}
</script>
