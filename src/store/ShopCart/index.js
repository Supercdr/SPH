import {reqShopCart,reqDeleteCart,reqChangeCheckCart} from '@/api'
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
  },
  // 删除单个商品
  async deleteCart({commit},skuId){
    let result = await reqDeleteCart(skuId)
    if(result.code==200){
      return 'delete success'
    }else{
      return Promise.reject(new Error('delete fail'))
    }
  },
  // 删除选中的所有商品
  deleteAllChecked({dispatch,getters}){
    let promiseAll=[]
    getters.cartList.cartInfoList.forEach(item => {
      if(item.isChecked==1){
        let result=dispatch('deleteCart',item.skuId)
        // 将遍历的每个商品的删除结果(promise对象)放入数组中
        promiseAll.push(result)
      }
    });
    // Promise.all()如果数组中有一个失败的promise对象则返回false，若都成功，则返回true
    return Promise.all(promiseAll)
  },
  async changeCheckCart({commit},{skuId,isChecked}){
    let result = await reqChangeCheckCart(skuId,isChecked)
    if(result.code==200){
      return 'change success'
    }else{
      return Promise.reject(new Error('change fail'))
    }
  },
  changeAllChecked({dispatch,getters},all){
    let promiseAll=[]
    getters.cartList.cartInfoList.forEach(item=>{
      let result=item.isChecked!=all?dispatch('changeCheckCart',{skuId:item.skuId,isChecked:all}):''
      promiseAll.push(result)
    })
    return Promise.all(promiseAll)
  },
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