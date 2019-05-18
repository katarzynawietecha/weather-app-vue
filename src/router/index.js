import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import City from '@/components/City'
import Settings from '@/components/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
