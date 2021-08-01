<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 局部引入
// import { ElButton } from 'element-plus'
// 局部引入css
// import 'element-plus/lib/theme-chalk/el-button.css'
// import 'element-plus/lib/theme-chalk/base.css'

// defineComponent 將定義物件內部可輸入的屬性

export default defineComponent({
  name: 'App'
  // components: {
  //   ElButton
  // }
  // setup(props) {

  // }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
