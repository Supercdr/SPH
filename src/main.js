import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServe'
import typeNav from '@/components/typeNav'
import Carousel from '@/components/Carousel'
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
// 注册全局组件 第一个参数:全局组件的名称 第二个参数,需要注册的组件
Vue.component(typeNav.name,typeNav)
Vue.component(Carousel.name,Carousel)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
