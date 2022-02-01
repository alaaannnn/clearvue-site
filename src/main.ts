/* eslint-disable import/extensions */
import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
