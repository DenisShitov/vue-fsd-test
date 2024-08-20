import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import { Home } from './pages/home'

const pinia = createPinia()

const app = createApp(Home)
app.use(pinia)
app.mount('#app')
