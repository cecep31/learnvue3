import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'
import './assets/css/app.css'
import router from './router/index'

createApp(App)
.use(router)
.mount('#app')
