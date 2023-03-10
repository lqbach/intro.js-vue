import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import introJs from 'intro.js-vue3'

const app = createApp(App)
app.use(introJs)

app.mount('#app')
