/**
 * 路由器对象模块
 * */
import Vue from 'vue'
import VueRouter from 'vue-router' // 需先npm下载router

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由 routes  ,是数组,数组里面的一个个路由是一个个对象
  routes: [
    {
      path: '/msite', // 就是之后在浏览器跳转的页面的url
      component: Msite, // 注意单词不能拼错
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: { // meta固定的
        showFooter: true // 表示有tab导航，没加的路由组件就是没有tab导航的
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    // 初始默认的页面显示
    {
      path: '/',
      redirect: '/msite' // 重定向到/msite的页面
    }
  ]
})
