import Vue from "vue"
import Vuex from 'vuex'

import doctors from './modules/doctors'
import tickets from './modules/tickets'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    doctors,
    tickets
  }
})