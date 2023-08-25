<!--
 * @Date: 2023-08-25 10:53:20
 * @LastEditTime: 2023-08-25 11:58:52
 * @Description: 
-->
<template>
  登录
  <el-input v-model="userName" placeholder="Please input " />
  <el-input v-model="userPassword" placeholder="Please input" />
  <el-button type="primary" @click="handleLogin">登录</el-button>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RequestLogin } from '@/api/user'
const userName = ref('')
const userPassword = ref('')

const handleLogin = async () => {
  console.log("开始登录",{userName:userName.value,userPassword:userPassword.value});
  
  const res = await RequestLogin({userName:userName.value,userPassword:userPassword.value})
  console.log("登录结果",res);
  
}
</script>
