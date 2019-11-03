// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store/index'
import App from './App'
import router from './router/router'
import api from '../api/api.js'
import Mint from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import AV from './js/leancloud-AV'
import axios from 'axios'
import Axios from 'vue-axios'
import vConsole from './js/vconsole.js'
// 存储服务

Vue.use(Mint)
Vue.use(Axios,axios)

Vue.config.productionTip = false
Vue.prototype.$api=api
Vue.prototype.AV=AV

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
