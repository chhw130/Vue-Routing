import { createApp } from 'vue';

import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [],
});

const app = createApp(App);

app.mount('#app');
