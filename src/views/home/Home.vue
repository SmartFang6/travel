<template>
  <div class="wrapper">
    <home-headers></home-headers>
    <home-swiper :swiper="swiperList"/>
    <home-icons :icon ="icons" />
    <recommend :recommend="recommendList"></recommend>
    <weekend :weekend="weekendList"></weekend>
  </div>
</template>

<script>
import HomeHeaders from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import axios from 'axios'
export default {
  components:{
    HomeHeaders,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  },
  props:{},
  data(){
    return {
      icons:[],
      recommendList:[],
      swiperList:[],
      weekendList:[],
      citys:""
    }
  },
  mounted(){
    this.getHomeInfo()
  },
  computed:{},
  created(){},
  methods:{
    getHomeInfo(){
      axios.get('http://127.0.0.1:3000/index')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(data){
      // console.log(data)
        let dataMsg = data.data.data[0] 
        console.log(dataMsg)
        this.icons = dataMsg.icons
        this.recommendList = dataMsg.recommendList
        this.swiperList = dataMsg.swiperList
        this.weekendList = dataMsg.weekendList
        // console.log(this.icons)
    }
  },
}
</script>
<style  scoped>
</style>