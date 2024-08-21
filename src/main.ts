import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import { PageHome } from './pages/home'

const pinia = createPinia()

const app = createApp(PageHome)
app.use(pinia)
app.mount('#app')
