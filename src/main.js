import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import LoginPage from "@/pages/LoginPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import ToDoListPage from "@/pages/ToDoListPage.vue";
import NavbarPage from "@/pages/NavbarPage.vue";

const jwt = localStorage.getItem('jwt')
const isLoggedIn = !!jwt
const nameSurname = localStorage.getItem('nameSurname')

const routes = [
    {
        path: '', component: NavbarPage, children: [
            {path: 'login', component: LoginPage},
            {path: 'signup', component: SignUpPage},
            {path: 'to-do-list', component: ToDoListPage}
        ]
    },
    {path: '/:catchAll(.*)', redirect: ({path: 'login'})},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) => {
    console.log("beforeEach", jwt, isLoggedIn, to)
    if (isLoggedIn && to.path === '/login') {
        return {path: '/to-do-list'}
    }
    if (isLoggedIn && to.path=== '/signup'){
        return {path: '/to-do-list'}
    }
})

router.beforeEach((to, from) => {
    if (!isLoggedIn && to.path === '/to-do-list') {
        return {path: '/login'}
    }
})

const app = createApp(App)
app.use(router)
app.provide('router', router)
app.provide('isLoggedIn', isLoggedIn)
app.provide('nameSurname', nameSurname)
app.mount('#app')
