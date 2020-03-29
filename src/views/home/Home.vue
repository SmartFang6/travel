<template>
  <div class="wrapper">
    <home-headers :city="citys"></home-headers>
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
    this.getCity()
  },
  computed:{},
  created(){},
  methods:{
    getHomeInfo(){
      axios.get('http://127.0.0.1:3000/index')
      .then(this.getHomeInfoSucc)
    },
    getCity(){
      axios.get('http://127.0.0.1:3000/city')
      .then(data=>{
        let datas= data.data.data[0]
        if(datas.ret && datas.data){
          this.citys = datas.data[0].cities.B[0].name
        }
        // console.log(datas)
        console.log(this.citys)

        // console.log(this.citys.B[0].name)

      })
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