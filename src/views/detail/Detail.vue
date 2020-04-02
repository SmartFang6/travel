<template>
  <div>
    <detail-header :showAbs="showAbs" :opacity="opacity" class="header"></detail-header>
    <div class="wrapper" ref="wrapper">
      <div class="detail">
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerList="bannerList"></detail-banner>
        <div class="content">
          <detail-list :list="list"></detail-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
import Bscroll from "better-scroll";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  props: {},
  data() {
    return {
      sightName: "",
      bannerImg: "",
      bannerList: [],
      list: [],
      opacity:0,
      showAbs:true
    };
  },
  computed: {},
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper,{
      probeType:2
    });
    this.scroll.on('scroll',(position)=>{
      // console.log(-position.y)
      let positionY = -position.y
      if(positionY>60 && positionY<140){
        let opacity = positionY/140 //透明度的值0-1
        console.log(opacity)
        opacity = opacity > 1 ? 1 : opacity
        this.showAbs = false
      }else{
        this.showAbs = true
      }
      console.log(this.showAbs)
    })
    this.getDetailInfo();
  },
  methods: {
    getDetailInfo() {
      axios
        .get("http://127.0.0.1:3000/detail?id=" + this.$route.params.id)
        .then(this.getData);
    },
    getData(res) {
      // console.log(res)
      res = res.data.data[0];
      // console.log(res)
      if (res.ret && res.data) {
        const data = res.data;
        console.log(data);
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.list = data.categoryList;
        this.bannerList = data.gallaryImgs;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.header
  position relative
  z-index 9
.wrapper 
  height: calc(100vh - 0.86rem);
  .content 
    height: 50rem;

</style>