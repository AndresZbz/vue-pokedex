import { createRouter, createWebHistory } from "vue-router";


import Page from "./views/Page.vue";
import About from "./views/About.vue";
import Shiny from "./views/Shiny.vue";

const routes = [
    { path: '/', component: About },
    { path: '/search', component: Page },
    { path: '/shiny', component: Shiny }
]

const history = createWebHistory();
const router = createRouter({history, routes});

export default router;