<template>
  <div class="weekend">
    <div class="title">
     周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" alt="">
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
  props:{},
  data(){
    return {
      recommendList:[
        {
          id:'0001',
          imgUrl:'//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg',
          title:'北京-泰国6天跟团游',
          desc:'含往返飞机票(含税)+5晚住宿'
        },
        {
          id:'0002',
          imgUrl:'//imgs.qunarzz.com/p/p26/201302/28/d98c85ce311ea98693835fbb.jpg_256x160_5197fb68.jpg',
          title:'北京-清迈6天自由行',
          desc:'含往返飞机票(含税)+5晚住宿'
        },
        {
          id:'0003',
          imgUrl:'//imgs.qunarzz.com/p/p78/201302/28/c2da123d4bb12ee593835fbb.jpg_256x160_3755801b.jpg',
          title:'北京-曼谷6天跟团游',
          desc:'含往返飞机票(含税)+5晚住宿'
        },
        {
          id:'0004',
          imgUrl:'//imgs.qunarzz.com/sight/p0/1504/37/37bc07abdd1fdbee.water.jpg_256x160_061797a3.jpg',
          title:'北京-苏梅岛6天自由行',
          desc:'含往返飞机票(含税)+4晚住宿'
        },
      ]
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
  padding-bottom 33.9%
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