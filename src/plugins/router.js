import Vue from "vue";
import VueRouter from 'vue-router'

import FormValidation from '@/pages/FormValidation.vue'
import Table from '@/pages/Table.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'form-validation',
      path: '/form-validation',
      component: FormValidation,
      meta: {
        title: 'navigation.link.case1'
      }
    },
    {
      name: 'table',
      path: '/table',
      component: Table,
      meta: {
        title: 'navigation.link.case2'
      }
    }
  ]
})