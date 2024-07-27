import {reqResgisterCode,reqResgister,reqLogin,reqUserInfo} from '@/api'
import {getToken,setToken,clearToken} from '@/utils/token'
const state={
  code:'',
  token:getToken
}
const mutations={
  REGISTERCODE(state,code){
    state.code=code
  },
  LOGIN(state,token){
    state.token=token
  }
}
const actions={
  async getUserInfo({commit}){
    let result = await reqUserInfo()
    console.log(result)
  },
  async getRegisterCode({commit},phone){
    let result=await reqResgisterCode(phone)
    if(result.code==200){
      commit('REGISTERCODE',result.data)
    }
  },
  async register({commit},user){
    let result =await reqResgister(user)
    if(result.code==200){
      return 'register success'
    }else{
      return Promise.reject(new Error('注册失败'))
    }
  },
  async login({commit},user){
    let result=await reqLogin(user)
    if(result.code==200){
      setToken(result.data.token)
      commit('LOGIN',result.data.token)
      return 'login success'
    }else{
      return Promise.reject(new Error('登录失败'))
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