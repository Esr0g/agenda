import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
import Home from "./components/Home.vue";
import MonthView from "./components/MonthView.vue";

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;