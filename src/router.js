import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Aboutus from './pages/Aboutus.vue'
import ListProjects from './pages/ListProjects.vue'
import NotFound from './components/NotFound.vue'
import Project  from './components/Project.vue'

const router= createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/abaoutus',
            name: 'aboutus',
            component: Aboutus 
        },
        {
            path: '/listprojects',
            name: 'listprojects',
            component: ListProjects 
        },
        {
            path: '/project/:slug',
            name: 'project',
            component: Project 
        },
        {
            path: '/:catchAll(.*)', 
            name: 'NotFound',
            component: NotFound
        },

    ]

});
export {router};
