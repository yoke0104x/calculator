/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-03-08 09:37:49
 */
import { createApp } from 'vue'
import './style.css'
import router from "./router"
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')
