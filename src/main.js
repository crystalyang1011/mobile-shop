import './assets/styles/base.css'

import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia().use(persist))
app.use(router)

app.mount('#app')
