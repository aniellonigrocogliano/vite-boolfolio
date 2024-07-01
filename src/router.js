import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import Aboutus from './pages/Aboutus.vue'

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
    ]

});
export {router};
