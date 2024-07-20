// 对所有的api接口进行统一管理
import requests from "./request";
// 引入mock接口文件
import mockRequests from './mockRequests'
// 三级联动接口
export const reqCategory=()=>requests({url:'/product/getBaseCategoryList',method:'get'})
export const reqBanner=()=>mockRequests({url:'/banner',method:'get'})
export const reqFloor=()=>mockRequests({url:'/floor',method:'get'})
export const reqGetSearch=(params)=>requests({url:'/list',method:'post',data:params})