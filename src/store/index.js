import vue from 'vue'
import vuex from 'vuex'
import Home from './Home'
vue.use(vuex)

export default new vuex.Store({
  modules:{
    Home
  }
})