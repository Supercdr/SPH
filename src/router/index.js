import vue from "vue";
import vueRouter from "vue-router";
import routes from "./routes";
import store from "@/store";
vue.use(vueRouter);
// 修改一下vueRouter原型的push方法,解决重复搜索的问题
// 保存原始的方法
let originPush = vueRouter.prototype.push;
let originReplace = vueRouter.prototype.replace;

// 改写新的push方法
vueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // 调用原始push方法,使用call方法修改函数上下文为vueRouter实例
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
// 改写新的replace方法
vueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    // 调用原始push方法,使用call方法修改函数上下文为vueRouter实例
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

let route = new vueRouter({
  routes,
  // 设置路由跳转到新页面时页面的滚动位置
  scrollBehavior(to, from, savadPosition) {
    if (savadPosition) {
      return savadPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
route.beforeEach(async (to, from, next) => {
  let token = store.state.Register.token;
  let username = store.state.Register.userInfo.name;
  // 已经登录过
  if (token) {
    // 不能去登陆页面
    if (to.path == "/login" || to.path == "/register") {
      next("/home");
    } else {
      if (username) {
        next();
      } else {
        try {
          await store.dispatch("getUserInfo");
          next()
        } catch (error) {
          await store.dispatch("logout");
          next("/login");
        }
      }
    }
  } else {
    // 未登录
    console.log('没有token')
    let toPath=['pay','center','shopCart']
    if(toPath.indexOf(to.path)==-1){
      console.log(toPath.indexOf(to.path))
      next('/login')
    }else{
      next();
    }
  }
});
export default route;
