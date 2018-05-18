import Vue from 'vue'
import Router from 'vue-router'
import Heraldry from '@/components/Heraldry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Heraldry',
      component: Heraldry
    }
  ]
})
