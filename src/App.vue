<!--
 * @Date: 2023-08-25 10:19:49
 * @LastEditTime: 2023-08-25 11:58:11
 * @Description: 
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped>

</style>
