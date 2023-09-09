<!--
 * @Date: 2023-08-25 10:53:20
 * @LastEditTime: 2023-09-09 21:29:22
 * @Description: 
-->
<template>
  <div class="login-container">
    <el-container>
      <el-main>
        <el-row justify="center">
          <el-col :span="16" :xs="24">
            <el-form class="login-form">
              <el-form-item>
                <el-input v-model="userName" placeholder="请输入账号"  :prefix-icon="User" size="large"/>
              </el-form-item>

              <el-form-item>
                <el-input v-model="userPassword" placeholder="请输入密码" type="password" show-password :prefix-icon="Unlock" size="large"/>
              </el-form-item>

              <el-form-item class="form-btn">
                <el-button type="primary" size="large" @click="handleLogin('account')">登录</el-button>
              </el-form-item>
            </el-form>

            <el-form class="login-form">
              <el-form-item>
                <el-input v-model="userEmail" placeholder="请输入邮箱"  :prefix-icon="Message" size="large"/>
              </el-form-item>

              <el-form-item>
                <el-input v-model="verifyCode" placeholder="请输入验证码" type="password" show-password :prefix-icon="Unlock" size="large">
                  <template #suffix>
                    <el-button type="primary" @click="handleSendVerifyCode" :icon="Message">发送验证码</el-button>
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item class="form-btn">
                <el-button type="primary" size="large" @click="handleLogin('email')">登录</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>






</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RequestLogin } from '@/api/user'
import { ElMessage } from 'element-plus';
import { RequestSendVerifyEmail } from '@/api/user';
import { Unlock,User,Message } from '@element-plus/icons-vue'

const userName = ref('')
const userPassword = ref('')

const handleLogin = async (type:string) => {
  if(type === 'email'){
    // 邮箱验证码登录
  } else if(type === 'account'){
    // 账号密码登录
  }

  const res = await RequestLogin({ userName: userName.value, userPassword: userPassword.value })
  console.log("登录结果", res);
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
        message: res.message,
        type: 'warning',
      })
      break;
  }

}

const verifyCode = ref('')

const userEmail = ref('')
const handleSendVerifyCode = async () => {
  if (!userEmail.value) {
    console.log("不能为空");
  }
  const res = await RequestSendVerifyEmail({ userEmail: userEmail.value })
  switch (res.code) {
    case 0:
      ElMessage({
        message: res.message,
        type: 'success',
      })
      break;
    default:
      ElMessage({
        message: res.message,
        type: 'warning',
      })
      break;
  }

}
</script>

<style lang="less" scoped>
.login-container{
  .login-form{
    width: 400px;
    margin: 40px auto;
    padding: 10px 60px 20px 60px;
  }
  .form-btn{
    .el-button{
      width: 100%;
    }
  }
}
</style>