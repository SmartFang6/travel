<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
        alt
      />
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span> {{this.bannerList.length}}
        </div>
      </div>
    </div>
    <gallary :imgs="bannerList" v-show="showGallary" @close="closeBanner"></gallary>
  </div>
</template>

<script>
import Gallary from "common/gallary/Gallary";
export default {
  name: "DetailBanner",
  components: {
    Gallary
  },
  props: {
    sightName:{
      type:String
    },
    bannerImg:String,
    bannerList:Array
  },
  data() {
    return {
      showGallary:false
      // imgs: [
      //   "https://imgs.qunarzz.com/sight/p0/1905/96/96bb055f3e3f4bdba3.img.jpg_350x240_4a5553e7.jpg",
      //   "https://imgs.qunarzz.com/sight/p0/1409/15/403a04fbfd1657567148840d5269b465.jpg_350x240_14e39820.jpg"
      // ]
    };
  },
  computed: {},
  created() {},
  methods: {
    handleBannerClick(){
      this.showGallary = true
    },
    closeBanner(){
      this.showGallary = false
    }
  }
};
</script>
<style lang="stylus"  scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    padding: 0 0.2rem;
    color: #fff;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
    }

    .banner-number {
      line-height: 0.32rem;
      height: 0.32rem;
      padding: 0 0.4rem;
      margin-top: 0.14rem;
      font-size: 0.24rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>