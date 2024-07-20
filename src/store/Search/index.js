import {reqGetSearch} from '@/api'
const state={
  searchList:{}
}
const mutations={
  GETSEARCHLIST(state,searchList){
    state.searchList=searchList
    console.log(searchList)
  }
}
const actions={
  async getSearchList({commit},params){
    let result=await reqGetSearch(params)
    if(result.code==200){
      commit('GETSEARCHLIST',result.data)
    }
  }
}
const getters={
  attrsList(){
    // 网络慢或断网没有数据的情况下返回空数组
    return state.searchList.attrsList||[]
  },
  goodsList(){
    return state.searchList.goodsList||[]
  },
  trademarkList(){
    return state.searchList.trademarkList||[]
  },
}
export default{
  state,
  mutations,
  actions,
  getters
}