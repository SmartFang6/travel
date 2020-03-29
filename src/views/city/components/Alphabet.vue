<template>
  <div class="list">
    <div class="item" v-for="(item,key) of citys" :key="key">{{key}}</div>
  </div>
</template>

<script>
export default {
  name:'Alphabet',
  components:{},
  props:{
    citys:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
    }
  },
  computed:{},
  created(){},
  methods:{},
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.list
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  display  flex
  flex-direction column
  justify-content center
  .item
    text-align center
    line-height .4rem
    color $bgColor
</style>