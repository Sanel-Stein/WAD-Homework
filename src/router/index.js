import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import Contacts from '../views/Contacts.vue'
import AddPost from '../views/AddPost.vue'
import auth from "../auth";

const routes = [{
        path: '/api/posts',
        name: 'home',
        component: HomeView,
        beforeEnter: async(to, from, next) => {
            let authResult = await auth.authenticated();
            if (!authResult){
                next('/api/login')
            } else{
                next();
            }
        }
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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router