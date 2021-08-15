<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
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

import { ElConfigProvider } from 'element-plus'

import zhTW from 'element-plus/lib/locale/lang/zh-tw'

export default defineComponent({
  name: 'App',
  components: {
    ElConfigProvider
  },
  data() {
    return {
      locale: zhTW
    }
  }
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
