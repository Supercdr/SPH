import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import typeNav from '@/pages/Home/typeNav'
// 引入三级联动接口
import {reqCategory} from '@/api'
Vue.config.productionTip = false
// 注册全局组件 第一个参数:全局组件的名称 第二个参数,需要注册的组件
Vue.component(typeNav.name,typeNav)
reqCategory()
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
