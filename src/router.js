import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";


import Page from "./components/Page.vue";
import About from "./components/About.vue";

const routes = [
    { path: '/', component: About },
    { path: '/search', component: Page }
]

const history = createWebHistory();
const router = createRouter({history, routes});

export default router;