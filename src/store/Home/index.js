import {reqCategory} from "@/api"
import {reqBanner} from "@/api"
const state ={
  categoryList:[],
  bannerList:[]
}
const mutations={
  GETCATEGORYLIST(state,categoryList){
    state.categoryList=categoryList
  },
  GETBANNERLIST(state,bannerList){
    state.bannerList=bannerList
    console.log('banner mu')
  }
}
const actions={
  async getCategoryList({commit}){
    // reqCategory请求返回的对象是promise对象，使用await和async处理获取到数据result
    let result= await reqCategory()
    if(result.code===200){
      commit('GETCATEGORYLIST',result.data)
    }
  },
  async getBannerList({commit}){
    let result = await reqBanner()
    if(result.code==200){
      commit('GETBANNERLIST',result.data)
      console.log('bannerList action')
    }
  }
}
const getters={

}
export default {
  namespaced:true,
  state,
  mutations,
  actions,
  getters,
}