import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/1',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/2',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
