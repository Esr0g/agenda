import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from "../../views/components/LoginForm.vue";
import RegisterForm from "../../views/components/RegisterForm.vue";
import Home from "../../views/components/Home.vue";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'LoginForm',
        path: '/login',
        component: LoginForm
    },
    {
        name: 'RegisterForm',
        path: '/register',
        component: RegisterForm
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;