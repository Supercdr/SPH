
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default [
  {
    path:'/shopCart',
    name:'ShopCart',
    component:ShopCart,
    meta:{showFooter:true}
  },
  {
    path:'/addCartSuccess',
    name:'AddCartSuccess',
    component:AddCartSuccess,
    meta:{showFooter:true}
  },
  {
    path:'/detail/:skuId',
    component:Detail,
    meta:{showFooter:true}
  },
  {
    path:'/home',
    component:Home,
    meta:{showFooter:true}
  },
  {
    name:'Search',
    path:'/search/:keyword?',
    component:Search,
    meta:{showFooter:true}
  },
  {
    path:'/login',
    component:Login,
    meta:{showFooter:false}
  },
  {
    path:'/register',
    component:Register,
    meta:{showFooter:false}
  },
  // 首页路由重定向
  {
    path:'*',
    redirect:'/home'
  }
]