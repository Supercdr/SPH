// 对所有的api接口进行统一管理
import requests from "./request";

// 三级联动接口
export const reqCategory=()=>requests({url:'/product/getBaseCategoryList',methods:'get'})