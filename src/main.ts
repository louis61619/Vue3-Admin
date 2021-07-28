import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import { globalRegister } from '@/global'
import './service/axios_demo'

// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
// registerApp(app)
app.use(globalRegister)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_API)
