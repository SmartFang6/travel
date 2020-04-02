<template>
  <div class="city-list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title .border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title .border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" @click="handleCity(item.name)" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of citys" :key="key" :ref="key">
        <div class="title .border-topbottom">{{key}}</div>
        <div class="item-list"  @click="handleCity(i.name)" v-for="i of item" :key="i.id">
          <div class="item border-bottom">{{i.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import {mapState, mapMutations} from 'vuex'
export default {
  name: "CityList",
  components: {},
  props: {
    citys: {
      type: Object,
      default() {
        return {};
      }
    },
    hot: {
      type: Array,
      default() {
        return [];
      }
    },
    letter: {
      type: String
    }
  },
  data() {
    return {
    };
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper,{
      click:true
    });
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter() {
      // console.log(this.letter);
      if(this.letter){
        const element = this.$refs[this.letter][0]
        // console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCity(city){
      // console.log(city)
      // this.$store.dispatch('changeCity',city) //异步的vuex先修改actions再通过修改mutations而修改state，并传递一个city
      // this.$store.commit('changeCity',city)  //同步的vuex直接修改mutations
      this.changeCity(city)
      this.$router.push('/')
      
    },
    ...mapMutations(['changeCity'])
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.city-list {
  position: absolute;
  overflow: hidden;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        text-align: center;
        border: 0.02rem solid #ccc;
        padding: 0.1rem 0;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      padding: 0.02rem;
      line-height: 0.76rem;
    }
  }
}
</style>