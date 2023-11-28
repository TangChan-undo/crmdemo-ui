import crmDetail from './src/crmDetail.vue'
// 给crmDetail绑定一个install方法
crmDetail.install = function (Vue) {
  // vue注册组件的相关逻辑
  // 参数1：组件的名字；参数2：组件
  Vue.component(crmDetail.name, crmDetail)
}
export default crmDetail
