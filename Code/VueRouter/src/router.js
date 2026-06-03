import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/about', component: About },
        {
            path: '/movie',
            component: () => import('./components/Movie.vue'),
            children: [
                { path: ':id', name: 'MovieDetails', component: () => import('./components/MovieDetails.vue'), props: true }
            ]
        },
        { path: '/login', name: 'Login', component: () => import ('./components/Login.vue') }
    ]
})
router.beforeEach((to, from, next) => {
    let isLogin
})
export default router
