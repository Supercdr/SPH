import {reqGoodsInfo} from '@/api'
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
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}