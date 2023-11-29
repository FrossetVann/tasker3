import { createApp } from 'vue'
import App from './App.vue'
import BoardComp from './components/BoardComp'
import './theme.css'

const app = createApp(App)

app.component('BoardComp', BoardComp)

app.mount('#app')
