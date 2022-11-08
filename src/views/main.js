'use strict';
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from '../routes/vue-router/routes.js';

import './index.css';

const app = createApp(App);

// Permet d'avoir un instance unique de axios pour pouvoir faire des requetes
app.config.globalProperties.$http = axios;

app.use(router);
app.mount('#app');