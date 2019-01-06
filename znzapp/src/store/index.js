import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

import getters from './getter'
import mutations from './mutations'
import actions from './actions'


const store = new Vuex.Store({
    state:{
        version:"3.6",
        organizationId: '2864',
        userId: '5960',
        "isAdmin":'',
        organizationList:[],
        companyListIndex:0,
        expireShow:false,
    },
    getters,
    mutations,
    actions
})

export default store;