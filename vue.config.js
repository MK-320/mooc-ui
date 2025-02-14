// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
// }); defineConfig 是 Vue CLI 5.x 引入的一个工具，它帮助自动推断配置对象的类型。如果你使用的是 Vue CLI 4.x，不支持 defineConfig，所以只需直接导出一个普通的对象即可
// const path = require('path')
module.exports = {
  transpileDependencies: [],
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  lintOnSave: false,// 关闭eslint
  devServer: {
    watchOptions: {
      ignored: /DumpStack\.log\.tmp$/,
    }
  },

};

// 默认是使用src/main.js作pages为入口文件，
// 如果需要修改入口文件，可以在vue.config.js中添加如下配置：

