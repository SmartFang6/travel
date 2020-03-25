<template>
  <div class="icon-item">
    
  </div>
</template>

<script>
export default {
  name: "IconsItem",
  components: {},
  props: {},
  data() {
    return {
      datas:[
        'aaa','bbb','ccc'
      ]
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang="stylus" scoped>
.icon {
  float: left;
  width: 25%;
  padding-bottom: 27%;
  // height 0
  position: relative;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .img-content {
      width: 89%;
      margin: 0 auto;
      display: block;
    }
  }

  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.44rem;
    text-align: center;
    color: $darkTextColor;
  }
}
</style>