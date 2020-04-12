<template>
  <div>
      <a @click="goBack()">返回</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name:'详情'
    }
  },
  methods:{
    goBack:function(){
      this.$router.push('/home');
    }
  }
}
</script>


