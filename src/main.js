/**
 * 入口js
 */
import Vue from 'vue'
import App from '../src/App.vue'
import router from '../src/router'// 1.引入router

let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router // 2.配置router
})

Vue.use({
  vm
})
