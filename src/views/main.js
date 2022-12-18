'use strict';
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './routes.js';
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";

import './index.css';

const app = createApp(App);

// Permet d'avoir un instance unique de axios pour pouvoir faire des requetes
dayjs.extend(weekday);
app.config.globalProperties.$http = axios;
app.config.globalProperties.$dayjs = dayjs;

app.use(router);

app.directive('visible', function(el, binding) {
    el.style.visibility = !!binding.value ? 'visible' : 'hidden';
});
app.mount('#app');