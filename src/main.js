import Vue from 'vue'
import App from './App.vue'
import VueGtag from 'vue-gtag'
import Vuex from 'vuex'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.use(VueGtag, {
  config: { id: 'G-P0RFEHKDCE' },
})

Vue.use(Vuex)
Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
  vuetify,
  store,
  router,
}).$mount('#app')
