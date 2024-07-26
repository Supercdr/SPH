import vue from 'vue'
import vuex from 'vuex'
import Home from './Home'
import Search from './Search'
import Detail from './Detail'
import ShopCart from './ShopCart'
vue.use(vuex)

export default new vuex.Store({
  modules:{
    Home,
    Search,
    Detail,
    ShopCart
  }
})