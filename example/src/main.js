import { createApp } from 'vue'
import './style.css'
import 'intro.js/minified/introjs.min.css'
import App from './App.vue'
import introJs from 'intro.js-vue'

const app = createApp(App)

app.use(introJs)

app.mount('#app')
