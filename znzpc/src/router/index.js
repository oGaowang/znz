import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from '../pages/Login'
import Layout from '../pages/Layout'
import Project from '../pages/Project'
import AddProject from '../pages/AddProject'
import ProjectList from '../pages/ProjectList'

const routes = [
    { path: '/', name: 'login', component: Login },
    {
        path: '/layout', name: 'layout', component: Layout, children: [
            {
                path: 'project', name: 'project', component: Project, children: [
                    { path: 'addProject', name: 'addProject', component: AddProject },
                    { path: 'projectList', name: 'projectList', component: ProjectList },
                ]
            }
        ]
    },

]


export default new VueRouter({
    routes
})