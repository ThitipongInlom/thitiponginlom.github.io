import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './plugins/i18n'
import store from './store'
import aos from './plugins/aos'

import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js"
import './plugins/bootstrap.js'

createApp(App)
.use(store)
.use(router)
.use(i18n)
.use(aos)
.mount('#app')
