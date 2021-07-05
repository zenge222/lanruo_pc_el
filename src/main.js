import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

import router from './router'
import vueSwiper from 'vue-awesome-swiper'
import "swiper/swiper.less";
import GeminiScrollbar from 'vue-gemini-scrollbar'
Vue.use(vueSwiper).use(GeminiScrollbar);
Vue.config.productionTip = false
Vue.prototype.pushTo = function (path, parameter = {}) {
  router.push({
    name: path,
    params: parameter
  });
};
Vue.prototype.replaceTo = function (path, parameter = {}) {
  router.replace({
    name: path,
    params: parameter
  });
};
window.document.title = '蓝若企业咨询管理有限公司';
// router.beforeEach((to, from, next) => {
//   // 设置title
//   // if (to.meta.title) {
//   //   window.document.title = to.meta.title;
//   // }
//   next();
// })

// 跳转后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')