import Vue from "vue";
import router from './plugins/router'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import store from './store'

import './core/filters'

import './json/doctors.json'

import App from '@/App'

new Vue({
  store,
  router,
  vuetify,
  i18n,
  render: v => v(App),
}).$mount('#app')