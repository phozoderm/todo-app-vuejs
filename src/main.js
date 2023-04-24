import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import LoginPage from "@/pages/LoginPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";
import ToDoListPage from "@/pages/ToDoListPage.vue";
import NavbarPage from "@/pages/NavbarPage.vue";

const routes = [
    {
        path: '/navbar', component: NavbarPage, children: [
            {path: '/login', component: LoginPage},
            {path: '/signup', component: SignUpPage},
            {path: '/to-do-list', component: ToDoListPage}
        ]
    },
    {path: '/:catchAll(.*)', redirect: ({path: '/login'})},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(router)
app.provide('router', router)
app.mount('#app')
