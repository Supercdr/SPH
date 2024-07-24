import vue from 'vue'
import vueRouter from 'vue-router'
import routes from './routes'
vue.use(vueRouter)
// 修改一下vueRouter原型的push方法,解决重复搜索的问题
// 保存原始的方法
let originPush=vueRouter.prototype.push;
let originReplace=vueRouter.prototype.replace;

// 改写新的push方法
vueRouter.prototype.push=function(location,resolve,reject){
  if(resolve&&reject){
    // 调用原始push方法,使用call方法修改函数上下文为vueRouter实例
    originPush.call(this,location,resolve,reject)
  }else{
    originPush.call(this,location,()=>{},()=>{})
  }
}
// 改写新的replace方法
vueRouter.prototype.replace=function(location,resolve,reject){
  if(resolve&&reject){
    // 调用原始push方法,使用call方法修改函数上下文为vueRouter实例
    originReplace.call(this,location,resolve,reject)
  }else{
    originReplace.call(this,location,()=>{},()=>{})
  }
}

export default new vueRouter({
  routes,
  // 设置路由跳转到新页面时页面的滚动位置
  scrollBehavior(to,from,savadPosition){
    if(savadPosition){
      return savadPosition
    }else{
      return {x:0,y:0}
    }
  }
})
