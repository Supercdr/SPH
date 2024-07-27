import {reqGoodsInfo,reqAddOrUpdateGoods} from '@/api'
const state={
  goodsInfo:{}
}
const mutations={
  GETGOODSINFO(state,goodsInfo){
    state.goodsInfo=goodsInfo
  }
}
const actions={
  async getGoodsInfo({commit},skuId){
    let result = await reqGoodsInfo(skuId)
    if(result.code==200){
      commit('GETGOODSINFO',result.data)
    }
  },
  async addGoods({commit},{skuId,skuNum}){
    let result =await reqAddOrUpdateGoods(skuId,skuNum)
    if(result.code==200){
      return 'success'
    }else{
      return Promise.reject(new Error('addOrUpdate fail'))
    }
  }
}
const getters={
  categoryView(){
    return state.goodsInfo.categoryView||{}
  },
  skuInfo(){
    return state.goodsInfo.skuInfo||{}
  },
  spuSaleAttrList(){
    return state.goodsInfo.spuSaleAttrList||{}
  },

}
export default{
  state,
  mutations,
  actions,
  getters
}