import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import layout from '../pages/layout'
import home from '../pages/home'
import find from '../pages/find'
import works from '../pages/works'
import Member from '../pages/Member'
import my from '../pages/my'

import AdSet from '../pages/AdSet'
import Introduction from '../pages/Introduction'
import IntroductDetail from '../pages/IntroductDetail'



const routes =[
    {path:'/',component:layout,redirect:'/home',
        children:[
            {path:'home',component:home,name:"home"},
            {path:'find',component:find,name:"find"},
            {path:'works',component:works,name:"works"},
            {path:'member',component:Member,name:"member"},
            {path:'my',component:my,name:"my"},
        ]
    },
    {path:'/adSet',component:AdSet,name:"adSet"},
    {path:'/introduction',component:Introduction,name:"introduction"},
    {path:'/introductDetail',component:IntroductDetail,name:"introductDetail"},
   
]


export default new VueRouter({
    routes,
    linkActiveClass:'active'
})
