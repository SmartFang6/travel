<template>
  <div class="weekend">
    <div class="title">
     周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of weekend" :key="item.id">
        <div class="item-img-wrapper">
        <img class="item-img" v-lazy="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Weekend',
  components:{},
  props:{
    weekend:{
      type:Array,
      default(){
        return []
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
<style lang='stylus' scoped>
@import '~styles/mixins.styl';
.title
  margin-top .2rem
  line-height .8rem
  background #eeeeee
  text-align center
  font-weight bold
.item-img-wrapper 
  overflow hidden
  height 0
  padding-bottom 37.09%
  .item-img
    width 100%
    height 2.7rem
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #ccc  
    padding .06rem 0
    ellipsis()
</style>