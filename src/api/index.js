// 对所有的api接口进行统一管理
import requests from "./request";
// 引入mock接口文件
import mockRequests from './mockRequests'
// 三级联动接口
export const reqCategory=()=>requests({url:'/product/getBaseCategoryList',methods:'get'})
export const reqBanner=()=>mockRequests({url:'/banner',methods:'get'})