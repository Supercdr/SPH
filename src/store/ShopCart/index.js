import {reqShopCart} from '@/api'
import {getUUID} from '@/utils/uuid_token';
const state={
  uuid_token:getUUID(),
  shopCartList:[]
}
const mutations={
  SHOPCARTLIST(state,shopCartList){
    state.shopCartList=shopCartList
  }
}
const actions={
  async getShopCart({commit}){
    let result= await reqShopCart();
    if(result.code==200){
      commit('SHOPCARTLIST',result.data)
    }
  }
}
const getters={
  cartList(){
    return state.shopCartList[0]||{}
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}