<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <ul>
      <router-link :to="'/detail/'+item.id" tag="li" class="item border-bottom" v-for="item of recommend" :key="item.id">
        <!-- <div class="item-img-wrapper"> -->
        <img class="item-img" v-lazy="item.imgUrl" alt />
        <!-- </div> -->
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  components: {},
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
<style lang='stylus' scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
}

.item {
  overflow: hidden;
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      color: #666;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      padding: 0.06rem 0;
      ellipsis();
    }

    .item-button {
      background: #ff9300;
      padding: 0 0.12rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>