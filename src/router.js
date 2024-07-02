import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Aboutus from './pages/Aboutus.vue'
import ListProjects from './pages/ListProjects.vue'
import NotFound from './components/NotFound.vue'

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
            path: '/listtrojects',
            name: 'listprojects',
            component: ListProjects 
        },
        {
            path: '/:catchAll(.*)', 
            name: 'NotFound',
            component: NotFound
        },

    ]

});
export {router};
