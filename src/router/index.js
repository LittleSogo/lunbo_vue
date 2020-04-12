import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/module/Home'
import Find from '@/components/module/Find'
import Order from '@/components/module/Order'
import My from '@/components/module/My'
import Detail from '@/components/module/Detail'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/find',
      component: Find
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/detail/:id',
      component: Detail
    },
  ]
})
