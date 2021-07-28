<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <img src="@/assets/logo.png" alt="" />
  <h2>{{ $store.state.name }}</h2>
  <router-link to="/login">登陸</router-link>
  <router-link to="/main">首頁</router-link>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 局部引入
// import { ElButton } from 'element-plus'
// 局部引入css
// import 'element-plus/lib/theme-chalk/el-button.css'
// import 'element-plus/lib/theme-chalk/base.css'

export default defineComponent({
  name: 'App'
  // components: {
  //   ElButton
  // }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
