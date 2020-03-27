<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch
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
<style lang="stylus"  scoped>

</style>