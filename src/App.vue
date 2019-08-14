<template>
  <div id="app">
      <!--由2部分组成：路由，路由导航-->
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.showFooter"></FooterGuide><!--$route表示当前路由-->
  </div>
</template>

<script>
// 引入组件
import FooterGuide from '../src/components/FooterGuide/FooterGuide.vue'

export default {
  // 将组件映射成标签
  components: {
    FooterGuide
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
