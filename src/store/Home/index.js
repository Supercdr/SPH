import {reqCategory,reqBanner,reqFloor} from "@/api"
const state ={
  categoryList:[],
  bannerList:[],
  floorList:[]
}
const mutations={
  GETCATEGORYLIST(state,categoryList){
    state.categoryList=categoryList
  },
  GETBANNERLIST(state,bannerList){
    state.bannerList=bannerList
  },
  GETFLOORLIST(state,floorList){
    state.floorList=floorList
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
    }
  },
  async getFloorList({commit}){
    let result =await reqFloor()
    if(result.code==200){
      commit('GETFLOORLIST',result.data)
    }
  }
}
const getters={

}
export default {
  state,
  mutations,
  actions,
  getters,
}