import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations,
  actions: {
    // changeCity(ctx,city){
    //   ctx.commit('changeCity',city) //异步的actions 先使用commit修改mutations
    // }
  },
  modules: {}
})