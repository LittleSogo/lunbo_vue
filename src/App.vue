<template>
  <div id="app">
    <!-- 路由出口，路由匹配的组件将渲染在这里 -->
    <router-view/> 
    <NavBottom />
  </div>
</template>

<script>
import NavBottom from './components/NavBottom';   //引入组件

export default {
  name: 'App',
  components: { 
    NavBottom 
  },
}
</script>

<style>
@import './assets/css/index.css'
</style>
