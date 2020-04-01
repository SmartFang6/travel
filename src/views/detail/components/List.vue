<template>
  <div class="list">
    <div v-for="(item,index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang="stylus"  scoped>
.item-title
  line-height .8rem
  font-size .32rem
  padding 0 .2rem
  .item-title-icon
    position relative
    top .06rem
    left .06rem
    display inline-block
    width 0.36rem
    height 0.36rem
    background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
    margin-right .1rem
    background-size .4rem 3rem
.item-children
  padding 0 .2rem    
</style>