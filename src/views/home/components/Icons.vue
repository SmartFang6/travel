<template>
  <div class="icons" style="margin-top:.1rem">
    <swiper>
      <swiper-slide v-for="(page , index) of pages" :key="page.id">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="img-content" :src="item.url" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Icons",
  components: {},
  props: {},
  data() {
    return {
      iconList: [
        {
          url: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店"
        },
        {
          url: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          desc: "机票"
        },
        {
          url: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          desc: "火车票"
        },
        {
          url: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          desc: "度假"
        },
        {
          url: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
          desc: "景点门票"
        },
        {
          url:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          desc: "海外酒店"
        },
        {
          url:
            "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
          desc: "低价机票"
        },
        {
          url:
            "https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
          desc: "汽车票船票"
        },
        {
          url:
            "https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png",
          desc: "自由行"
        },
        {
          url:
            "https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png",
          desc: "攻略"
        },
        {
          url:
            "https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png",
          desc: "民宿客栈"
        },
        {
          url:
            "https://picbed.qunarzz.com/83af731055e121a3251690b225327b56.png",
          desc: "专车自驾"
        },
        {
          url:
            "https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png",
          desc: "一日游"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  created() {},
  methods: {}
};
</script>
<style lang='stylus'  scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-container 
  overflow: hidden;
  height: 0;
  padding-bottom: 42%;
  .icon 
    float: left;
    width: 25%;
    padding-bottom: 21%;
    // height 0
    position: relative;
    .icon-img 
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      .img-content 
        width: 62%;
        margin: 0 auto;
        display: block;
    .icon-desc 
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: 0.44rem;
      text-align: center;
      color: $darkTextColor;
      ellipsis();
</style>