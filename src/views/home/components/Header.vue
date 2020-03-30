<template>
  <div class="header">
    <div class="header-left"><span class="iconfont">&#xe624;</span></div>
    <div class="header-center">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.citys}}
          <span class="iconfont">&#xe64a;</span>
        </div>
      </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  components:{},
  props:{
  },
  data(){
    return {
      
    }
  },
  computed:{
    ...mapState({citys:'city'})
  },
  created(){},
  methods:{},
}
</script>
<style lang="stylus" scoped> 
/*1rem = html font-size  = 50px*/
  @import '~styles/varibles.styl'
.header
  display: flex;
  height :$headerHeight; 
  line-height: $headerHeight;
  background:$bgColor;
  text-align: center;
  color: #fff;
  .header-left
    width: .64rem;
    float: left;
  .header-center
    flex: 1;
    text-align: left;
    background:#fff;
    height: .64rem;
    line-height: .64rem;
    padding-left: .2rem;
    color: #ccc;
    margin-top: .12rem;
    border-radius: .1rem;
  .header-right
    min-width: 1.04rem;
    padding 0 0.1rem
    float: right;
    color #fff
    .iconfont
      font-size:.24rem
      padding-left:-.2rem
</style>