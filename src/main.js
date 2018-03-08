// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
//引入leancloud
import AV from 'leancloud-storage'

Vue.config.productionTip = false

Vue.use(ElementUI);

//初始化leancloud-storage
var APP_ID = 'ebVdpr6h8wAwSQAqjLeWHMG0-gzGzoHsz';
var APP_KEY = 'lOfvyxN2MLE2rXyXAJuuwDvy';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
