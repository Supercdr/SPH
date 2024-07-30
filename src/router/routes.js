
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
export default [
  {
    path:'/center',
    name:'Center',
    component:Center,
    meta:{showFooter:true},
    children:[
      {
        path:'myorder',
        name:'MyOrder',
        component:MyOrder
      },
      {
        path:'grouporder',
        name:'GroupOrder',
        component:GroupOrder
      },
      // 路由重定向
      {
        path:'/center',
        redirect:'/center/myorder'
      },
    ],
    
  },
  
  {
    path:'/paySuccess',
    name:'PaySuccess',
    component:PaySuccess,
    meta:{showFooter:true},
    // 路由独享守卫
    beforeEnter:(to,from,next)=>{
      // 这里可以编写筛选逻辑
      next()
    }
  },
  {
    path:'/pay',
    name:'Pay',
    component:Pay,
    meta:{showFooter:true}
  },
  {
    path:'/trade',
    name:'Trade',
    component:Trade,
    meta:{showFooter:true}
  },
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