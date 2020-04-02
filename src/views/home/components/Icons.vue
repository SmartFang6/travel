<template>
  <div class="icons" style="margin-top:.1rem">
    <swiper>
      <swiper-slide v-for="(page , index) of pages" :key="page.id">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="img-content" v-lazy="item.imgUrl" />
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
  props: {
    icon:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    pages() {
      const pages = [];
      this.icon.forEach((item, index) => {
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