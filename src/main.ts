import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import { globalRegister } from '@/global'
import { setupStore } from '@/store'

import 'normalize.css'
import './assets/css/index.less'

// 全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.use(router)
app.use(store)
// registerApp(app)
app.use(globalRegister)
setupStore(app)
// app.use(ElementPlus)
app.mount('#app')
