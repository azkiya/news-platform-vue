import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CreateNews from '@/components/News/CreateNews'
import SingleNews from '@/components/News/SingleNews'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/news/create',
            name: 'CreateNews',
            component: CreateNews
        },
        {
            path: '/news/:id',
            name: 'SingleNews',
            component: SingleNews
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/signin',
            name: 'Signin',
            component: Signin
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        }
    ]
})