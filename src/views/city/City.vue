<template>
  <div class="city">
    <city-header></city-header>
    <city-search :citys="citys"></city-search>
    <city-list :citys="citys" :hot="hotCities" :letter="letter"></city-list>
    <city-alphabet :citys="citys" @change="handleClick"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  props: {},
  data() {
    return {
      citys: {},
      hotCities: [],
      letter:''
    };
  },
  mounted() {
    this.getCity();
  },
  computed: {},
  created() {},
  methods: {
    getCity() {
      axios.get("http://192.168.43.32:3000/city").then(data => {
        let datas = data.data.data[0];
        if (datas.ret && datas.data) {
          this.citys = datas.data[0].cities;
          this.hotCities = datas.data[0].hotCities;
        }
        console.log(datas); 
        // console.log(this.citys);
        // console.log(this.hotCities)
      });
    },
    handleClick(letter) {
      this.letter = letter
    }
  }
};
</script>
<style lang="stylus"  scoped></style>