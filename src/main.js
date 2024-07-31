import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServe'
import typeNav from '@/components/typeNav'
import Carousel from '@/components/Carousel'
import Pagenation from '@/components/Pagenation'
import 'swiper/css/swiper.css'

// 引入表单验证插件
import '@/plugins/validate'
// 图片懒加载
import VueLazyload from 'vue-lazyload'
import lazyimg from '@/assets/logo.png'
Vue.use(VueLazyload,{
  loading:lazyimg
})

// 注册全局接口x
import * as API from '@/api'
Vue.prototype.$API=API

Vue.config.productionTip = false

// 注册全局组件 第一个参数:全局组件的名称 第二个参数,需要注册的组件
Vue.component(typeNav.name,typeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagenation.name,Pagenation)

// 引用element-ui组件
import {MessageBox} from 'element-ui'
Vue.component(MessageBox.name,MessageBox)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

new Vue({
  render: h => h(App),
  router,
  store,
  // 全局事件总线
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
