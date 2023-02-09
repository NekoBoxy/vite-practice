import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/hello', component: HelloWorld },
  {
    path: '/:pathMatch(.*)*',
    component: Home
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
