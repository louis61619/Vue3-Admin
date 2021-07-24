<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <img src="@/assets/logo.png" alt="" />
  <h2>{{ $store.state.name }}</h2>
  <router-link to="/login">登陸</router-link>
  <router-link to="/main">首頁</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
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
