// 引入nProgress进度条及其样式
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 引入store中的uuid
import store from '@/store'
// 对于axios进行二次封装
import axios from 'axios'
// 利用axios对象的create方法创建一个axios实例
const requests=axios.create({
  // 配置基础路径,发请求的时候每个路径中都会包含/api
  baseURL:'/api',
  // 设置请求超时的时间
  timeout:5000
})
// 请求拦截器,在发请求之前都会被检测到,可以在请求发出之前进行一些操作
requests.interceptors.request.use((config)=>{
  // 请求条开始
  nprogress.start()
  // 在请求头中添加userTempId
  if(store.state.ShopCart.uuid_token){
    config.headers.userTempId=store.state.ShopCart.uuid_token
  }
  // 在请求头中添加token
  if(store.state.Register.token){
    config.headers.token=store.state.Register.token
  }
  // config配置对象,其中包含请求头headers
  return config
})
// 响应拦截器,可以检测到服务器返回的数据,进行一些操作
requests.interceptors.response.use((res)=>{
  // 请求条结束
  nprogress.done()
  // 响应成功的回调函数
  return res.data
},(error)=>{
  // 响应失败的回调函数
  // 中止promise链
  return Promise.reject(new Error('request fail'))
})
export default requests