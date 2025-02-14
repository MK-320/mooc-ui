//TODO: 整个组件库入口文件
import Card from './card'
import Demo from './demo'

const components = [
  Card,
  Demo
]

const install = function (Vue) {

        if(install.installed) return;

        Object.keys(components).forEach(key => {
            Vue.component(components[key].name, components[key]) //注册全局组件
        })

}

//导出install 方法，用于全局注册
export default {
    install ,
    //同时导出各个组件，支持按需引入
    Card, Demo}

export {Card,Demo } // 单独导出每个组件，允许按需引入后手动注册
