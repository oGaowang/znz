import Vue from 'vue';
import App from './App.vue';
import Router from './router';

import './assets/iconfont/iconfont.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import axios from 'axios';
Vue.prototype.axios=axios;

import store from './store'

new Vue({
  el: '#app',
  router:Router,
  store,
  render: h => h(App)
})
