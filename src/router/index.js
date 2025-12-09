import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Contacts from '../views/Contacts.vue'
import AddPost from '../views/AddPost.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/api/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/api/login',
        name: 'login',
        component: LogIn
    },
    {
        path: '/api/contacts',
        name: 'contacts',
        component: Contacts
    },
    {
        path: '/api/addpost',
        name: 'addpost',
        component: AddPost
    },
    { 
        path: "/:catchAll(.*)",
        name: "home",
        component: HomeView,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router