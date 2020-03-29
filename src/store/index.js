import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'河南'
  },
  mutations: {
    changeCity(state,city){
      state.city = city //state.city等于actions的commit传递来的city
    }
  },
  actions: {
    // changeCity(ctx,city){
    //   ctx.commit('changeCity',city) //异步的actions 先使用commit修改mutations
    // }
  },
  modules: {
  }
})
