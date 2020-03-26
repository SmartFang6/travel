<template>
  <div class="recommend">
    <div class="title">
     热门推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <!-- <div class="item-img-wrapper"> -->
        <img class="item-img" :src="item.imgUrl" alt="">
        <!-- </div> -->
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Recommend',
  components:{},
  props:{},
  data(){
    return {
      recommendList:[
        {
          id:'0001',
          imgUrl:'https://imgs.qunarzz.com/p/tts8/1912/5c/cd2412a1b20fbe02.jpg_160x160_a4868dd8.jpg',
          title:'北京-泰国6天跟团游',
          desc:'【郑州出发】嵩山少林寺+龙门石窟一日游【纯玩/免费上门接】'
        },
        {
          id:'0002',
          imgUrl:'https://imgs.qunarzz.com/p/tts5/1606/d1/d1844dd2efaf379a.png_160x160_28290e9d.png',
          title:'北京-清迈6天自由行',
          desc:'含往返飞机票(含税)+5晚住宿'
        },
        {
          id:'0003',
          imgUrl:'https://imgs.qunarzz.com/p/tts5/1908/5d/43b314dfcbeb3f02.jpg_160x160_d56b8c39.jpg',
          title:'北京-曼谷6天跟团游',
          desc:'【郑州起止】云台山+红石峡+玻璃栈道2日【纯玩上门接】'
        },
        {
          id:'0004',
          imgUrl:'https://imgs.qunarzz.com/p/tts0/1803/31/5bf6e71372113102.jpg_160x160_e316091e.jpg',
          title:'新乡1天自由行',
          desc:'八里沟1日|郑州到新乡南太行八里沟1日游'
        },
        // {
        //   id:'0005',
        //   imgUrl:'//imgs.qunarzz.com/sight/p0/1504/de/de67e39701f98515.water.jpg_256x160_1ccdec10.jpg',
        //   title:'北京-甲米5天自由行',
        //   desc:'含往返飞机票(含税)+4晚住宿'
        // },
        // {
        //   id:'0006',
        //   imgUrl:'//imgs.qunarzz.com/p/p49/1512/62/ea68202e734827f7.jpg_256x160_67305c3e.jpg',
        //   title:'北京-北海道6天跟团游',
        //   desc:'含往返飞机票(含税)+5晚住宿'
        // },
        // {
        //   id:'0007',
        //   imgUrl:'//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
        //   title:'北京-三亚5天自由行',
        //   desc:'含往返飞机票(含税)+4晚住宿'
        // },
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
  text-indent .2rem
.item 
  overflow hidden 
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1  
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc  
      padding .06rem 0
      ellipsis()
    .item-button
      background #ff9300
      padding 0 .12rem
      border-radius .06rem  
      color #fff
</style>