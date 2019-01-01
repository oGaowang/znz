import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 引入 axios

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const store = new Vuex.Store({
    state:{
        version:'3.4',
        organizationId:sessionStorage.getItem('organizationId')||'',
        userId:sessionStorage.getItem('userId')||'',
    },
    getters,
    mutations,
    actions
})

export default store