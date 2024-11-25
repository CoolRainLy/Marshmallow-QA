// 基础样式
import "@/style/main.scss"
// 导入 tailwindcss
import "@/style/tailwind.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
