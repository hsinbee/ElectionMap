
import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
} from "vue-router";


const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('@/views/HomeView.vue'),
    },

    {
        path: '/2020_vote',
        name: '2020_vote',
        component: () => import('@/views/2020_vote.vue'),
    },
    {
        path: '/2016_vote',
        name: '2016_vote',
        component: () => import('@/views/2016_vote.vue'),
    },
    {
        path: '/2012_vote',
        name: '2012_vote',
        component: () => import('@/views/2012_vote.vue'),
    },
    {
        path: '/2008_vote',
        name: '2008_vote',
        component: () => import('@/views/2008_vote.vue'),
    }


];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;