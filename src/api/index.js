// 对所有的api接口进行统一管理
import requests from "./request";
// 引入mock接口文件
import mockRequests from './mockRequests'
// 三级联动接口
export const reqCategory=()=>requests({url:'/product/getBaseCategoryList',method:'get'})
export const reqBanner=()=>mockRequests({url:'/banner',method:'get'})
export const reqFloor=()=>mockRequests({url:'/floor',method:'get'})
export const reqGetSearch=(params)=>requests({url:'/list',method:'post',data:params})
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${skuId}`,method:'get'})
export const reqAddOrUpdateGoods=(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
export const reqShopCart=()=>requests({url:'/cart/cartList',method:'get'})
export const reqDeleteCart=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
// 切换商品选中状态
export const reqChangeCheckCart=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
// 获取注册验证码
export const reqResgisterCode=(phone)=>requests({url:`user/passport/sendCode/${phone}`,method:'get'})
// 注册用户
export const reqResgister=(data)=>requests({url:'/user/passport/register',method:'post',data})
// 登录
export const reqLogin=(data)=>requests({url:'/user/passport/login',method:'post',data})
// 使用token获取用户信息
export const reqUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})
// 退出登录
export const reqLogout=()=>requests({url:'/user/passport/logout',method:'get'})
// 获取用户地址信息
export const reqUserAddress=()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
// 获取用户订单信息
export const reqUserTrade=()=>requests({url:'/order/auth/trade',method:'get'})
// 提交订单
export const reqSubmitTrade=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data})
// 获取订单支付信息
export const reqTradeInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
// 查询订单支付状态
export const reqPayStatus=(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
// 获取我的订单列表
export const reqMyOrder=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'})