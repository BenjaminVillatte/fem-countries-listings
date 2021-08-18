import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import './assets/reset.css'
import './assets/styles.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.config.devtool = true
app.mount('#app')
