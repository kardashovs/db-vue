import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'



import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router.js'
import Axios from 'axios'


Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.prototype.$http = Axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router: router
}).$mount('#app')
