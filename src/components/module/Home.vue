<template>
  <div>
      <Category />
      <Banner :img="img"/>
      <div class="index-main">
        <ul>
            <li class="lists" v-for="(item,index) in items" :key="index">
                <router-link :to="'/detail/'+item.product_id">
                  <img :src="item.product_img_url" width="150" height="150">
                </router-link>
                <label>
                    <b class="discount">折扣价： {{item.product_uprice}}</b>
                    <span class="price-text">原价： {{item.product_price}}</span> 
                </label>            
            </li> 
        </ul>  
    </div>
  </div>
</template>

<script>
import Banner from './common/Banner';   //引入组件
import Category from './common/Category';   //引入组件
import axios from 'axios';

export default {
  data () {
    return {
      img: [require("@/assets/img/1.jpg"),
            require("@/assets/img/2.jpg"),
            require("@/assets/img/3.jpg"),
            require("@/assets/img/4.jpg"),
            require("@/assets/img/5.jpg"),
            require("@/assets/img/6.jpg")],
      items: []
    }
  },
  components: { 
    Banner,
    Category
  },
  methods:{ //方法
    getData:function(){
      axios.get('http://127.0.0.1:3333/home/page/1/10').then(res=>{
        console.log(res);
        if(res.status =='200'){
          this.items = res.data;
        }
      },(error)=>{
        console.log(error)
      })
    }
  },
  mounted:function(){    //生命周期
    this.getData();
  }
}
</script>


