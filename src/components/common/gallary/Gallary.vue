<template>
  <div class="gallary" @click="offGallary">
    <div class="wrapper">
      <swiper :options='swiperOption'>
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="imgs" :src='item' alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  components: {},
  props: {
    imgs:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        paginationType:'fraction', //显示数字
        observeParents: true,//解决隐藏变显示是，图片宽高计算问题
        observer:true //自我刷新
      }
    };
  },
  computed: {},
  created() {},
  methods: {
    offGallary(){
      this.$emit('close')
    }
  }
};
</script>
<style lang="stylus" scoped>
.gallary 
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;

  .wrapper 
    width 100%
    // overflow hidden
    height 0
    padding-bottom 100%
    .imgs
      width 100%
    .swiper-pagination 
      color #fff
      font-size .38rem
      bottom -1rem
    .swiper-container
      overflow inherit  

</style>