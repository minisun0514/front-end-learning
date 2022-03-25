import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import About from './About';
import User from './User';

const routes = [
    { path: '/', component: App},
    { path: '/user/:id', component: User },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App).use(router).mount('#app');