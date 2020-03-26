<template>
  <div class="wrapper">
    <home-headers></home-headers>
    <home-swiper />
    <home-icons />
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
import HomeHeaders from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
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
    }
  },
  computed:{},
  created(){},
  methods:{},
}
</script>
<style  scoped>
</style>