import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './utils/flexible.js'
import './utils/common.css'
import './assets/iconfont/iconfont.css'


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import axios from 'axios';
Vue.prototype.axios = axios;

import store from './store'



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
