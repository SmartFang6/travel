<template>
  <div class="header">
    <router-link to='/' tag="div" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="{'opacity':'this.opacity'}">
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
  props:{
    opacity:{
      type:Number
    },
    showAbs:{
      type:Boolean
    }
  },
  data(){
    return {
    }
  },
  // activated(){
  //   window.addEventListener('scroll',this.handleScroll) //全局的绑定事件，组件被挂载的时候添加scroll事件，监听浏览器滚动，然后执行handleScroll函数
  // },
  // deactivated(){
  //   window.removeEventListener('scroll',this.handleScroll) // 页面隐藏的时侯对全局事件进行解绑，防止事件在其他页面也使用
  // },
  created(){},
  methods:{
    // handleScroll(){
    //   // console.log(document.documentElement.scrollTop)//找到现在滚动距离顶部的位置
    //   // const top = document.documentElement.scrollTop
    //   // console.log(top/140)
    //   if(this.y>60 && this.y<140){
    //     let opacity = this.y/140 //透明度的值0-1
    //     console.log(opacity)
    //     opacity = opacity > 1 ? 1 : opacity
    //     this.opacityStyle = {
    //       opacity
    //     }
    //     this.showAbs = false
    //   }else{
    //     this.showAbs = true
    //   }
    // }
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
  z-index 2
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