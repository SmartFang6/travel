<template>
  <div class="wrapper">
    <swiper v-if="swiper.length" :options="swiperOption">
      <swiper-item v-for="item in swiper" :key="item.id">
        <a :href="item.link">
          <img v-lazy="item.imgUrl" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    swiper: {
      type: Array,
      defalut() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        autoPlay: false
      }
      // datas:[
      //   {
      //     link:"//dygj2.package.qunar.com/user/detail.jsp?id=2508689331&tm=pc_jrth",
      //     imgurl:"//imgs.qunarzz.com/p/tts0/1801/ce/980d870a80048602.jpg_r_480x320x90_aff68da9.jpg"
      //   },
      //   {
      //     link:"//msyx3.package.qunar.com/user/detail.jsp?id=557429432&tm=pc_jrth",
      //     imgurl:"//imgs.qunarzz.com/p/tts9/1811/77/043d654b37ec9502.jpg_r_480x320x90_a6176412.jpg"
      //   },
      //   {
      //     link:"//lylx4.package.qunar.com/user/detail.jsp?id=439717011&tm=pc_jrth",
      //     imgurl:"//imgs.qunarzz.com/vs_ceph_vs_tts/5bf3c567-9fdb-460b-9f02-34be7445c9e8.jpg_r_480x320x95_ddae113a.jpg"
      //   },
      //   {
      //     link:"//yhlx6.package.qunar.com/user/detail.jsp?id=2990167870&tm=pc_jrth",
      //     imgurl:'//imgs.qunarzz.com/vs_ceph_vs_tts/ce91c8a4-83b7-44d2-ab3d-951a9fde3a99.jpg_r_480x320x90_888dd947.jpg'
      //   },
      // ]
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang="stylus"  scoped>
img {
  height: 45vw;
}
</style>