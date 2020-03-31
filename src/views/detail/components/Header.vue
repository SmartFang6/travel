<template>
  <div class="header">
    <router-link to='/' tag="div" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      城市选择
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailHeader',
  components:{},
  props:{},
  data(){
    return {
      showAbs:true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  activated(){
    window.addEventListener('scroll',this.handleScroll) //绑定事件，组件被挂载的时候添加scroll事件，监听浏览器滚动，然后执行handleScroll函数
  },
  created(){},
  methods:{
    handleScroll(){
      // console.log(document.documentElement.scrollTop)//找到现在滚动距离顶部的位置
      const top = document.documentElement.scrollTop
      // console.log(top/140)
      if(top>60 && top<140){
        let opacity = top/140 //透明度的值0-1
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      }else{
        this.showAbs = true
      }
    }
  },
}
</script>
<style lang="stylus"  scoped>
@import '~styles/varibles.styl';

.header-abs
  position absolute 
  left .2rem
  top .2rem
  width 0.8rem
  height 0.8rem
  border-radius .4rem
  text-align center
  line-height .8rem
  background rgba(0,0,0,.8)
  .header-abs-icon
    color #fff
    font-size .4rem
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background-color $bgColor
  font-size .32rem
  .header-fixed-back
    width .64rem
    text-align center
    font-size .4rem
    position absolute
    color #fff
    top 0
    left 0
</style>