'use strict';
import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

import './index.css';

const app = createApp(App);

// Permet d'avoir un instance unique de axios pour pouvoir faire des requetes
app.config.globalProperties.$http = axios;

app.mount('#app');