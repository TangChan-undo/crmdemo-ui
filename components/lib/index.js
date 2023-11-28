// 这个index.js是为了让用户选择引入整个组件库，而不仅仅只能按需引入组件
import crmDetail from './crm'

const components = {
  crmDetail,
}
// 配置install函数
const install = function (Vue) {
  if (install.installed) return //避免重复安装
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

const API = {
  install,
}
export default API
