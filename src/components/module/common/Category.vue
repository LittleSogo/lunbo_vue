<template>
  <div class="index-category">
      <div class="category" v-for="(list,index) in lists" :key="index">
        <i class="iconfont" :class="list.icon" :style="{background:list.color}"></i>
        <label>{{list.title}}</label>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lists:[
        {title:'美食',icon:'iconfenlei',color:'#fa69b9'},
        {title:'电影',icon:'icongouwuchekong',color:'#f60'},
        {title:'美食',icon:'iconshouye1',color:'#ccc'},
        {title:'美食',icon:'iconcompass',color:'blue'},
        {title:'美食',icon:'iconfenlei',color:'green'},
        {title:'美食',icon:'iconfenlei',color:'#fa69b9'},
        {title:'美食',icon:'iconfenlei',color:'#fa69b9'},
        {title:'美食',icon:'iconfenlei',color:'#fa69b9'}
      ]
    }
  }
}
</script>


