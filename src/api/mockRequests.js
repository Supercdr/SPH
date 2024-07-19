// 引入nProgress进度条及其样式
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 对于axios进行二次封装
import axios from 'axios'
// 利用axios对象的create方法创建一个axios实例
const requests=axios.create({
  // 模拟mock接口
  baseURL:'/mock',
  // 设置请求超时的时间
  timeout:5000
})
// 请求拦截器,在发请求之前都会被检测到,可以在请求发出之前进行一些操作
requests.interceptors.request.use((config)=>{
  // 请求条开始
  nprogress.start()
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
  return Promise.reject(new error('fail'))
})
export default requests