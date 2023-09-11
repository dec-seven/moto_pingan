<!--
 * @Date: 2023-09-09 21:55:28
 * @LastEditTime: 2023-09-09 22:46:50
 * @Description: 
-->
<template>
  <div class="play-container">
    <el-row class="play-main">
      <el-col :span="16" class="play-main-draw">
        <div id="canvas-container" style="width: 100%; height: 100%"></div>
      </el-col>
      <el-col :span="8" class="play-main-chat">聊天区域</el-col>
    </el-row>
    <el-row class="play-info">
      <div>信息部分</div>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import BoardCanvas from './Board';

onMounted(()=>{
  new BoardCanvas(document.getElementById('canvas-container') as HTMLElement)
})

</script>

<style lang="less" scoped>
.play-container{
  margin: 20px;
  border: 1px solid red;
  .play-main{
    height: 500px;
    .play-main-draw{
      border-right: 1px solid red;
    }
  }
  .play-info{
    height: 200px;
    border-top: 1px solid red;
  }
}
</style>