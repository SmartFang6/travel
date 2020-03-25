<template>
  <div class="wrapper">
    <home-headers></home-headers>
    <home-swiper />
    <home-icons />
  </div>
</template>

<script>
import HomeHeaders from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  components:{
    HomeHeaders,
    HomeSwiper,
    HomeIcons
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