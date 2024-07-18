# 尚品汇项目笔记
1.启动项目浏览器自动打开
  在package.json文件中scripts配置项中设置`--open`
  ```javascript
  "scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  ```
  2.关闭eslint校验工具
  在vue.config.js文件中添加 `lintOnSave:false,`

  3.首先拆分项目，确定路由组件和非路由组件
  - 路由组件：Home、Search、Login、Register
  - 非路由组件：Header、Footer