import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Bootstrap
import { BootstrapVue,IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// L18n
import { i18n } from './plugins/i18n.js'
// Css
import './plugins/css.js'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  store, 
  i18n,
  render: h => h(App)
}).$mount('#app')
