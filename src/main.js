import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import  'styles/border.css'
import  'styles/reset.css'
import  'styles/iconfont.css'
import  'swiper/dist/css/swiper.css'
import fastClick from 'fastclick'

Vue.use(VueAwesomeSwiper/* {default flobal options}*/)
Vue.config.productionTip = false
fastClick.attach(document.body)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
