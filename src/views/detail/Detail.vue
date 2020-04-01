<template>
  <div class="detail">
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerList='bannerList'></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list='list'></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
import axios from "axios";
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
      sightName:'',
      bannerImg:'',
      bannerList:[],
      list: []
    };
  },
  computed: {},
  mounted() {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo(){
      axios.get('http://127.0.0.1:3000/detail?id='+this.$route.params.id)
      .then(this.getData)
    },
    getData(res){
      // console.log(res)
      res = res.data.data[0]
      // console.log(res)
      if(res.ret && res.data){
        const data = res.data
        console.log(data)
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.list = data.categoryList
        this.bannerList = data.gallaryImgs
      }
      
    }
  }
};
</script>
<style lang="stylus" scoped>
.content {
  height: 50rem;
}
</style>