import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "crmdemo-ui/dist/css/index.css";
import CUI from "crmdemo-ui";
import "./crmDirective.js";
Vue.use(CUI);

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: "medium" });

// // 自定义指令
// // 在全局范围内注册一个名为myscroll的vue指令
// Vue.directive("myscroll", {
//   // bind方法是vue指令的一部分,在DOM节点插入父节点时调用一次,这里接受三个参数:
//   // el:元素本身|bind:绑定信息|vnode:一个虚拟节点
//   bind(el, bind, vnode) {
//     // 拿到当前调用这个自定义指令的组件的this,这样就能访问该组件的数据和方法
//     const self = vnode.context;
//     let target = el.querySelector(".el-table__body-wrapper");

//     // // 监听滚动事件
//     target.addEventListener("scroll", () => {
//       // if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
//       //   if (self.over >= self.dataList.length) {
//       //     return;
//       //   }
//       //   self.over += 15;
//       // }
//       const _table = target.querySelector("table");
//       _table.style.paddingTop = self.padding[0] + "px";
//       _table.style.paddingBottom = self.padding[1] + "px";

//       // 卷上去的高度
//       self.scrollTop = target.scrollTop;
//       // 获取可见部分的高度
//       self.tableHeight = target.clientHeight;
//     });
//   },
// });

// Vue.mixin({
//   data() {
//     return {
//       start: 0,
//       over: 15,
//     };
//   },
// });

// Vue.mixin({
//   data() {
//     return {
//       scrollTop: 0,
//       tableHeight: 300,
//     };
//   },
//   computed: {
//     start() {
//       return Math.max(this.scrollTop / 40 - 5, 0); //40:每条tr的高度
//     },
//     over() {
//       return Math.min(
//         (this.scrollTop + this.tableHeight) / 40 + 5,
//         this.dataList.length
//       );
//     },
//     padding() {
//       let paddingBottom = (this.dataList - this.over) * 40;
//       let paddingTop = this.start * 40;
//       return [paddingTop, paddingBottom];
//     },
//   },
// });
// 注册组件实际调用的是component方法 Vue.compone nt("name", crmDetail);
// Vue.use方法注册组件的逻辑：调用当前需要注册的组件的install方法，在install方法内执行vue.component()方法
// 所以需要在当前组件上绑定一个install方法（在component->lib->crm->index.js）
new Vue({
  render: (h) => h(App),
}).$mount("#app");
