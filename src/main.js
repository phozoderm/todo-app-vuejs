import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import LoginPage from "@/pages/LoginPage.vue";
import SignUpPage from "@/pages/SignUpPage.vue";

const routes = [
    {path: '/login', component: LoginPage},
    {path: '/signup', component: SignUpPage},
    {path: '/:catchAll(.*)', redirect: ({path: '/login'})},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
const app = createApp(App)
app.use(router)
app.mount('#app')
