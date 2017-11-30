// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
//解决移动端300ms延迟
import fastclick from 'fastclick'
//图片懒加载
import VueLazyload from 'vue-lazyload'
// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueLazyload,{
    loading:require('assets/default.png')
})
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
