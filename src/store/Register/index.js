import {reqResgisterCode,reqResgister,reqLogin,reqUserInfo,reqLogout} from '@/api'
import {getToken,setToken,clearToken} from '@/utils/token'
const state={
  code:'',
  token:getToken(),
  userInfo:{}

}
const mutations={
  REGISTERCODE(state,code){
    state.code=code
  },
  LOGIN(state,token){
    state.token=token
  },
  GETUSERINFO(state,userInfo){
    state.userInfo=userInfo
  },
  LOGOUT(state){
    state.code=''
    state.userInfo=''
    clearToken()
  }
}
const actions={

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
  },
  async getUserInfo({commit}){
    let result = await reqUserInfo()
    if(result.code==200){
      commit('GETUSERINFO',result.data)
      return 'get success'
    }else{
      return Promise.reject(new Error('get fail'))
    }
  },
  async logout({commit}){
    let result=await reqLogout()
    if(result.code==200){
      commit('LOGOUT')
      return 'logout success'
    }else{
      return Promise.reject(new Error('退出失败'))
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