import {reqUserAddress,reqUserTrade} from '@/api'

const state={
  userAddress:[],
  trade:{}
}
const mutations={
  USERADRESS(state,address){
    state.userAddress=address
  },
  USERTRADE(state,trade){
    state.trade=trade
  }
}
const actions={
  async getUserAddress({commit}){
    let result=await reqUserAddress()
    if(result.code==200){
      commit('USERADRESS',result.data)
      return 'getUserAddress'
    }else{
      return Promise.reject(new Error('getUserAddress fail'))
    }
  },
  async getUserTrade({commit}){
    let result=await reqUserTrade()
    if(result.code==200){
      commit('USERTRADE',result.data)
      return 'trade'
    }else{
      return Promise.reject(new Error('getTrade fail'))
    }
  }
}
const getters={

}
export default{
  state,
  mutations,
  actions,
  getters
}